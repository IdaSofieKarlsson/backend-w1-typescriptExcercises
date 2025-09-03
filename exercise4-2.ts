/* Write a generic function firstItem<T> that takes an array and returns the first item.
 Test with [1, 2, 3] and ["a", "b", "c"].*/
 

 const firstItem = <T>(arr: T[]) => {
    return arr[0];
 };
 console.log(firstItem([1, 2, 3]));
 console.log(firstItem(['a', 'b', 'c']));
