/* 
  装饰器，顾名思义
  就是用来装饰某一物件让他具备新功能，进而不影响原来的功能
  类似于高阶组件的应用

  需求：要求按钮被点击的同时背景变Red，不可点击，只能在原来的功能上进行扩展

  思路：采用装饰器模式，进行功能扩展，不改变原功能
*/

class Button {
  public text: string;
  public button: HTMLButtonElement;
  constructor(text: string) {
    this.text = text;
    this.button = document.createElement("button");
    this.button.textContent = this.text;
    document.body.appendChild(this.button);
  }
  click() {
    this.text = "被点击了";
    this.button.textContent = this.text;
  }
}

class Decorator {
  constructor(public button: Button) {}
  click(color: string) {
    this.button.click();
    this.changChecked();
    this.changeBgColor(color);
    this.changSize();
  }
  changeBgColor(color: string) {
    this.button.button.style.backgroundColor = color;
  }
  changChecked() {
    this.button.button.disabled = true;
  }
  changSize() {
    this.button.button.style.fontSize = "17px";
    this.button.button.style.padding = "17px 0 0 17px";
  }
}

// new Button("默认按钮").click();
new Decorator(new Button("默认按钮")).click("red");
