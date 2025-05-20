// Declaring variables to avoid the 'no-undef' violation
let globally;
let data;

webgoat.customjs.feedback = function() {
    data = {};
    $('#csrf-feedback').find('input, textarea, select').each(function(_, field) { // Replaced unused variable 'i' with '_'
        data[field.name] = field.value;
    });
    return JSON.stringify(data);
}