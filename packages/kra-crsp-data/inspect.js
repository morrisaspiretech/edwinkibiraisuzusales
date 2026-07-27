const xlsx = require('xlsx');

const workbook = xlsx.readFile('d:/aspiremotors/packages/kra-crsp-data/crsp-2025.xlsx');

// Inspect the first sheet - M.Vehicle CRSP July 2025
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Get the range
const range = xlsx.utils.decode_range(worksheet['!ref']);
console.log('Sheet:', sheetName);
console.log('Range:', worksheet['!ref']);
console.log('Rows:', range.e.r - range.s.r + 1, 'Cols:', range.e.c - range.s.c + 1);
console.log('---');

// Print first 5 rows raw cell values
for (let r = range.s.r; r <= Math.min(range.s.r + 5, range.e.r); r++) {
  const row = [];
  for (let c = range.s.c; c <= Math.min(range.s.c + 14, range.e.c); c++) {
    const cell = worksheet[xlsx.utils.encode_cell({ r, c })];
    row.push(cell ? cell.v : '');
  }
  console.log(`Row ${r}:`, JSON.stringify(row));
}

// Also check sheet 2 (Motor Cycles)
const sheet2 = workbook.Sheets[workbook.SheetNames[1]];
if (sheet2 && sheet2['!ref']) {
  const range2 = xlsx.utils.decode_range(sheet2['!ref']);
  console.log('\n--- Motor Cycles Sheet ---');
  console.log('Range:', sheet2['!ref']);
  for (let r = range2.s.r; r <= Math.min(range2.s.r + 5, range2.e.r); r++) {
    const row = [];
    for (let c = range2.s.c; c <= Math.min(range2.s.c + 14, range2.e.c); c++) {
      const cell = sheet2[xlsx.utils.encode_cell({ r, c })];
      row.push(cell ? cell.v : '');
    }
    console.log(`Row ${r}:`, JSON.stringify(row));
  }
}
