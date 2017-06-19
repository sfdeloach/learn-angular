// Type set explicitly
let myString: string;
myString = 'This is a string';

// Type set my inference
let anotherString = 'This is another string';
anotherString = 4; // type error

// No type set
let yetAnotherString; // same as let yetAnotherString: any;
yetAnotherString = 'String here';
yetAnotherString = 7; // no error thrown

// Available types:
  // : string
  // : number
  // : boolean
  // : Array<string>
  // : any
