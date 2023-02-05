var phone = {
    brand: "samsung",
    model: 223,
    price: 12000,
    processor: "AMD"

};
console.log(phone.brand);

phone.price = 8000;
console.log(phone.price);

phone["price"] = 9000;
console.log(phone.price);