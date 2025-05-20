// FIXED_CODE

let globally; // Declaring a local variable to avoid the 'no-undef' violation

webgoat.customjs.feedback = function() {
    const data = {};
    $('#csrf-feedback').find('input, textarea, select').each(function(_, field) {
        data[field.name] = field.value;
    });
    return JSON.stringify(data);
}