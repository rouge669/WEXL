let task01 = {
  heading : "",
  question: "",
  valueArray: [], 
  answer: 0, 
  operator: "+",
  columns: 0
};

let columns = 3;
let maxValue = 999;
let minValue = 1;


export function taskOne() {
  task01.heading = "Add three or more numbers up to three digits - word problems";
  task01.answer = 0;
  task01.columns = columns;
  task01.valueArray = [];
      for (let i = 0; i < columns; i++) {
        task01.valueArray[i] = Math.floor(Math.random() * (maxValue - minValue + 1) ) + minValue; 
        task01.answer += task01.valueArray[i];        
      }
        while(task01.answer > maxValue){
            task01.answer = 0;
        for (let i = 0; i < columns; i++) {
            task01.valueArray[i] = Math.floor(Math.random() * (maxValue - minValue + 1) ) + minValue; 
            task01.answer += task01.valueArray[i];        
        }
        }
  task01.question = "Pizzeria Italiana sold "+ task01.valueArray[0]+" pepperoni pizzas, "+task01.valueArray[1]+" veggie pizzas, and "+task01.valueArray[2]+" cheese pizzas. How many pizzas did they sell in all?";
  return task01;
}
