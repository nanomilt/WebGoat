let globally; // Declared locally to avoid the 'no-undef' violation

webgoat.customjs.feedback = function() {
    const data = {};
    $('#csrf-feedback').find('input, textarea, select').each(function(i, field) {
        data[field.name] = field.value;
    });
    return JSON.stringify(data);
}