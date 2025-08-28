// id, name va price xususiyatlariga ega Product deb nomlangan class yozing. Har safar yangi product 
// kiritilganda qiymati bittaga oshib boruvchi static productCount xususiyatini qoâ€™shing. 
// Mahsulotlarning umumiy narxini hisoblab beruvchi totalPrice metodini yarating. 
// Product classidan CareProduct deb 
// nomlangan voris class yarating va unga kafolat muddati uchun warrantyPeriod xususiyatini qo'shing. 
// Voris class uchun kafolat muddatini hisobga oluvchi totalPrice metodini qayta yozing. 
// Bunda agar kafolat muddatiga 5 kun qolgan bo'lsa 10%, 4 kun qolgan bo'lsa 20%, 3 kun qolgan bo'lsa 30%, 
// 2 kun qolgan bo'lsa 40% va 1 kun qolgan bo'lsa 50% narxda hisoblashni amalga oshiring.
class Product {
    static productCount = 0
    constructor(id, name, price) {
        this.id = id
        this.name = name
        this.price = price
        Product.productCount++
    }
    static totalPrice(products) {
        return products.reduce((sum, product)=>sum+product.price,0)
    }
}
class newProduct extends Product {
    constructor(id,name,price,warrantyPeriod) {
        super(id,name,price)
        this.warrantyPeriod=warrantyPeriod
    }
    static totalPrice(products) {
        return products.reduce((sum, product)=>{
            let discount=0
            if (product instanceof newProduct){
                if(product.warrantyPeriod===5)discount=0.1;
                if(product.warrantyPeriod===4)discount=0.2;
                if(product.warrantyPeriod===3)discount=0.3;
                if(product.warrantyPeriod===2)discount=0.4;
                if(product.warrantyPeriod===1)discount=0.5;
            }
            let finalPrice=product.price*(1-discount);
            return sum+finalPrice;
        }, 0);
    }
}
let prod1=new Product(1,"dinay",12000)
let prod2=new newProduct(2,"kofe",4000,3); 
console.log("kafolat muddati hisoblanmasa umumiy narx: ", Product.totalPrice([prod1,prod2]))
console.log("kafolat muddati hisbga olinganda umumiy narx: ", newProduct.totalPrice([prod1, prod2]))