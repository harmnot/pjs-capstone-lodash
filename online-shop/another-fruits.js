// lets create variable what we want to sell for fruits online store
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


// // get the fruit  of "organic" fruits
// const getFruitUserOrganic = fruits["organic"].map(e => e.name)
//
// console.log(getFruitUserOrganic);
//
// // get the fruit of "non-organic" fruits
// const getFruitUserNonOrganic = fruits["non_organic"].map(e => e.name)
//
// console.log(getFruitUserNonOrganic);
//
// // get the "price" of organic fruits
// const priceOrganic = fruits["organic"].map(element => element.price)
//
// console.log(priceOrganic)
//
// // get the "price" of non-organic fruits
// const priceNonOrganic = fruits["non_organic"].map(e => e.price)
//
// console.log(priceNonOrganic);
//
// // get the "stock" of organic fruits
// let getQuantityOrganic = fruits["organic"].map(e => e.quantity)
//
// console.log(getQuantityOrganic[0] - 1)
//
// // get the "stock" of non-organic fruits
// const getQuantityNonOrganic = fruits["non_organic"].map(e => e.quantity)
//
// console.log(getQuantityNonOrganic)
// // now lest we make condtions if people want to choose the "fruits", "price",
// // and the "quantity":




// lets get the data of kind of fruit and type
const userBuy = (kindOfFruits, fruitList) => {
  if (!Object.keys(fruits).includes(kindOfFruits)) {
    return `sorry this ${kindOfFruits} is not avaiable`
  };
  return fruits[kindOfFruits].find(e => e.name === fruitList);
};

// console.log(userBuy("organic", "Apple"))


// lets we sell our product to user
const timeToSell = (user, quantity, kindOfFruits, fruitList) => {
  let item = userBuy(kindOfFruits, fruitList);
  let price = item.price;
  const total = Number.parseFloat(quantity * price).toFixed(2);
  if (item.quantity < quantity) {
    return `sorry ${user}, we run out for our stock ${kindOfFruits} of ${fruitList}'s'`;
  } else {
    item.quantity -= quantity
  };
  return `you should pay this ${fruitList} ${total}`;
};

console.log(timeToSell("Muhammad", 3, "organic", "Grape"));


// lets we create virtual buyer and that buyer has money about $300 and tell them their money left

const buyer = (name, quantity, fruitType, fruitChoose, money) => {
  let item = userBuy(fruitType, fruitChoose);
  let price = item.price;
  const total = Number.parseFloat(quantity * price).toFixed(2);
  let changeMoney;

  if (item.quantity < quantity) {
    return `sorry ${name}, we run out for our stock ${fruitType} of ${fruitChoose}'s
    maybe, you want another fruit ??`;
  } else {
    item.quantity -= quantity;
    money -= total;
    changeMoney = money;
  };
  return `you should pay this ${fruitChoose} $${total} and your money left : $${changeMoney},\nthank you for your order, want to buy more ?`;
}

const finalBuyer = buyer("Muhammad", "24", "organic", "Grape", 300, );

console.log(finalBuyer);
