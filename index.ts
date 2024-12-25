interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  class voiture implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  
  const mavoiture = new voiture("mercedes", "s", 2023);
  console.log(`Make: ${myCar.make}, Model: ${myCar.model}, Year: ${myCar.year}`);
  myCar.start();