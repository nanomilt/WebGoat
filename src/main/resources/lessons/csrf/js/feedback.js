// FIXED_CODE

const globally = {}; // Declaring a global variable to avoid the 'no-undef' violation

webgoat.customjs.feedback = function() {
  const data = {};
  $('#csrf-feedback').find('input, textarea, select').each((_, field) => {
    data[field.name] = field.value;
  });
  return JSON.stringify(data);
};