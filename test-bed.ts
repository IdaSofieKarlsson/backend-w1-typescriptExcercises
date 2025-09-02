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
type Client =  Person & Customer;
const clientData = (client: Client) => {
    console.log(`Name: ${client.firstName} Email: ${client.email}`);
}; 
clientData({firstName: 'Ida', age: 48, customerNumber: 11, email: 'afg'});

//15:26 i videon
