//Objects can be defined with characteristics called "properties"
const car = {
    name: "Honda Civic",
    color: "blue",
    sellingPrice: 5000,
    insurance: false,
    model: "Honda",
    doorStatus: false,
    //Additionally, you can add "methods" (properties with a function) to control or dictate the action of objects.
    doorOpen: function (doorStatus) {
        this.doorOpen = doorStatus;
    },
    SaleStatus: false,
    forSale: function (saleStatus) {
        this.forSale = saleStatus;
    },

}
//Objects can be logged and interacted with in the console.
console.log("The car is:", car);
console.log("Is this car on sale:", car.SaleStatus);

// Another example of an object
const person = {
    name: "Annie",
    age: 23,
    hometown: "Tacoma, WA",
    StudentStatus: false,
    ActiveStudent: function (StudentStatus) {
        this.ActiveStudent = StudentStatus;
    }

}

// you can use a function to create an object
function Bus(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
};

const myBus = new Bus('Eagle', 'Talon TSi', 1993);
const kenscar = new Bus('Nissan', '300ZX', 1992);
const vpgscar = new Bus('Mazda', 'Miata', 1990);

console.log("Here are some buses:", Bus.toString);
//methods

const watch = {
    name: "Smithsonean",
    straplength: {
        left: 17,
        right: 17,
    },
    color: "gold",
    price: 4342,
    //Methods can be created to adjust properties of an object by calling a new method with a different name 
    //to the object as follows. 
    newstraplength: function (leftlength, rightlength) {
        this.straplength.left = leftlength;
        this.straplength.right = rightlength;
    }

}
console.log("The old strap length is:", watch.straplength);
//Once the method has been declared,it can be called and new values can be assigned to the object.
watch.newstraplength(55, 64);
console.log("The new strap length is:", watch.straplength);
