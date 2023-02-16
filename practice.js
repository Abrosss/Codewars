class Person {
    constructor(age) {
        this.age=age;
    }
   
    talk() {
        return 'Talking'
    }
}

const me = new Person(54)
const you = new Person(45)
me.address = 'new'
console.log(me, you.age)
