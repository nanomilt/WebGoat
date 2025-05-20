// FIXED_CODE

const globally = {}; // Defining the global variable with a default value

webgoat.customjs.feedback = function() {
  const data = {};
  $('#csrf-feedback').find('input, textarea, select').each((_, field) => { // Replaced unused variable 'i' with '_'
    data[field.name] = field.value;
  });
  return JSON.stringify(data);
};