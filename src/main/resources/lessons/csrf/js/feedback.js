let globally; // Declaring a variable to avoid the 'no-undef' violation

webgoat.customjs.feedback = function() {
  let data = {};
  $('#csrf-feedback').find('input, textarea, select').each(function(i, field) {
    data[field.name] = field.value;
  });
  return JSON.stringify(data);
};