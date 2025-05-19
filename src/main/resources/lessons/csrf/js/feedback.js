'use strict'; // Add 'use strict' to avoid accidental global variable declarations

webgoat.customjs.feedback = function() {
    const data = {};
    $('#csrf-feedback').find('input, textarea, select').each(function(i, field) {
        data[field.name] = field.value;
    });
    return JSON.stringify(data);
}