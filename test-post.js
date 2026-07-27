const http = require('http');
const fs = require('fs');

const data = JSON.stringify({
  make: "Test",
  model: "Test",
  year: "2024",
  price: "1000",
  mileage: "",
  engineCC: "",
  fuelType: "Petrol",
  transmission: "Automatic",
  bodyType: "",
  color: "",
  driveType: "",
  description: "",
  category: "CAR",
  status: "AVAILABLE",
  images: [{ url: "https://example.com/test.jpg", isPrimary: true }]
});

const req = http.request(
  {
    hostname: '127.0.0.1',
    port: 4000,
    path: '/api/admin/vehicles',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    }
  },
  (res) => {
    let body = '';
    res.on('data', d => body += d);
    res.on('end', () => {
      fs.writeFileSync('error.txt', body, 'utf8');
      console.log('Saved to error.txt');
    });
  }
);

req.on('error', e => console.error('ERROR:', e));
req.write(data);
req.end();
