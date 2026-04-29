import noUiSlider from 'nouislider';

const noUiSliderInit = () => {
  // Advance range slider
  const slider = document.querySelector('[data-nouislider="basic-example"]') as HTMLElement;

  if (slider) {
    noUiSlider.create(slider, {
      start: [20, 80],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });
  }

  const singleHandleSlider = document.querySelector('[data-nouislider="single-handle"]') as HTMLElement;

  if (singleHandleSlider) {
    noUiSlider.create(singleHandleSlider, {
      start: [20],
      connect: 'lower',
      range: {
        min: 0,
        max: 100,
      },
    });
  }

  const stepsSlider = document.querySelector('[data-nouislider="steps-slider"]') as HTMLElement;

  if (stepsSlider) {
    noUiSlider.create(stepsSlider, {
      start: [20, 80],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
      step: 10,
    });
  }

  const tooltipSlider = document.querySelector('[data-nouislider="with-tooltips"]') as HTMLElement;

  if (tooltipSlider) {
    noUiSlider.create(tooltipSlider, {
      start: [20, 80],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
      tooltips: true,
    });
  }

  const verticalSlider = document.querySelector('[data-nouislider="vertical-slider"]') as HTMLElement;

  if (verticalSlider) {
    noUiSlider.create(verticalSlider, {
      start: [20, 80],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
      tooltips: true,
      orientation: 'vertical',
    });
  }

  const disabledSlider = document.querySelector('[data-nouislider="disabled-slider"]') as HTMLElement;

  if (disabledSlider) {
    noUiSlider.create(disabledSlider, {
      start: [20, 80],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });
  }

  const pipsSlider = document.querySelector('[data-nouislider="pips-slider"]') as HTMLElement;

  if (pipsSlider) {
    if (pipsSlider) {
      noUiSlider.create(pipsSlider, {
        start: [100, 400],
        connect: true,
        range: {
          min: 0,
          max: 500,
        },
        tooltips: true,
        pips: {
          mode: 'count' as any,
          values: 5,
        },
      });
    }
  }

  const colorSliders = document.querySelectorAll('[data-nouislider="color-slider"]');

  if (colorSliders) {
    if (colorSliders) {
      colorSliders.forEach((colorSlider) =>
        noUiSlider.create(colorSlider as HTMLElement, {
          start: [20],
          connect: 'lower',
          range: {
            min: 0,
            max: 100,
          },
        }),
      );
    }
  }

  const sizeSliders = document.querySelectorAll('[data-nouislider="size-variant"]');
  if (sizeSliders) {
    sizeSliders.forEach((sizeSlider) => {
      noUiSlider.create(sizeSlider as HTMLElement, {
        start: [20],
        connect: 'lower',
        range: {
          min: 0,
          max: 100,
        },
      });
    });
  }
};

export default noUiSliderInit;
