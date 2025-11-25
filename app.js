async function getData(major) {
    const response = await fetch("cit5students.json");
    const data = await response.json();

    // Filter dataset
    const filtered = data.filter(student => student.Major === major);

    // Compile template
    const templateText = document.getElementById('menuTemplate').innerHTML;
    const compiledTemplate = Handlebars.compile(templateText);
    const compiledHtml = compiledTemplate({ rows: filtered });

    // Insert into table
    document.getElementById('dataTable').innerHTML = compiledHtml;
}
