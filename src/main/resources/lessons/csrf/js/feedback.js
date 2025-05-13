var globally; // Declaring a global variable to avoid the 'no-undef' violation

webgoat = webgoat || {};
webgoat.customjs = webgoat.customjs || {};

webgoat.customjs.feedback = function() {
    var data = {};
    $('#csrf-feedback').find('input, textarea, select').each(function(i, field) {
        data[field.name] = field.value;
    });
    return JSON.stringify(data);
}