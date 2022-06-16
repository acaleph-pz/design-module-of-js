/* 
  策略模式：
  用于优化多重 if else 结构
  解决胖逻辑

  需求：
  当价格类型为“预售价”时，满 100 - 20，不满 100 打 9 折
  当价格类型为“大促价”时，满 100 - 30，不满 100 打 8 折
  当价格类型为“返场价”时，满 200 - 50，不叠加
 */

function freshPrice(tag: string, price: number) {
  if (tag === "pre") {
    if (price >= 100) {
      return price - 20;
    }
    return price * 0.9;
  }
  if (tag === "onSale") {
    if (price >= 100) {
      return price - 30;
    }
    return price * 0.8;
  }
  if (tag === "back") {
    if (price >= 200) {
      return price - 50;
    }
    return price;
  }
}

/*  进行优化 */
// 定义一个询价处理器对象
const priceProcessor = {
  pre(originPrice: number) {
    if (originPrice >= 100) {
      return originPrice - 20;
    }
    return originPrice * 0.9;
  },
  onSale(originPrice: number) {
    if (originPrice >= 100) {
      return originPrice - 30;
    }
    return originPrice * 0.8;
  },
  back(originPrice: number) {
    if (originPrice >= 200) {
      return originPrice - 50;
    }
    return originPrice;
  },
};
type Tag = keyof typeof priceProcessor;
// 询价函数
function askPrice(tag: Tag, originPrice: number) {
  return priceProcessor[tag](originPrice);
}
