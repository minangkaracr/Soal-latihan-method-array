const person = {
    firstName: "Danta",
    lastName: "Sudanta",
    age: 30
  };
  
  const { firstName, lastName } = person;
  
  console.log(firstName, lastName); // Output: Danta Sudanta

  const person2 = {
    name: "Rengga",
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  
  person2.greet(); // Output: Hello, my name is Rengga

  const greet = (name) => {
    console.log("Hello, " + name);
  };
  
  greet("Rengga"); // Output: Hello, Rengga

  const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2023,
    getDetails() {
      return `${this.brand} ${this.model} (${this.year})`;
    }
  };
  
  const { brand, model, year } = car;
  const carDetails = () => `${brand} ${model} (${year})`;
  
  console.log(car.getDetails()); // Output: Toyota Camry (2023)
  console.log(carDetails()); // Output: Toyota Camry (2023)

  

