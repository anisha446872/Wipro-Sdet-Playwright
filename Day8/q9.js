function greet(name,callback){
    setTimeout(() => {
        const message = `Hello, ${name}! Welcome.,`
        callback(message);

    },2000);

}
greet("Anisha",(msg) => {
    console.log(msg);
});


function countdown(start){
    const timer = setInterval(() => {
        console.log(start);
        if(start === 0){
        console.log("Time's up!");
        clearInterval(timer);

    }
    start--;
},1000);
}
countdown(5);


function calculate(a,b,operation){
    return operation(a,b);
}
const add =(x,y) => x+y;
const subtract =(x,y) => x-y;
const multiply=(x,y) => x*y;
const divide = (x,y) => (y !== 0 ? x/y : "Cannot divide by zero");
console.log(calculate(10,5,add));
console.log(calculate(10,5,subtract));
console.log(calculate(10,5,multiply));
console.log(calculate(10,5,divide));


function placeOrder(food,callback){
    console.log(`Order placed for ${food}`);
    setTimeout(() => {
        callback(food);
    },2000);
}
function prepareFood(food,callback){
    console.log(`Preparing ${food}...`);
    setTimeout(() => {
        callback(food);
    },3000);
}
function serveFood(food){
    console.log(`${food} is served.Enjoy your meal!`);
}
placeOrder("Pizza",(food) => {
    prepareFood(food,(preparedFood) => {
        serveFood(preparedFood);
    });
});


function step1(next){
console.log("Step 1 completed");
next();
}
function step2(next){
    console.log("Step 2 completed");
    next();
}
function step3(next){
    console.log("Step 3 completed");
    next();
}
function step4(){
    console.log("Step 4 completed - Process finished");
}
step1(() => {
    step2(() => {
        step3(() =>{
            step4();
        });
    });
});