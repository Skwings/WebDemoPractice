
//protected声明的变量可以在派生类中被访问
class Preson{
    protected name: string;
    constructor(name: string){
        this.name = name;
    }
}

class Employee extends Preson{
    public department: string;
    constructor(name: string, department: string){
        super(name);
        this.department = department;
    }

    public getElevatorPitch(){
        return `Hello, my name is ${this.name} and I work in ${this.department}`
    }
}

let howard = new Employee("Howard", "sales");
howard.getElevatorPitch(); //可以访问
// howard.name; 错误，因为属性受Preson保护
