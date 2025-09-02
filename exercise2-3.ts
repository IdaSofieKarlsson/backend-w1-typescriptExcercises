/*Make an interface Car with brand and year.
 Write a function printCar that prints "Brand: ... Year: ...".
 Call the function with your favorite car.*/
 
 interface Car {
    brand: string;
    year: number;
 };

 const printCar = (car: Car) => {
    console.log(`Brand: ${car.brand} Year: ${car.year}`);
 };

 printCar({brand: 'SAAB', year: 2009});