// Use native fetch instead of requiring node-fetch
fetch('http://127.0.0.1:4000/api/vehicles')
  .then(res => res.json())
  .then(data => {
    console.log(`Found ${data.length} vehicles.`);
    data.forEach(v => {
      console.log(`- ${v.make} ${v.model} has ${v.images ? v.images.length : 0} images. ID: ${v.id}`);
    });
  })
  .catch(err => console.error(err));
