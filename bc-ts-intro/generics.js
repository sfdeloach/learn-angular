var numberArray;
numberArray = [1, 2, 3, 4, 5];
// numberArray = [true, false, false, true]; // type error
var anyArray;
anyArray = [1, 2, 3, 4, 5];
anyArray = [true, false, false, true]; // no error
anyArray = ["short array"]; // no error
// generic identity function example
function identity001(arg) {
    console.log(typeof arg);
    return arg;
}
// generic identity function example
function identity002(arg) {
    console.log(typeof arg);
    return arg;
}
identity001("foo");
identity002("bar");
