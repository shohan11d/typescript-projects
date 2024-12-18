const array: string[] = ['shohan', 'rakib', 'emon', 'tanver'];

const validator = function (input: string[]): boolean {
   const result: string | undefined = input.find((item) => item === 'shohan');
   const output: boolean = result ? true : false;
   return output;
};

console.log(validator(array));
