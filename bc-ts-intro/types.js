// Type set explicitly
var myString;
myString = 'This is a string';
// Type set my inference
var anotherString = 'This is another string';
anotherString = 4; // type error
// No type set
var yetAnotherString; // same as let yetAnotherString: any;
yetAnotherString = 'String here';
yetAnotherString = 7; // no error thrown
// Available types:
// : string
// : number
// : boolean
// : Array<string>
// : any
