import Dropdown from "bootstrap/js/dist/dropdown";
import Data from "bootstrap/js/dist/dom/data";
import { getElement } from "bootstrap/js/dist/util/index.js";
import EventHandler from "bootstrap/js/dist/dom/event-handler.js";
import SelectorEngine from "bootstrap/js/dist/dom/selector-engine.js";

const DATA_KEY = "bs.dropdown";
const TAB_KEY = "Tab";
const SELECTOR_DATA_TOGGLE =
  '[data-hb-toggle="dropdown"]:not(.disabled):not(:disabled)';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = ".data-api";
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`;
const SELECTOR_MENU = ".dropdown-menu";
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;
const RIGHT_MOUSE_BUTTON = 2;
const CLASS_NAME_SHOW = "show";
const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE}.${CLASS_NAME_SHOW}`;

class HummingbirdDropdown extends Dropdown {
  _config: {
    autoClose: boolean | "inside" | "outside";
  };
  _menu: HTMLElement;
  _element: HTMLElement;
  _completeHide: (relatedTarget: {
    relatedTarget: Element;
    clickEvent?: Event;
  }) => void;
  static dataApiKeydownHandler: (event: KeyboardEvent) => void;
  constructor(
    element: Element | string,
    config: Partial<Dropdown.Options> = {}
  ) {
    const resolvedElement = getElement(element);
    const mergedConfig = HummingbirdDropdown._buildConfig(
      resolvedElement,
      config
    );
    super(resolvedElement, mergedConfig);
  }

  static _buildConfig(
    element: Element,
    config: Partial<Dropdown.Options>
  ): Partial<Dropdown.Options> {
    const attr = element.getAttribute("data-hb-auto-close");
    let parsedAutoClose: boolean | "inside" | "outside" = true;

    if (attr === "false") {
      parsedAutoClose = false;
    } else if (attr === "inside" || attr === "outside") {
      parsedAutoClose = attr;
    }

    return {
      ...config,
      autoClose: parsedAutoClose,
    };
  }

  static getInstance(element: Element | string): HummingbirdDropdown {
    const el = getElement(element);
    return Data.get(el, this.DATA_KEY);
  }

  static getOrCreateInstance(
    element: Element | string,
    config: Partial<Dropdown.Options> = {}
  ): HummingbirdDropdown {
    return this.getInstance(element) || new this(element, config);
  }

  static clearMenus(event: any) {
    if (
      event.button === RIGHT_MOUSE_BUTTON ||
      (event.type === "keyup" && event.key !== TAB_KEY)
    ) {
      return;
    }
    const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);

    for (const toggle of openToggles) {
      const context = HummingbirdDropdown.getInstance(toggle);
      if (!context || context._config.autoClose === false) {
        continue;
      }

      const composedPath = event.composedPath();
      const isMenuTarget = composedPath.includes(context._menu);
      if (
        composedPath.includes(context._element) ||
        (context._config.autoClose === "inside" && !isMenuTarget) ||
        (context._config.autoClose === "outside" && isMenuTarget)
      ) {
        continue;
      }
      if (
        context._menu.contains(event.target) &&
        ((event.type === "keyup" && event.key === TAB_KEY) ||
          /input|select|option|textarea|form/i.test(event.target.tagName))
      ) {
        continue;
      }

      const relatedTarget = { relatedTarget: context._element };

      if (event.type === "click") {
        (relatedTarget as any).clickEvent = event;
      }
      context._completeHide(relatedTarget);
    }
  }
}

EventHandler.on(
  document,
  EVENT_KEYDOWN_DATA_API,
  SELECTOR_DATA_TOGGLE,
  HummingbirdDropdown.dataApiKeydownHandler
);
EventHandler.on(
  document,
  EVENT_KEYDOWN_DATA_API,
  SELECTOR_MENU,
  HummingbirdDropdown.dataApiKeydownHandler
);
EventHandler.on(document, EVENT_CLICK_DATA_API, HummingbirdDropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, HummingbirdDropdown.clearMenus);
EventHandler.on(
  document,
  EVENT_CLICK_DATA_API,
  SELECTOR_DATA_TOGGLE,
  function (event: any) {
    event.preventDefault();
    HummingbirdDropdown.getOrCreateInstance(this).toggle();
  }
);

document.addEventListener("DOMContentLoaded", () => {
  window.HummingbirdDropdown = HummingbirdDropdown;
});
export default HummingbirdDropdown;
