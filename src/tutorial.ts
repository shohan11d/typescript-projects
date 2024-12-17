function calculateDiscount(price: number): number {
   const hasDiscount = true;
   if (hasDiscount) {
      return 9;
   }
   return price * 0.9;
}

const finalPrice = calculateDiscount(200);

console.log(finalPrice);
