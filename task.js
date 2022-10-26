function parseCount(str) {
  let result = Number.parseInt(str);

  if (isNaN(result)) {
    console.log("Невалидное значение");
    //throw 'Невалидное значение'; //  ???почему с throw  не выводится 'Невалидное значение'???
  }
  return result;
}
let obj = "21";
console.log(parseCount(obj));

function validateCount(str) {
  try {
    let res = parseCount(str);
    return res;
  } catch (error) {
    return error;
  }
}
console.log(validateCount(obj));

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  /*if ((this.a + this.b) < this.c || (this.a + this.c) < this.b || (this.b + this.c) < this.a){
    throw "Треугольник с такими сторонами не существует";
  }//    ??? Что у меня не верно записано в if(...)???     */
  getPerimeter() {
    this.perim = this.a + this.b + this.c;
    return this.perim;
  }
  getArea() {
    this.p = this.perim / 2;
    this.S = Math.sqrt(
      this.p * (this.p - this.a) * (this.p - this.b) * (this.p - this.c)
    );
    console.log(Number(this.S.toFixed(3)));
  }
}

let g = new Triangle(2, 2, 2);
g.getPerimeter();
console.log(g.getArea());

function getTriangle(a, b, c) {
  try {
    let dw = new Triangle(a, b, c);

    return dw;
  } catch (error) {
    let ob = {};
    ob.getArea = function (a, b, c) {
      let perimetrHalf = (a + b + c) / 2;
      let S = Math.sqrt(
        perimetrHalf *
          (perimetrHalf - a) *
          (perimetrHalf - b) *
          (perimetrHalf - c)
      );
    };
    ob.getPerimetr = function (a, b, c) {
      let perim = a + b + c;
      return perim;
    };

    return ob;
  }
}
console.log(getTriangle(2, 2, 2));
