var a, b;
function Calculator() {
    this.read = function read() {
            a = +prompt('a?', 3),
            b = +prompt('b?', 2);
    };
    this.sum = function sum() {
        return a + b;
    };
    this.mul = function mul() {
        return a * b;
    };
}
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());