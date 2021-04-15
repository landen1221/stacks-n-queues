const stringReversal = (str) => {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
};

stringReversal("hi everybody!");

const balancedBrackets = (testStr) => {
  let allBrackets = [];

  for (let i = 0; i < testStr.length; i++) {
    let currChar = testStr[i];
    if (currChar === "{") {
      allBrackets.push("{");
    } else if (currChar === "}") {
      let temp = allBrackets.pop();
      if (temp !== "{") {
        return "imbalanced";
      }
    } else if (currChar === "[") {
      allBrackets.push("[");
    } else if (currChar === "]") {
      let temp = allBrackets.pop();
      if (temp !== "[") {
        return "imbalanced";
      }
    } else if (currChar === "(") {
      allBrackets.push("(");
    } else if (currChar === ")") {
      let temp = allBrackets.pop();
      if (temp !== "(") {
        return "imbalanced";
      }
    }
  }

  if (allBrackets.length > 0) {
    return "imbalanced";
  }

  return "Balanced";
};

// imbalanced
// console.log(balancedBrackets("(hello"));
// console.log(balancedBrackets("(nope]"));
// console.log(balancedBrackets("((ok) [nope)]"));

// balanced
// console.log(balancedBrackets("hello"));
// console.log(balancedBrackets("(hi) [there]"));
// console.log(balancedBrackets("(hi [there])"));
// console.log(balancedBrackets("(((hi)))"));

class Node {
  constructor(val = null) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(vals = [], skip = 3) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.skip = skip;
    this.removed = [];

    for (let val of vals) this.pushVal(val);
  }

  pushVal(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }

    this.length += 1;
  }

  findSurvivor() {
    let survivor = this.tail;
    let j = 0;
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.skip; j++) {
        survivor = survivor.next;
        if (this.removed.includes(survivor.val)) {
          j--;
        }
      }

      this.removed.push(survivor.val);
    }
    return survivor.val;
  }
}

const josephusSurvivor = (people, skip) => {
  let challengers = [];
  for (let i = 1; i <= people; i++) {
    challengers.push(i);
  }

  let remainingChallengers = new LinkedList(challengers, skip);

  console.log(`Survivor:`, remainingChallengers.findSurvivor());
};

josephusSurvivor(6, 3);


const calculator = (str) => {
    let values = str.split(' ')
    
    let equation = ["("]
        
    equation.push(values[values.length-2])
    equation.push(values[values.length-3])
    equation.push(values[values.length-1])
    equation.push(")")
      
    if (values.length === 3) {
        return eval(equation.join(''))
    }

    equation.unshift(values[0])    
    equation.unshift(values[1])    

    return eval(equation.join(""))
    
}



console.log(calculator("+ 1 2"))
console.log(calculator("* 2 + 1 2"))
console.log(calculator("+ 9 * 2 3"))
console.log(calculator("- 1 2"))  
console.log(calculator("- 9 * 2 3"))
console.log(calculator("/ 6 - 4 2")) 