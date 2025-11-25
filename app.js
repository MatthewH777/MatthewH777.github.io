async function getData(major) {
    var response = await fetch("cit5students.json"); // get request

    if(response.ok) {
        var data = await response.json();

    // filter data array
    filterMajor = data.filter(name => name.major == major );

    var templateText = document.getElementById('menuTemplate').innerHTML;
    var compiledTemplateText = Handlebars.compile(templateText);
    compiledHtml = compiledTemplateText({ rows: filterMajor}) // add filter using what we made on line 5
    document.getElementById('dataTable').innerHTML = compiledHtml;
    }
    else {
        document.querySelector('#dataTable').innerHTML = "There was an error."
    }
}