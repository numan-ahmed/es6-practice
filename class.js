class Student{
    constructor(sId,sName){
        this.id =  sId;
        this.name = sName;
        this.school ='kolimunnesa school';

    }
}

const student1 =  new Student(12,'numan');
const student2 =  new Student(23, 'kolim');
const student3 =  new Student(25, 'jamal');

console.log(student1,student2,student3);