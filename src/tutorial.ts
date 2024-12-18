// const processUnit = function (unit: string | number) {
//       unit = unit * 2;
//       console.log(`Number * 2 = ${unit}`);
//    } else console.log(`Sring: ${unit}`);
// };
// processUnit('SUPP');
//    if (typeof unit === 'number') {

// alternative
// function createStudent(student: { id: number; name: string }): void {
//    console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
// }

// createStudent({ id: 1, name: 'john' });

const processData = function (
   input: string | number,
   config: { reverse: boolean }
): string | number | undefined {
   if (typeof input === 'number') return input * 2;
   if (typeof input === 'string' && config.reverse !== true)
      return input.toUpperCase();
   if (config.reverse === true && typeof input === 'string')
      return input.split('').reverse().join('');
};

console.log(processData('shohan', { reverse: false }));
console.log(processData('Rakib', { reverse: true }));
