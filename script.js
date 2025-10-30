const form = document.getElementById('addressForm');
const resultBox = document.getElementById('resultBox');
const output = document.getElementById('output');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent page reload

  // Get form values
  const street = document.getElementById('street').value.trim();
  const city = document.getElementById('city').value.trim();
  const state = document.getElementById('state').value.trim();
  const zip = document.getElementById('zip').value.trim();

  // Create formatted address
  const address = `${street}, ${city}, ${state} ${zip}`;

  // Display the result
  output.textContent = address;
  resultBox.style.display = 'block';

  // Optionally clear the form
  form.reset();
});
