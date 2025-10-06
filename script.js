// Simulate fetching current moisture data from sensor/API
function getSoilMoistureData() {
  // Replace this function with an API fetch for real sensor data if available
  // Example: return fetch('/api/soilmoisture').then(res => res.json());
  const moisture = Math.floor(Math.random() * 81) + 10; // Random value 10–90
  return Promise.resolve({ moisture });
}

// Determine soil status based on moisture percentage
function getMoistureStatus(moisture) {
  if (moisture < 30) return 'Dry';
  if (moisture < 60) return 'Optimal';
  return 'Wet';
}

// Update dashboard
async function updateDashboard() {
  const { moisture } = await getSoilMoistureData();
  document.getElementById('moistureValue').textContent = moisture + ' %';
  document.getElementById('moistureStatus').textContent = getMoistureStatus(moisture);
}

// Add refresh button functionality
document.getElementById('refreshBtn').addEventListener('click', updateDashboard);

// Auto-update on page load
updateDashboard();