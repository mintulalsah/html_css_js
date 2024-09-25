function Call(name) {
    this.name=name;
    
}

let data=new Call('mintu')
console.log(data.name);

function Car(make, model) {
    console.log(this);
    
    this.make = make;
    this.model = model;
}
let myCar = new Car("Toyota", "Corolla");
console.log(myCar.make); // Outputs: "Toyota"