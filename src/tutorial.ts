let awesomeName: string = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();

console.log(awesomeName);

let amount: number = 10;
amount = amount + 10;

console.log(amount);

let isAwesome: boolean = true;
isAwesome = false;

//1.
const stringVar: string = 'hello';
const lowered = stringVar.toLowerCase();
console.log(lowered);

//2

const numberVar: number = 10;
const calculated = numberVar + 10;
console.log(calculated);

//3

const booleanVar: boolean = true;
const logic = booleanVar ? 'Amd' : 'Intel';

console.log(logic);

let xyz: 10 | 12 | 'hello' | string = 'helloo';
console.log(xyz);
