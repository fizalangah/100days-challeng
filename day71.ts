/**************************
 * CLASS TYPE ANNOTATIONS *
 **************************/

class Product {
    // Property type annotations
    id: number;
    name: string;
    price: number;
  
    constructor(id: number, name: string, price: number) {
      // Constructor parameter type annotations
      this.id = id;
      this.name = name;
      this.price = price;
    }
  
    // Method type annotations
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
  }
  
  // Create an instance of the Product class
  const product1 = new Product(1, "Widget", 20.0);
  
  // Access class properties and call a method
  console.log(product1.getProductInfo()); // Output: ID: 1, Na
  /***************************
 * CLASS ACCESS MODIFIERS: *
 ***************************/

class MyClassPublic {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const instancePublic = new MyClassPublic("John");
console.log(instancePublic.name); // Accessing the public property


class MyClassPrivate {
    private secret: string;

    constructor(secret: string) {
        this.secret = secret;
    }

    revealSecret() {
        console.log(this.secret); // Accessing the private property from within the class
    }
}

const instancePrivate = new MyClassPrivate("My secret");
// console.log(instance.secret); // This would result in an error because secret is private
instancePrivate.revealSecret(); // This is a valid way to access the private property


class Parent {
    protected familyName: string;

    constructor(name: string) {
        this.familyName = name;
    }
}

class Child extends Parent {
    introduceFamily() {
        console.log(`Our family name is ${this.familyName}`);
    }
}

const parentEx = new Parent("Smith");
const childEx = new Child("Johnson");

// console.log(parent.familyName); // This would result in an error because familyName is protected
childEx.introduceFamily(); // This is a valid way to acces