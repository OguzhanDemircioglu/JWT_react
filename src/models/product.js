export default class Product {
    constructor(name, price, description,createTime,id) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.createTime = createTime;
        this.id = id;
    }
}
export const products = [
    new Product('iPhone', 1000, 'Apple iPhone XR', '2018-10-26',1),];