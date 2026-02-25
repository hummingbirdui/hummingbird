import * as tailwindcss from 'tailwindcss'
import * as assets from './assets'
import { Instrumentation } from './instrumentation'


/**
 * The type used by `<style>` tags that contain input CSS.
 */
const STYLE_TYPE = 'text/tailwindcss'

/**
 * The current Tailwind CSS compiler.
 *
 * This gets recreated:
 * - When stylesheets change
 */
let compiler: Awaited<ReturnType<typeof tailwindcss.compile>>

/**
 * The list of all seen classes on the page so far. The compiler already has a
 * cache of classes but this lets us only pass new classes to `build(…)`.
 */
let classes = new Set<string>()

/**
 * The last input CSS that was compiled. If stylesheets "change" without
 * actually changing, we can avoid a full rebuild.
 */
let lastCss = ''

/**
 * The stylesheet that we use to inject the compiled CSS into the page.
 */
let sheet = document.createElement('style')

/**
 * The queue of build tasks that need to be run. This is used to ensure that we
 * don't run multiple builds concurrently.
 */
let buildQueue = Promise.resolve()

/**
 * What build this is
 */
let nextBuildId = 1

/**
 * Used for instrumenting the build process. This data shows up in the
 * performance tab of the browser's devtools.
 */
let I = new Instrumentation()

/**
 * Create the Tailwind CSS compiler
 *
 * This handles loading imports, plugins, configs, etc…
 *
 * This does **not** imply that the CSS is actually built. That happens in the
 * `build` function and is a separate scheduled task.
 */
async function createCompiler() {
  I.start(`Create compiler`)
  I.start('Reading Stylesheets')

  // The stylesheets may have changed causing a full rebuild so we'll need to
  // gather the latest list of stylesheets.
  let stylesheets: Iterable<HTMLStyleElement> = document.querySelectorAll(
    `style[type="${STYLE_TYPE}"]`,
  )

  let css = ''
  for (let sheet of stylesheets) {
    observeSheet(sheet)
    css += sheet.textContent + '\n'
  }

  // The user might have no stylesheets, or a some stylesheets without `@import`
  // because they want to customize their theme so we'll inject the main import
  // for them. However, if they start using `@import` we'll let them control
  // the build completely.
  if (!css.includes('@import')) {
    css = `@import "tailwindcss";@import "@hummingbirdui/hummingbird/src/index.css";${css}`
  }

  I.end('Reading Stylesheets', {
    size: css.length,
    changed: lastCss !== css,
  })

  // The input CSS did not change so the compiler does not need to be recreated
  if (lastCss === css) return

  lastCss = css

  I.start('Compile CSS')
  console.log(css);
  try {
    compiler = await tailwindcss.compile(css, {
      base: '/',
      loadStylesheet,
      loadModule,
    })
  } finally {
    I.end('Compile CSS')
    I.end(`Create compiler`)
  }

  classes.clear()
}

