// from data.js
var tableData = data;

//console.log the data
//console.log(tableData);

// Get a reference to the table body, button, form, inputs
var tbody = d3.select("tbody");
//console.log(tbody);

//Write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
// Step 1: Loop Through `data` and console.log each ufo sighting report object
// tableData.forEach(function(ufoSightingReport) {
//     console.log(ufoSightingReport);
// });

// Step 2:  Use d3 to append one table row `tr` for each ufo sighting report object
// data.forEach(function(ufoSightingReport) {
//     console.log(ufoSightingReport);
//     var row = tbody.append("tr");
// });
// Step 3:  Use `Object.entries` to console.log each ufo sighting report value
data.forEach(function(ufoSightingReport) {
    console.log(ufoSightingReport);
    var row = tbody.append("tr");
    Object.entries(ufoSightingReport).forEach(function([key, value]) {
        //console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});


//Use a date form in your HTML document and write JavaScript code that will listen for events 
//and search through the date / time column to find rows that match user input.

var button = d3.select("#filter-btn");
//var form = d3.select("form");

// // Create event handlers 
button.on("click", runEnter);
//form.on("submit", runEnter);

function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(date) {
        //console.log(date);
        var row = tbody.append("tr");
        Object.entries(date).forEach(function([key, value]) {
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
};