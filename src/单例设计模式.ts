/* 
  理解单例设计模式：
  每次 new 一个类的时候都会返回同一个实例，故为单例
*/

/* es6 实现单例模式 */
class App {
  static app: App | undefined;
  protected constructor() {}
  public static instance() {
    if (!App.app) {
      App.app = new App();
    }
    return App.app;
  }
}

let app = App.instance();

let app1 = App.instance();
console.log(app === app1);

/* e闭包实现单例模式  */
function Person() {}

Person.getInstance = (function () {
  let instance: any = null;
  return function () {
    if (!instance) {
      // 如果为null则new出唯一实例
      instance = new Person(); // 其目标缺少构造签名的 "new" 表达式隐式具有 "any" 类型
    }
    return instance;
  };
})();

let p = Person.getInstance();

let p1 = Person.getInstance();
console.log(p === p1);
