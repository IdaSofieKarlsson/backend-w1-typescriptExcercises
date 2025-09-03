/*Create an enum Color with values: Red, Green, Blue.
 Write a function showColor that prints "You chose Red/Green/Blue".*/

 enum Color {
    Red = 'red', 
    Green = 'green', 
    Blue = 'blue',
 };
 const showColor = (color: Color) => {
    console.log(`You chose ${color}`);
 };
showColor(Color.Red);
showColor(Color.Green);
showColor(Color.Blue);