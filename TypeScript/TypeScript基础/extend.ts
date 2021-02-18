class Animal {
    private name: string; //private声明的变量不能被外部访问
    constructor(theName: string){
        this.name = theName;
    }
    move(distanceInMeters: number = 0){
        console.log(`${this.name} moved ${distanceInMeters}m`)
    }
}

class Dog extends Animal{
    constructor(name: string){
        super(name);
    }
    move(){
        console.log("Wom!")
        super.move(20)
    }
}

let dog = new Dog('Tom');
dog.move();