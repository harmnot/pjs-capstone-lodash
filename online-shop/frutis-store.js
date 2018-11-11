// lest create variable what we want to sell for fruits online store
const fruits = {
  organic: [{
      name: "Apple",
      quantity: 33, // KG
      price: 3.99
    },
    {
      name: "Grape",
      quantity: 40, // KG
      price: 5.89
    },
    {
      name: "Orange",
      quantity: 80, // KG
      price: 2.00
    }
  ],
  non_organic: [{
      name: "Pineaple",
      quantity: 34, // KG
      price: 10.76
    },
    {
      name: "Melon",
      quantity: 56, // KG
      price: 6.00
    },
    {
      name: "Watermelon",
      quantity: 90, // KG
      price: 4.09
    }
  ]
};

// console.log(fruits)
// let make function to get data of those variable :
// you can using declaration function or arrow function,
// here i am using arrow function to make the code clearner and easier to read


// get the fruit  of "organic" fruits
const getFruitUserOrganic = (listTypeFruit, fruitList) => {
  let fruitNames = fruitList[listTypeFruit].map(e => e.name)
  return fruitNames;
};

console.log(getFruitUserOrganic("organic", fruits));

// get the fruit of "non-organic" fruits
const getFruitUserNonOrganic = (listTypeFruit, fruitList) => {
  let fruitNames = fruitList[listTypeFruit].map(e => e.name)
  return fruitNames;
};

console.log(getFruitUserNonOrganic("non_organic", fruits));

// get the "price" of organic fruits
const priceOrganic = (listPriceUser, prices) => {
  let userPrice = prices[listPriceUser].map(element => element.price)
  return userPrice
};

console.log(priceOrganic("organic", fruits))

// get the "price" of non-organic fruits
const priceNonOrganic = (listPriceUser, prices) => {
  let userPrice = prices[listPriceUser].map(e => e.price)
  return userPrice
};

console.log(priceNonOrganic("non_organic", fruits));

// get the "stock" of organic fruits
const getQuantityOrganic = (getQuantity, stock) => {
  let userStock = stock[getQuantity].map(e => e.quantity)
  return userStock
};

console.log(getQuantityOrganic("organic", fruits))

// get the "stock" of non-organic fruits
const getQuantityNonOrganic = (getQuantity, stock) => {
  let userStock = stock[getQuantity].map(e => e.quantity)
  return userStock
};

console.log(getQuantityNonOrganic("non_organic", fruits));
console.log(getQuantityNonOrganic)
// now lest we make condtions if people want to choose the "fruits", "price",
// and the "quantity":

let user = ""
let stocks, kindOffruits, priceTag;

if(kindOffruits == "organic" || kindOffruits == "non_organic" ){

}
