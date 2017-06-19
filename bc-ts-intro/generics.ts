let numberArray: Array<number>;
numberArray = [1, 2, 3, 4, 5];

// numberArray = [true, false, false, true]; // type error

let anyArray: Array<any>;
anyArray = [1, 2, 3, 4, 5];
anyArray = [true, false, false, true]; // no error
anyArray = ["short array"]; // no error

// generic identity function example
function identity001(arg: any): any {
  console.log(typeof arg);
  return arg;
}

// generic identity function example
function identity002<T>(arg: T): T {
  console.log(typeof arg);
  return arg;
}

identity001("foo");
identity002("bar");
