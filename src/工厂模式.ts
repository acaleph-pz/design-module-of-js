/* 
  创建小狗实例，将变与不变分离
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
/* 简单工厂模式，每一种狗子的种类不同，工作内容也不同，根据种类的不同进行区分 */
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
