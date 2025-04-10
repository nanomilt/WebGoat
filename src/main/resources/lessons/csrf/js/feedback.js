// Declaring variables that are used
let data: { [key: string]: string } = {};
let field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

webgoat.customjs.feedback = function() {
    $('#csrf-feedback').find('input, textarea, select').each(function(i, field) {
        data[field.name] = field.value;
    });
    return JSON.stringify(data);
}