/* 
  创建类，通过类创建小狗实例
  
  如果在使用构造器模式的时候，我们本质上是去抽象了每个对象实例的变与不变。那
  么使用工厂模式时，我们要做的就是去抽象不同构造函数（类）之间的变与不变。
*/

class Dog {
  public name: string;
  public identity: string;
  public work: string[];

  constructor(name: string, identity: string, work: string[]) {
    this.name = name;
    this.identity = identity;
    this.work = work;
  }
}
/* 简单工厂模式，每一种狗子的种类不同，工作内容也不同，根据种类的不同进行区分，将变与不变分离 */
function Factory(name: string, identity: string) {
  let work: string[] = [];

  switch (identity) {
    case "二哈":
      work = ["犯二", "吃饭"];
      break;
    case "田园犬":
      work = ["吃饭", "卖萌", "看家"];
      break;
  }

  return new Dog(name, identity, work);
}
let dog = Factory("小胖狗", "二哈");
console.log(dog);
