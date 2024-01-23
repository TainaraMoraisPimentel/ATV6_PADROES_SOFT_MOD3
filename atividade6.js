class Context {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    executeStrategy(num1, num2) {
      return this.strategy.execute(num1, num2);
    }
  }
  
  class AddStrategy {
    execute(num1, num2) {
      return num1 + num2;
    }
  }
  
  class SubtractStrategy {
    execute(num1, num2) {
      return num1 - num2;
    }
  }
  
  class MultiplyStrategy {
    execute(num1, num2) {
      return num1 * num2;
    }
  }
  
  const context = new Context(new AddStrategy());
  console.log(context.executeStrategy(10, 5)); // Output: 15
  
  context.strategy = new SubtractStrategy();
  console.log(context.executeStrategy(10, 5)); // Output: 5
  
  context.strategy = new MultiplyStrategy();
  console.log(context.executeStrategy(10, 5)); // Output: 50
  