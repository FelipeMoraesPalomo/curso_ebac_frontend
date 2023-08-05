
class Person{
    #age
    #name
    #lastName


    constructor(name, lastName, age){
        this.#name = name
        this.#age = age
        this.#lastName = lastName
    }


    get name(){
        return this.#name
    }

    get fullName(){
        return(`${this.#name} ${this.#lastName}`)
    }

    get age(){
        return this.#age
    }

    set age(a){
        if(typeof a == 'number'){
            this.#age = a
        }
    }

}

class Student extends Person{
    #id

    constructor(name, lastName, age, id){
        super(name, lastName, age)
        this.#id = id;
    }

    get id(){
        return this.#id
    }

}

class Employee extends Person{
    #role

    constructor(name, lastName, age, role){
        super(name, lastName, age)
        this.#role = role
    }

    get role(){
        return this.#role;
    }
}

let p1 = new Person('Felipe', 'Moraes', '25');
let p2 = new Student('Marcos', 'Silva', '19', '7722')
let p3 = new Employee('Leonardo', 'Carvalho', '20', 'Professor')

console.log(`Nome: ${p1.fullName}, Idade: ${p1.age} `)
console.log(`Nome: ${p2.fullName}, Idade: ${p2.age}, ID: ${p2.id} `)
console.log(`Nome: ${p3.fullName}, Idade: ${p3.age}, Função: ${p3.role} `)