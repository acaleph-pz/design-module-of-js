/* 
  js内置的发布订阅API，演示了如何创建和分派 DOM 事件，自定义事件
*/
class MyEvent {
  emit(eventName: string, data: any) {
    document.dispatchEvent(
      new CustomEvent(eventName, {
        detail: {
          payload: data,
        },
      })
    );
  }
  on(e: any, messageHandler: Function) {
    if (messageHandler) {
      const payload = e?.detail?.payload;
      messageHandler(payload);
    }
  }
}
const oneEvent = new MyEvent();

const onReceive = (e: any) => {
  oneEvent.on(e, (data: any) => {
    console.log("发布订阅，传参值为: ", data);
  });
};

document.addEventListener("message", onReceive);

oneEvent.emit("message", { data: "我传递数据" });

/* 
  js 手写发布订阅类
*/

type Sub = {
  [propName: string]: Array<Function>;
} & Object;
class PubPush {
  constructor(public subscribers: Sub = {}) {}

  on(name: string, callback: Function) {
    if (!this.subscribers.hasOwnProperty(name)) {
      this.subscribers[name] = [];
    }
    this.subscribers[name].push(callback);
  }
  emit(name: string, ...arg: any[]) {
    if (this.subscribers[name].length > 0) {
      this.subscribers[name].forEach((item) => {
        item.apply(this, arg);
      });
    } else {
      throw new Error("no function is handler");
    }
  }
  once(name: string, callback: Function) {
    const on = (...arg: any[]) => {
      this.off(name, on);
      callback.apply(this, arg);
    };
    this.on(name, on);

    // this.on(name, callback);
    // this.off(name);
  }
  off(name: string, callback?: Function) {
    if (!this.subscribers.hasOwnProperty(name)) return;
    if (!callback) {
      this.subscribers[name].length = 0;
    } else {
      this.subscribers[name].forEach((item, index) => {
        if (item === callback) {
          this.subscribers[name].splice(index, 1);
        }
      });
    }
  }
}

let pubPush = new PubPush();
pubPush.on("down", (res: any) => {
  console.log("down事件" + res);
});

pubPush.emit("down", "ssss");
pubPush.emit("down", "ssss");

pubPush.once("up", (res: any) => {
  console.log("up事件" + res);
});
pubPush.emit("up", "ssss");
pubPush.emit("up", "ssss");
