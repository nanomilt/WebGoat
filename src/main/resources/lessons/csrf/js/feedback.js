var globally = undefined; // Declaring a global variable to avoid the 'no-undef' violation

webgoat.customjs.feedback = function() {
    var data = {};
    $('#csrf-feedback').find('input, textarea, select').each(function(i, field) {
        if (field.name) {
            data[field.name] = field.value;
        }
    });
    return JSON.stringify(data);
}