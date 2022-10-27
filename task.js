function parseCount(str) {
  let result = Number.parseInt(str);

  if (isNaN(result)) {
    throw new Error("Невалидное значение");
  }
  return result;
}
let obj = "21";
console.log(parseCount(obj));

function validateCount(str) {
  try {
    return parseCount(str);
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
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error('Треугольник с такими сторонами не существует"');
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }
  getArea() {
    return Number(
      Math.sqrt(
        (this.getPerimeter() / 2) *
          (this.getPerimeter() / 2 - this.a) *
          (this.getPerimeter() / 2 - this.b) *
          (this.getPerimeter() / 2 - this.c)
      ).toFixed(3)
    );
  }
}
let g = new Triangle(3, 2, 2);
console.log(g.getPerimeter());
console.log(g.getArea());

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    let ob = {};
    ob.getArea = function (a, b, c) {
      /*let perimetrHalf = (a + b + c) / 2;
      let S = Math.sqrt(perimetrHalf * (perimetrHalf - a) * (perimetrHalf - b) * (perimetrHalf - c)); */
      return "Ошибка! Треугольник не существует";
    };
    ob.getPerimetr = function (a, b, c) {
      /*let perim = a + b + c;
      return perim;*/
      return "Ошибка! Треугольник не существует";
    };

    return ob;
  }
}
console.log(getTriangle(12, 2, 2));
