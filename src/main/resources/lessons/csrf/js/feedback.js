// FIXED_CODE

const webgoat = {};

webgoat.customjs = {};

webgoat.customjs.feedback = function() {
  const data = {};
  $('#csrf-feedback').find('input, textarea, select').each((_, field) => {
    data[field.name] = field.value;
  });
  return JSON.stringify(data);
};