/* Create two interfaces:
Teacher with name and subject
Employee with id and email
Make a type SchoolTeacher that is both Teacher AND Employee.
 Write a function printTeacherInfo to show their data.*/
 
 interface Teacher {
    name: string;
    subject: string;
 };
 interface Employee {
    id: number;
    email: string;
 };
 type SchoolTeacher = Teacher & Employee;

 const printTeacherInfo = (teacher: SchoolTeacher) => {
    console.log(`Name: ${teacher.name}, employee ID: ${teacher.id}, email: ${teacher.email} teaches: ${teacher.subject}`);
 };

 printTeacherInfo({name: 'Anders Andersson', subject: 'science', id: 124578, email: 'adf@fg.qq'});