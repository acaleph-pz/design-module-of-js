// 理解：
// 观察者模式字面意思，就是需要一个人观察某些东西改变了去通知该做某事
// 生活实例：快递员（观察者/发布者）监听货物到了开始派送，到达地点开始通知用户（订阅者）来取

/* 
  结合我们上面的分析，现在大家知道，在观察者模式里，至少应该有两个关键角色是一定要出现的——发布者
  和订阅者。用面向对象的方式表达的话，那就是要有两个类。

  观察者需要监视某些东西得变化进而通知自己维护得订阅者，所以在发布者内部需要维护一个订阅者得集合
*/
/* 
  代码实现
*/

// 抽象发布者
abstract class Publisher {
  public observers: Observer[] = [];

  public add(name: Observer) {
    this.observers.push(name);
  }
  public remove(observer: Observer) {
    this.observers.forEach((item, i) => {
      if (item === observer) {
        this.observers.splice(i, 1);
      }
    });
  }
  public notify() {
    this.observers.forEach((item) => {
      item.update(this);
    });
  }
}
// 抽象订阅者类
abstract class Observer {
  public abstract update(ctx: Publisher): void;
}

class OnePublisher extends Publisher {
  constructor(public api = { content: "" }) {
    super();
    this.observers = [];
  }
  setApi(content: string) {
    this.api.content = content;
    this.notify();
  }
  getApi() {
    return this.api;
  }
}
class Emp extends Observer {
  public update(ctx: OnePublisher): void {
    console.log(`查看文档${ctx.api.content}`);
    console.log("订阅者工作");
  }
}
// 创建订阅者
let emp = new Emp();
// 创建发布者
let one = new OnePublisher();
// 添加发布者
one.add(emp);
// 添加给发布者添加文档
one.setApi("文档到手，通知开会");
// one.notify();
