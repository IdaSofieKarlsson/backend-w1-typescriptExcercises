//enbart mina anteckningar

//union type 
// betyder att en variabel vara av flera olika typer
type PasswordFieldType = number | string;
const password = (code: PasswordFieldType) => {
    console.log(`Password: ${code}`);
};
password("123");

//man kan ange på type vilka olika värden variablen får lov att ha
type Direction = 'left' | 'right';
const move = (dir: Direction) => {
    console.log(`Moving: ${dir}`);
};
move('right');


//interfaces and type aliases
interface Person {
    firstName: string; 
    age: number;
};
interface Customer {
    customerNumber: number;
    email: string;
};
//skapar en egen type med egna variabel typer
// & heter intersect, de kombinerar de olika typerna Person och Customer
type Client =  Person & Customer;
const clientData = (client: Client) => {
    console.log(`Name: ${client.firstName} Email: ${client.email}`);
}; 
clientData({firstName: 'Ida', age: 48, customerNumber: 11, email: 'afg'});

//enums
//a way to define a list of named options. Basically like drop down menys and 
//they only allow fixed choices 
//use enums when the list of values are fixed. Otherwise yu have no use of them 

// tre typer av fel: unauthorized, missing credentials and internal error 
enum LoginError {
    Unauthorized = 'unauthorized', 
    MissingCredentials = 'missingcredentials',
    InternalError = 'internalError',
};

const printErrorMessager = (error: LoginError) => {
    if (error === LoginError.Unauthorized) {
        console.log('You are not authorized.');
    } else if (error === LoginError.MissingCredentials) {
        console.log('Your are missing some credentials.');
    } 
};
printErrorMessager(LoginError.MissingCredentials);
//ett mer kompakt sätt att skriva 
const printErrorMessager1 = (error: LoginError) => {
console.log('Error: ' + error);
};
printErrorMessager1(LoginError.MissingCredentials);

enum TrafficLight {
    Red, 
    Yellow, 
    Green,
};
const lightAction = (light: TrafficLight) => {
    if (light === TrafficLight.Red) {
        console.log('Stop!');
    } else if (light === TrafficLight.Yellow) {
        console.log('Wait');
    } else if (light === TrafficLight.Green) {
        console.log('Drive!');
    }
};
lightAction(TrafficLight.Green);

enum Day {
    Monday, 
    Tuesday, 
    Wednesday, 
    Thursday, 
    Friday, 
    Saterday, 
    Sunday,
}; 
const planDay = (day: Day) => {
    if (day === Day.Saterday || day === Day.Sunday) {
        console.log('It is weekend!!!');
    } else {
        console.log('It is a workday...');
    }
};
planDay(Day.Saterday);

//Generics makes functions re-usable for many different types       <T>
//instead of writing different for strings, numbers etc, we use a placeholder

const convertToArray = <T>(input1: T, input2: T): T[] => {         //the T is a placeholder för a type tp be decided later
    return [input1, input2];
};
//console.log(convertToArray('2'));                  //any type works here because the type is decided later
console.log(convertToArray(45, 12));

const getIndex = <T>(array: T[], value: T): number => {
    return array.findIndex((item) => item === value);
};
console.log(getIndex([10, 23, 34, 59], 34));