// from data.js
var tableData = data;


// A generic fuction which takes data and populates table 
function load(tdata) {
    // Find tbody
    tbody = d3.select('tbody');
    // console.log(tbody);

    // Clear table contents
    tbody.html("");

    // Load data 
    tdata.forEach(element => {
        row = tbody.append('tr');
        row.append('td').text(element.datetime);
        row.append('td').text(element.city);
        row.append('td').text(element.state);
        row.append('td').text(element.country);
        row.append('td').text(element.shape);
        row.append('td').text(element.durationMinutes);
        row.append('td').text(element.comments);
    })
}

// Register callback for Button Click
button = d3.select('#filter-btn')
button.on('click', function () {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get Date Value from form
    datevalue = d3.select('#datetime').property('value');
    cityvalue = d3.select('#city').property('value');
    statevalue = d3.select('#state').property('value');
    countryvalue = d3.select('#country').property('value');
    shapevalue = d3.select('#shape').property('value');

    // Filter data 
    var filteredData = tableData;
    if (datevalue) {
        // console.log(`Filter Date = ${datevalue}`);
        filteredData = filteredData.filter(element => element.datetime === datevalue);
    }
    if (cityvalue) {
        // console.log(`Filter City = ${cityvalue}`);
        filteredData = filteredData.filter(element => element.city === cityvalue);
    }
    if (statevalue) {
        // console.log(`Filter State = ${statevalue}`);
        filteredData = filteredData.filter(element => element.state === statevalue);
    }
    if (countryvalue) {
        // console.log(`Filter Country = ${countryvalue}`);
        filteredData = filteredData.filter(element => element.country === countryvalue);
    }
    if (shapevalue) {
        // console.log(`Filter Shape = ${shapevalue}`);
        filteredData = filteredData.filter(element => element.shape === shapevalue);
    }
    // Refresh table
    // console.log(filteredData)
    load(filteredData)
})

// Load table with all data
load(tableData);
