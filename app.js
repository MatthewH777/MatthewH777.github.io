async function getData(major) {// get major
    var response = await fetch("cit5students.json"); // ajax request
    var data = await response.json();

    // filter data of students by major
    var filtered = data.filter(student => student.major === major);

    // template
    var templateText = document.getElementById('menuTemplate').innerHTML;
    var compiledTemplate = Handlebars.compile(templateText);
    var compiledHtml = compiledTemplate({ rows: filtered });

    // Insert into table container
    var table = document.getElementById('dataTable');
    table.innerHTML = compiledHtml;
    table.style.display = 'block'; 
}

