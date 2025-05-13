// Declaring a global variable to avoid the 'no-undef' violation
var globally;

webgoat.customjs.feedback = function() {
    const data = {};
    $('#csrf-feedback').find('input, textarea, select').each(function(i, field) {
        data[field.name] = field.value;
    });
    return JSON.stringify(data);
}