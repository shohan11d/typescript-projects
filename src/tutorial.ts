interface Person {
  name: string;
}

interface Dogowner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delgateTasks(): void;
}

function getEmployee() {
  const randomValue = Math.random();
  if (randomValue < 0.33) {
    return { name: 'John', dogName: 'Buddy' };
  } else if (randomValue < 0.66) {
    return {
      name: 'John',
      managePeople: () => console.log('Managing people'),
    };
  } else {
    return {
      name: 'John',
      delgateTasks: () => console.log('Delegating tasks'),
    };
  }
}

const employee: Person | Dogowner | Manager = getEmployee();
console.log(employee);
