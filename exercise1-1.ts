// Create a type called IDType that can be either a number OR a string.
 //Write a function showID that prints "Your ID is: ...".
 //Call the function with both a number and a string.

 type IDType = number | string;

 const showID = (idNumber: IDType) => {
    console.log(`Your ID is: ${idNumber}`);
 };

 showID(1245);
 showID('my-ID-number');