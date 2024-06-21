   function isJSONObject(obj) {
     return obj !== null && typeof obj === 'object' && obj.constructor === Object;
   }

   const user = { username: "John", email: "john@example.com", age: 30 };
   const car = { make: "Toyota", model: "Camry", year: 2022 };

   const isJSONUser = isJSONObject(user);
   const isJSONCar = isJSONObject(car);

   console.log(isJSONUser); // true
   console.log(isJSONCar); // true
   