class Person {
   constructor(name, color) {
      this.name = name;
      this.favColor = color;
   }
   
   greet() {
      console.log("Hi there, my name is " + this.name + "and my favorite color is " + this.favColor + ".");
   }
}

export default Person;