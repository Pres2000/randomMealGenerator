const menu = { 
  _courses: 
    {
      appetizers: [],
      mains: [],
      desserts: []
    }, 

    get appetizers() {
     return this.appetizers;
    },

    set appetizers(appetizerIn) {
      this.appetizers = appetizerIn;
    },

    get mains() {
      return this.mains;
    }, 

    set mains(mainsIn) {
      this.mains = mainsIn;
    }, 

    get desserts() {
      return this.desserts;
    }, 

    set desserts(dessertsIn) {
      this.desserts = dessertsIn;
    }, 

    get courses() {
      return {
        appetizers: this.appetizers, 
        mains: this.mains, 
        desserts: this.desserts
      }
    },

    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName, 
        price: dishPrice, 
      }
      return this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },

    generateRandomMeal() {
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
      let totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, ... The price is $${totalPrice}.`;
    }
};

menu.addDishToCourse('appetizers', 'soup', 3.00);
menu.addDishToCourse('appetizers', 'bread', 2.00);
menu.addDishToCourse('appetizers', 'salad', 4.00);

menu.addDishToCourse('mains', 'steak', 10.00);
menu.addDishToCourse('mains', 'stew', 10.00);
menu.addDishToCourse('mains', 'stirfry', 10.00);

menu.addDishToCourse('desserts', 'cake', 5.00);
menu.addDishToCourse('desserts', 'icecream', 3.00);
menu.addDishToCourse('desserts', 'pie', 3.00);

let meal = menu.generateRandomMeal();
console.log(meal);
