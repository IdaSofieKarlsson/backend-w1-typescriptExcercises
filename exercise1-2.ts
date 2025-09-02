// Make a type Fruit that can be "apple" OR "banana" OR "orange".
 //Write a function eatFruit that prints "You ate an ...".
 //Test with "apple" and "orange".

type Fruit = 'apple' | 'banana' | 'orange';

const eatFruit = (fruit: Fruit) => {
    console.log(`You ate an ${fruit}.`);
};

eatFruit('apple');
eatFruit('orange');
