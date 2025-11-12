/**
 * Removes duplicate rows from the current sheet.
 */
function removeDuplicates() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const uniqueData = {};
  for (let row of data) {
    const key = row.join();
    uniqueData[key] = uniqueData[key] || row;
  }
  sheet.clearContents();
  const newData = Object.values(uniqueData);
  sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
}


function storeAnotherFunction() {
  console.log("Once a library is created you can continue to add scripts to it.");
}