/* 

  抽象类，将一类东西进行抽取，提取共性规定协议

  定义一个人的抽象类，人又分为男人女人，男人又分为少年中年老年，女人分为少年中年老年
*/

namespace Web {
  export abstract class Person {
    protected name: string;
    protected age: number;

    protected constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    protected abstract say(): void;
    protected abstract run(): void;
    protected abstract pay(): void;
    protected abstract makeMoney(): void;
  }
}

class Man extends Web.Person {
  constructor(name: string, age: number) {
    super(name, age);
  }
  public say(): void {
    throw new Error("Method not implemented.");
  }
  public run(): void {
    throw new Error("Method not implemented.");
  }
  public pay(): void {
    throw new Error("Method not implemented.");
  }
  public makeMoney(): void {
    throw new Error("Method not implemented.");
  }
}
class WoMan extends Web.Person {
  constructor(name: string, age: number) {
    super(name, age);
  }
  public say(): void {
    throw new Error("Method not implemented.");
  }
  public run(): void {
    throw new Error("Method not implemented.");
  }
  public pay(): void {
    throw new Error("Method not implemented.");
  }
  public makeMoney(): void {
    throw new Error("Method not implemented.");
  }
}

let man = new Man("张三", 14);
man.run();

let woman = new WoMan("小蔡", 15);
woman.pay();

/* 
  笔记本例子：
  有屏幕和操作系统（简单写）
*/
abstract class Computer {
  // 提供操作系统的接口
  abstract createSystem(): void;
  // 提供屏幕的接口
  abstract createScreen(): void;
}

// 具体工厂继承自抽象工厂
class MicCom extends Computer {
  createSystem() {
    // 提供window系统实例
    return new WindowSystem();
  }
  createScreen() {
    return new MIScreen();
  }
}
// 定义操作系统这类产品的抽象产品类
abstract class System {
  abstract controlHardWare(): void;
}
// 定义具体操作系统的具体产品类
class WindowSystem extends System {
  controlHardWare() {
    console.log("window系统");
  }
}

class MacosSystem extends System {
  controlHardWare() {
    console.log("ios系统");
  }
}
// 定义操作系统这类产品的抽象产品类
abstract class Scree {
  abstract controlHardWare(): void;
}

class MIScreen extends Scree {
  controlHardWare(): void {
    console.log("小米屏幕");
  }
}
