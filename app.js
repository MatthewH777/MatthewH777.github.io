async function getData(Major) {
    var response = await fetch("cit5students.json"); // get request

    // filter data array
    Major = data.filter( (major) => HTMLTableRowElement.Major == major );

    var templateText = document.getElementById('menuTemplate').innerHTML;
    var compiledTemplateText = Handlebars.compile(templateText);
    compiledHtml = compiledTemplateText({ rows: Major}) // add filter using what we made on line 5
    document.getElementById('dataTable')
}