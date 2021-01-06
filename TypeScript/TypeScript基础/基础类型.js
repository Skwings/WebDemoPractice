function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
var x;
x = ['hello', 13];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
var b = Color[2];
console.log(c); //Blue
console.log(b);
document.body.innerHTML = greeter(user);
