const explicit = {
  name: 'John Doe',
  age: 30,
  city: 'New York'
};

for (const field of Object.keys(explicit)) {
  console.log(field + ': ' + explicit[field]);
}
