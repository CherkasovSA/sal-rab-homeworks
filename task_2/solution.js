function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку

	
if (productsSum == 0 || productsSum >= freeShippingMinSum) {
  shippingSum = 0;
} else ((productsSum > 0) & (productsSum < freeShippingMinSum)) {
shippingSum = shippingPrice;
}

    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

    let discountSum = sum
	if (productsSum == discountMinSum {
		} else discountSum = productsSum / 100 * discountPart){
		discountSum = 0;	

    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине


    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
let totalSum;
totalSum = productsSum;
totalSum = totalSum - discountSum;
totalSum = totalSum + shippingSum;
let freeShipping;
(shippingSum == 0) ? freeShipping = true : freeShipping = false;
	
    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
