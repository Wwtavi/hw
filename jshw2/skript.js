let banana = {
    name:"banana",
    amount: 3,
    bougth: false,
    cost: 10,
    sum: 30,
}
let kivi = {
    name:"kivi",
    amount: 2,
    bougth: false,
    cost: 15,
    sum: 30,
}
let butter = {
    name:"butter",
    amount: 2,
    bougth: true,
    cost: 40,
    sum: 80,
}
let bread = {
    name:"bread",
    amount: 1,
    bougth: true,
    cost: 20,
    sum: 20,
}
let water = {
    name:"water",
    amount: 4,
    bougth: false,
    cost: 10,
    sum: 40,
}
let milk = {
    name:"milk",
    amount: 2,
    bougth: false,
    cost: 35,
    sum: 70,
}
let apple = {
    name:"apple",
    amount: 10,
    bougth: true,
    cost: 6,
    sum: 60,
}
let orange = {
    name:"orange",
    amount: 3,
    bougth: false,
    cost: 10,
    sum: 30,
}
let shoppingList = [banana, kivi, butter, bread, water, milk, apple]
function purchaseItem(product) {
    let item = shoppingList.find(item => item.name === product);
    if (item) {
        item.bougth = true;
        console.log(`${product} is buyed`);
    } 
}
purchaseItem("banana");
function removeProduct(product) {
    let newList = shoppingList.filter(item => item.name !== product);
    if (newList.length < shoppingList.length) {
        shoppingList = newList;
        console.log(`${product} is removed`);
    }
}
removeProduct("kivi")


function addProduct(product, amount, cost) {
    const existingItem = shoppingList.find(item => item.name === product);
    if (existingItem) {
        existingItem.amount += amount;
        existingItem.sum += amount * cost;
        console.log(`${amount} units of ${product} added`);
    } else {
        let newProduct = { name: product, amount, bougth: false, cost: costOnUnit, total: amount * costOnUnit };
        shoppingList.push(newProduct);
        console.log(`${product} added`);
    }
}
addProduct("banana", 2, 10)
let sortedShoppingList = shoppingList.sort((a,b) => a.bougth - b.bougth);
console.log(shoppingList);