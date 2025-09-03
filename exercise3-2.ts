/* Create an enum PizzaSize with values: Small, Medium, Large.
 Write a function orderPizza that prints:
 "You ordered a [size] pizza."*/
 
 enum PizzaSize {
    Small = 'small', 
    Medium = 'medium', 
    Large = 'large',
 };
 const orderPizza = (size: PizzaSize) => {
    console.log(`You ordered a ${size} pizza.`);
 };
orderPizza(PizzaSize.Large);
orderPizza(PizzaSize.Medium);
orderPizza(PizzaSize.Small);