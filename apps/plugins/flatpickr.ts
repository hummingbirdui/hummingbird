import flatpickr from 'flatpickr';

const flatpickrInit = () => {
  flatpickr('#datepicker', { dateFormat: 'd-m-Y' });
  flatpickr('#timepicker', { enableTime: true, noCalendar: true, dateFormat: 'H:i' });
  flatpickr('#datetimepicker', { enableTime: true, dateFormat: 'd-m-Y H:i' });
  flatpickr('#rangepicker', { mode: 'range', dateFormat: 'd-m-Y' });
  flatpickr('#multiple-dates', { mode: 'multiple', dateFormat: 'd-m-Y' });
  flatpickr('#disabled-dates', {
    dateFormat: 'd-m-Y',
    disable: [
      function (date) {
        return date.getDay() === 5 || date.getDay() === 6;
      },
    ],
  });

  flatpickr('#external-el', { wrap: true, dateFormat: 'd-m-Y' });
  flatpickr('#inline-calendar-el', {
    wrap: true,
    inline: true,
    appendTo: document.querySelector('#datepicker-inline') as HTMLElement,
  });
};

export default flatpickrInit;
