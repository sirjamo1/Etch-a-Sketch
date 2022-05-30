const container = document.getElementById('gridContainer');

rowCreator(16);
columnCreator(16);
const rowDiv = document.getElementById('rowDiv');
function rowCreator(rowNum) {
 for (let r = 0; r < rowNum; r++) {
  let row = document.createElement('div');
  rowDiv.appendChild(row).className = 'rows';
 };
};
const columnDiv = document.getElementById('columnDiv');
function columnCreator(columnNum) {
 for (let c = 0; c < columnNum; c++) {
  let column = document.createElement('div');
  columnDiv.appendChild(column).className = 'columns';
 };
};