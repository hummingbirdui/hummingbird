import { TabulatorFull as Tabulator } from 'tabulator-tables';

const TABLE_DATA = [
  { id: '001', name: 'Alice Johnson', email: 'alice.johnson@example.com', status: 'Active' },
  { id: '002', name: 'Bob Smith', email: 'bob.smith@example.com', status: 'Inactive' },
  { id: '003', name: 'Charlie Davis', email: 'charlie.davis@example.com', status: 'Pending' },
  { id: '004', name: 'Diana Lee', email: 'diana.lee@example.com', status: 'Active' },
  { id: '005', name: 'Ethan Brown', email: 'ethan.brown@example.com', status: 'Suspended' },
  { id: '006', name: 'Fiona Clark', email: 'fiona.clark@example.com', status: 'Active' },
  { id: '007', name: 'George Miller', email: 'george.miller@example.com', status: 'Inactive' },
  { id: '008', name: 'Hannah Wilson', email: 'hannah.wilson@example.com', status: 'Active' },
  { id: '009', name: 'Ian Moore', email: 'ian.moore@example.com', status: 'Pending' },
  { id: '010', name: 'Julia Taylor', email: 'julia.taylor@example.com', status: 'Active' },
  { id: '011', name: 'Kevin Anderson', email: 'kevin.anderson@example.com', status: 'Suspended' },
  { id: '012', name: 'Laura Thomas', email: 'laura.thomas@example.com', status: 'Active' },
  { id: '013', name: 'Michael White', email: 'michael.white@example.com', status: 'Inactive' },
  { id: '014', name: 'Natalie Harris', email: 'natalie.harris@example.com', status: 'Pending' },
  { id: '015', name: 'Oliver Martin', email: 'oliver.martin@example.com', status: 'Active' },
  { id: '016', name: 'Paula Thompson', email: 'paula.thompson@example.com', status: 'Active' },
  { id: '017', name: 'Quentin Lewis', email: 'quentin.lewis@example.com', status: 'Suspended' },
  { id: '018', name: 'Rachel Walker', email: 'rachel.walker@example.com', status: 'Active' },
  { id: '019', name: 'Samuel Hall', email: 'samuel.hall@example.com', status: 'Inactive' },
  { id: '020', name: 'Tina Young', email: 'tina.young@example.com', status: 'Pending' },
];

const tabulatorTablesInit = () => {
  new Tabulator('[data-tabulator-tables="data-tabulator-tables"]', {
    data: TABLE_DATA,
    layout: 'fitColumns',
    pagination: true,
    paginationMode: 'local',
    paginationSize: 6,
    paginationSizeSelector: [3, 6, 8, 10],
    movableColumns: true,
    paginationCounter: 'rows',
    paginationButtonCount: 3,
    columns: [
      { title: 'ID', field: 'id', editable: true },
      { title: 'Name', field: 'name' },
      {
        title: 'Email',
        field: 'email',
        formatter: (cell) => {
          return `<a href="mailto:${cell.getValue()}">${cell.getValue()}</a>`;
        },
      },
      { title: 'Status', field: 'status' },
    ],
  });


  const table = new Tabulator('[data-tabulator-tables="feature-rich"]', {
    data: TABLE_DATA,
    layout: 'fitColumns',
    responsiveLayout: 'hide',
    addRowPos: 'top',
    history: true,
    pagination: true,
    paginationMode: 'local',
    paginationSize: 7,
    paginationCounter: 'rows',
    movableColumns: true,
    selectableRows: true,
    initialSort: [{ column: 'name', dir: 'asc' }],
    columnDefaults: {
      tooltip: true,
    },
    movableRows: true,
    groupBy: 'status',

    columns: [
      { title: 'ID', field: 'id', editor: 'input' },
      { title: 'Name', field: 'name', editor: 'input' },
      {
        title: 'Email',
        field: 'email',
        formatter: function (cell) {
          const value = cell.getValue();
          return `<a href="mailto:${value}">${value}</a>`;
        },
      },
      {
        title: 'Status',
        field: 'status',
        editor: 'list',
        editorParams: { values: ['Active', 'Inactive', 'Pending', 'Suspended'] },
      },
    ],
  });

  const fieldEl = document.getElementById('filter-field') as HTMLSelectElement;
  const typeEl = document.getElementById('filter-type') as HTMLSelectElement;
  const valueEl = document.getElementById('filter-value') as HTMLInputElement;

  console.log(fieldEl, typeEl, valueEl);

  // Custom filter example
  // function customFilter(data: any): boolean {
  //   return data. && data.rating < 3;
  // }

  // Trigger setFilter function with correct parameters
  function updateFilter(): void {
    const filterVal = fieldEl.options[fieldEl.selectedIndex].value;
    const typeVal = typeEl.options[typeEl.selectedIndex].value;

    const filter = filterVal;

    if (filterVal == 'function') {
      typeEl.disabled = true;
      valueEl.disabled = true;
    } else {
      typeEl.disabled = false;
      valueEl.disabled = false;
    }

    if (filterVal) {
      table.setFilter(filter, typeVal, valueEl.value);
    }
  }

  // Update filters on value change
  document.getElementById('filter-field')?.addEventListener('change', updateFilter);
  document.getElementById('filter-type')?.addEventListener('change', updateFilter);
  document.getElementById('filter-value')?.addEventListener('keyup', updateFilter);

  // Clear filters on "Clear Filters" button click
  document.getElementById('filter-clear')?.addEventListener('click', function () {
    fieldEl.value = '';
    typeEl.value = '=';
    valueEl.value = '';

    table.clearFilter(true);
  });
};

export default tabulatorTablesInit;
