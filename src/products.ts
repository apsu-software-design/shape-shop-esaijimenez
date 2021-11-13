export class Product {
    private name: string;
    private price: number;
    private description: string;


    public constructor(name: string, price: number, description: string) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    public getName(): string { return this.name; }
    public getPrice(): number { return this.price; }
    public getDescription(): string { return this.description; }
}

export class ProductModel{
    
    public shopping_cart: Product[];
    public quantity_cart: Number[];

    public constructor(){
        this.shopping_cart=[];
        this.quantity_cart=[];
    }
    
    public addProductToCart(productResponse: string, amountResponse: string){
    
        while(true){
            if(productResponse == "1"){
                const item = new Product("Triangle", 3.5, "It's got three sides!");
                this.shopping_cart.push(item);
                break;
            }
            else if(productResponse == "2"){
                const item = new Product("Square", 4.5, "It's got four sides!");
                this.shopping_cart.push(item);
                break;
            }
            else if(productResponse == "3"){
                const item = new Product("Pentagon", 5.5, "It's got five sides!");
                this.shopping_cart.push(item);
                break;
            }
            else{
                console.log("Invalid Option!");
            }
            console.log('');
        }

        this.quantity_cart.push(parseInt(amountResponse));
    }

    removeProductFromCart(removeResponse:string){
        
        for (let i = 0; i < this.shopping_cart.length; i++) {
            if(removeResponse == this.shopping_cart[i].getName()){
                this.shopping_cart.splice(i, 1);
                this.quantity_cart.splice(i, 1);
            }
        }
    }
}

export class ProductView extends ProductModel {
    
    viewItemsToRemove(){
        for (let i = 0; i < this.shopping_cart.length; i++) {
            console.log(i+": " + this.shopping_cart[i].getName());
        }
    }

    viewItemsInCart(){
        for (let i = 0; i < this.shopping_cart.length; i++) {
            console.log("");
            console.log("       Name: "+ this.shopping_cart[i].getName());
            console.log("      Price: "+ this.shopping_cart[i].getPrice());
            console.log("Description: "+ this.shopping_cart[i].getDescription());
            console.log("   Quantity: "+ this.quantity_cart[i]);
        }
    }

    viewCartTotalPrice(){
        let total: number = 0;
        for (let i = 0; i < this.shopping_cart.length; i++) {
            total += this.shopping_cart[i].getPrice();
            //* this.quantity_cart[i];
        }
            console.log("Shopping Cart Total: "+ total);
    }
}