async function loadStylesheet(id: string, base: string) {
  // Centralized stylesheet configuration
  const stylesheetConfigs = [
    // Tailwind CSS core files
    {
      ids: ['tailwindcss'],
      path: 'virtual:tailwindcss/index.css',
      content: () => assets.css.index,
    },
    {
      ids: ['tailwindcss/preflight', 'tailwindcss/preflight.css', './preflight.css'],
      path: 'virtual:tailwindcss/preflight.css',
      content: () => assets.css.preflight,
    },
    {
      ids: ['tailwindcss/theme', 'tailwindcss/theme.css', './theme.css'],
      path: 'virtual:tailwindcss/theme.css',
      content: () => assets.css.theme,
    },
    {
      ids: ['tailwindcss/utilities', 'tailwindcss/utilities.css', './utilities.css'],
      path: 'virtual:tailwindcss/utilities.css',
      content: () => assets.css.utilities,
    },
    // Hummingbird UI core
    {
      ids: ['@hummingbirdui/hummingbird', '@hummingbirdui/hummingbird/src/index.css'],
      path: 'virtual:hummingbirdui/index.css',
      content: () => assets.css.hummingbird,
    },
    // Hummingbird UI components
    {
      ids: ['./theme/theme.css'],
      path: 'virtual:hummingbirdui/theme.css',
      content: () => assets.css.hbtheme,
    },
    {
      ids: ['./default.css'],
      path: 'virtual:hummingbirdui/default.css',
      content: () => assets.css.hbdefault,
    },
    {
      ids: ['./reboot.css'],
      path: 'virtual:hummingbirdui/reboot.css',
      content: () => assets.css.hbreboot,
    },
    {
      ids: ['./layout/grid.css'],
      path: 'virtual:hummingbirdui/grid.css',
      content: () => assets.css.hblayout,
    },
    {
      ids: ['./components/components.css'],
      path: 'virtual:hummingbirdui/components.css',
      content: () => assets.css.hbcomponents,
    },
    {
      ids: ['./button.css'],
      path: 'virtual:hummingbirdui/button.css',
      content: () => assets.css.hbbutton,
    },
    {
      ids: ['./accordion.css'],
      path: 'virtual:hummingbirdui/accordion.css',
      content: () => assets.css.hbaccordion,
    },
    {
      ids: ['./alert.css'],
      path: 'virtual:hummingbirdui/alert.css',
      content: () => assets.css.hbalert,
    },
    {
      ids: ['./avatar.css'],
      path: 'virtual:hummingbirdui/avatar.css',
      content: () => assets.css.hbavatar,
    },
    {
      ids: ['./badge.css'],
      path: 'virtual:hummingbirdui/badge.css',
      content: () => assets.css.hbbadge,
    },
    {
      ids: ['./breadcrumb.css'],
      path: 'virtual:hummingbirdui/breadcrumb.css',
      content: () => assets.css.hbbreadcrumb,
    },
    {
      ids: ['./button-group.css'],
      path: 'virtual:hummingbirdui/button-group.css',
      content: () => assets.css.hbbuttongroup,
    },
    {
      ids: ['./card.css'],
      path: 'virtual:hummingbirdui/card.css',
      content: () => assets.css.hbcard,
    },
    {
      ids: ['./carousel.css'],
      path: 'virtual:hummingbirdui/carousel.css',
      content: () => assets.css.hbcarousel,
    },
    {
      ids: ['./list-group.css'],
      path: 'virtual:hummingbirdui/list-group.css',
      content: () => assets.css.hblistgroup,
    },
    {
      ids: ['./offcanvas.css'],
      path: 'virtual:hummingbirdui/offcanvas.css',
      content: () => assets.css.hboffcanvas,
    },
    {
      ids: ['./dropdown.css'],
      path: 'virtual:hummingbirdui/dropdown.css',
      content: () => assets.css.hbdropdown,
    },
    {
      ids: ['./floating-labels.css'],
      path: 'virtual:hummingbirdui/floating-labels.css',
      content: () => assets.css.hbfloatinglabels,
    },
    {
      ids: ['./form-check.css'],
      path: 'virtual:hummingbirdui/form-check.css',
      content: () => assets.css.hbformcheck,
    },
    {
      ids: ['./form-control.css'],
      path: 'virtual:hummingbirdui/form-control.css',
      content: () => assets.css.hbformcontrol,
    },
    {
      ids: ['./form-range.css'],
      path: 'virtual:hummingbirdui/form-range.css',
      content: () => assets.css.hbformrange,
    },
    {
      ids: ['./form-select.css'],
      path: 'virtual:hummingbirdui/form-select.css',
      content: () => assets.css.hbformselect,
    },
    {
      ids: ['./input-group.css'],
      path: 'virtual:hummingbirdui/input-group.css',
      content: () => assets.css.hbinputgroup,
    },
    {
      ids: ['./link.css'],
      path: 'virtual:hummingbirdui/link.css',
      content: () => assets.css.hblink,
    },
    {
      ids: ['./modal.css'],
      path: 'virtual:hummingbirdui/modal.css',
      content: () => assets.css.hbmodal,
    },
    {
      ids: ['./nav.css'],
      path: 'virtual:hummingbirdui/nav.css',
      content: () => assets.css.hbnav,
    },
    {
      ids: ['./navbar.css'],
      path: 'virtual:hummingbirdui/navbar.css',
      content: () => assets.css.hbnavbar,
    },
    {
      ids: ['./table.css'],
      path: 'virtual:hummingbirdui/table.css',
      content: () => assets.css.hbtable,
    },
    {
      ids: ['./tooltip.css'],
      path: 'virtual:hummingbirdui/tooltip.css',
      content: () => assets.css.hbtooltip,
    },
    {
      ids: ['./transitions.css'],
      path: 'virtual:hummingbirdui/transitions.css',
      content: () => assets.css.hbtransitions,
    },
    {
      ids: ['./custom-scrollbar.css'],
      path: 'virtual:hummingbirdui/custom-scrollbar.css',
      content: () => assets.css.hbcustomscrollbar,
    },
    {
      ids: ['./divider.css'],
      path: 'virtual:hummingbirdui/divider.css',
      content: () => assets.css.hbdivider,
    },
    {
      ids: ['./loader.css'],
      path: 'virtual:hummingbirdui/loader.css',
      content: () => assets.css.hbloader,
    },
    {
      ids: ['./pagination.css'],
      path: 'virtual:hummingbirdui/pagination.css',
      content: () => assets.css.hbpagination,
    },
    {
      ids: ['./placeholders.css'],
      path: 'virtual:hummingbirdui/placeholders.css',
      content: () => assets.css.hbplaceholder,
    },
    {
      ids: ['./popover.css'],
      path: 'virtual:hummingbirdui/popover.css',
      content: () => assets.css.hbpopover,
    },
    {
      ids: ['./progress.css'],
      path: 'virtual:hummingbirdui/progress.css',
      content: () => assets.css.hbprogress,
    },
    {
      ids: ['./toasts.css'],
      path: 'virtual:hummingbirdui/toasts.css',
      content: () => assets.css.hbtoasts,
    },
    {
      ids: ['./validation.css'],
      path: 'virtual:hummingbirdui/validation.css',
      content: () => assets.css.hbvalidation,
    },
  ];

  function load() {
    // Find the configuration that matches the requested ID
    const config = stylesheetConfigs.find(config => config.ids.includes(id));
    
    if (!config) {
      throw new Error(`The browser build does not support @import for "${id}"`);
    }

    return {
      path: config.path,
      base,
      content: config.content(),
    };
  }

  try {
    let sheet = load()

    I.hit(`Loaded stylesheet`, {
      id,
      base,
      size: sheet.content.length,
    })

    return sheet
  } catch (err) {
    I.hit(`Failed to load stylesheet`, {
      id,
      base,
      error: (err as Error).message ?? err,
    })

    throw err
  }
}

