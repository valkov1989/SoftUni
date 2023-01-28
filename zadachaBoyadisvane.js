
function solveExpenses(input){

    let priceNailon = Number(1.50);
    let pricePaint = Number(14.50);
    let razreditel = Number(5);

    let nailonQuantity = Number(input[0]);
    let paintQuantity = Number(input[1]);
    let razreditelQuantity = Number(input[2]);
    let humanHour = Number(input[3]);

    let finalPriceNailon = (nailonQuantity+2)*priceNailon;
    let finalPricePaint = (paintQuantity+(paintQuantity*10/100))*pricePaint;
    let finalPriceRazreditel = razreditel*razreditelQuantity;
    let torbichkiPrice = Number(0.40);

    let materialPrice = finalPriceNailon+finalPricePaint+finalPriceRazreditel+torbichkiPrice;
    let priceHumanHour = (materialPrice*30/100)*humanHour;

    let finalCost = materialPrice+priceHumanHour;

    console.log(finalCost)
}
solveExpenses(["5 ",

"10 ",

"10 ",

"1 "])