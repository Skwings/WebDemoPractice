function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";
let x: [string, number];
x = ['hello', 13];

enum Color {Red = 1, Green, Blue}
let c: Color = Color.Blue;
let b:string = Color[2];
let d: any;
d = "hahah";
console.log(c); //Blue
console.log(b);

document.body.innerHTML = greeter(user);