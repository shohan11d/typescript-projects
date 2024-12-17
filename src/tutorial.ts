let bike: { brand: string; year: number } = { brand: 'yamaya', year: 2010 };
let laptop: { brand: string; year: number } = { brand: 'Dell', year: 2020 };
// let laptop2:{brand:string, year:number} = {brand:'hp' }

let product1 = { title: 'shirt', price: 20 };
let product2 = { title: 'pants' };

let products: { title: string; price?: number }[] = [product1, product2];

products.push({ title: 'shoes' });
