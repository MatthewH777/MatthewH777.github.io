async function getData(major) {
    const response = await fetch("cit5students.json");
    const data = await response.json();

    // Filter dataset
    const filtered = data.filter(student => student.Major === major);

    // Compile template
    const templateText = document.getElementById('menuTemplate').innerHTML;
    const compiledTemplate = Handlebars.compile(templateText);
    const compiledHtml = compiledTemplate({ rows: filtered });

    const table = document.getElementById('dataTable');
    table.innerHTML = compiledHtml;
    table.style.display = 'table'; // make it visible


    // Insert into table
    document.getElementById('dataTable').innerHTML = compiledHtml;
}

