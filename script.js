const form = document.getElementById('addressForm');
const resultBox = document.getElementById('resultBox');
const output = document.getElementById('output');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent page reload

  // Get form values
  const city = document.getElementById('city').value.trim();
  const zip = document.getElementById('zip').value.trim();

  // Create formatted address
  const address = `${city}, ${zip}`;

  // Display the result
  output.textContent = address;
  resultBox.style.display = 'block';

  // Optionally clear the form
  form.reset();
});
