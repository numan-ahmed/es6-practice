
class Parent{
    constructor(){
        this.fatherName = 'Schwerznegger';
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name =  name;
    }
    getFulName(){

        return this.name + " " + this.fatherName;
        }
    }


const baby = new Child('arnold');
const baby2 = new Child('jamal');
console.log(baby.getFulName());
console.log(baby2.getFulName());