async function loadModule(): Promise<never> {
  throw new Error(`The browser build does not support plugins or config files.`)
}

async function build(kind: 'full' | 'incremental') {
  if (!compiler) return

  // 1. Refresh the known list of classes
  let newClasses = new Set<string>()

  I.start(`Collect classes`)

  for (let element of document.querySelectorAll('[class]')) {
    for (let c of element.classList) {
      if (classes.has(c)) continue

      classes.add(c)
      newClasses.add(c)
    }
  }

  I.end(`Collect classes`, {
    count: newClasses.size,
  })

  if (newClasses.size === 0 && kind === 'incremental') return

  // 2. Compile the CSS
  I.start(`Build utilities`)

  sheet.textContent = compiler.build(Array.from(newClasses))

  I.end(`Build utilities`)
}

function rebuild(kind: 'full' | 'incremental') {
  async function run() {
    if (!compiler && kind !== 'full') {
      return
    }

    let buildId = nextBuildId++

    I.start(`Build #${buildId} (${kind})`)

    if (kind === 'full') {
      await createCompiler()
    }

    I.start(`Build`)
    await build(kind)
    I.end(`Build`)

    I.end(`Build #${buildId} (${kind})`)
  }

  buildQueue = buildQueue.then(run).catch((err) => I.error(err))
}

// Handle changes to known stylesheets
let styleObserver = new MutationObserver(() => rebuild('full'))

function observeSheet(sheet: HTMLStyleElement) {
  styleObserver.observe(sheet, {
    attributes: true,
    attributeFilter: ['type'],
    characterData: true,
    subtree: true,
    childList: true,
  })
}

// Handle changes to the document that could affect the styles
// - Changes to any element's class attribute
// - New stylesheets being added to the page
// - New elements (with classes) being added to the page
new MutationObserver((records) => {
  let full = 0
  let incremental = 0

  for (let record of records) {
    // New stylesheets == tracking + full rebuild
    for (let node of record.addedNodes as Iterable<HTMLElement>) {
      if (node.nodeType !== Node.ELEMENT_NODE) continue
      if (node.tagName !== 'STYLE') continue
      if (node.getAttribute('type') !== STYLE_TYPE) continue

      observeSheet(node as HTMLStyleElement)
      full++
    }

    // New nodes require an incremental rebuild
    for (let node of record.addedNodes) {
      if (node.nodeType !== 1) continue

      // Skip the output stylesheet itself to prevent loops
      if (node === sheet) continue

      incremental++
    }

    // Changes to class attributes require an incremental rebuild
    if (record.type === 'attributes') {
      incremental++
    }
  }

  if (full > 0) {
    return rebuild('full')
  } else if (incremental > 0) {
    return rebuild('incremental')
  }
}).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['class'],
  childList: true,
  subtree: true,
})

rebuild('full')

document.head.append(sheet)
