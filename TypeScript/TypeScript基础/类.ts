class Greeter {
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }
    greet(){
        console.log("Hello " + this.greeting)
    }
}

let greeter2 = new Greeter("World");