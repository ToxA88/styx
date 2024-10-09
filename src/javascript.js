console.log ("hello from javascript");

// let name;
// name = prompt("Нипишите ваше имя")
// alert("Привет  " + name)

// let q,w;
// q = prompt("Укажите год Вашего рождения:")
// w = 2024 - q;
// alert(" вам  " + w + " лет")

// let l,z;
// l = prompt("Введите длину стороны квадрата:");
// l = Number(l)
// z = 4 * l;
// alert("Периметр квадрата = " + z)

// const d = 3.14;
// let r,S;
// r = prompt("Введите радиу окружности:");
// r = Number(r)
// S = d * r * 2;
// alert("Площадь окружности = " + S)

// let X,Y,Z;
// X = prompt("Укажите растояние в км: ")
// Y = prompt("Укажите время в ч: ")
// X = Number(X)
// Y = Number(Y)
// Z = X / Y;
// alert("Необходимая скорость -  " + Z + "км/ч");

// const eu = 0.89641;
// let a,b,c;
// a = prompt("Количество $:");
// a = Number(a);
// c = eu;
// b = a * c;
// alert("Результат -  " + b + ("eu"))

// const MB = 820;
// let flash;
// flash = prompt('Каков объем вашей флешки в Гб? ')
// flash = Number(flash);
// size = Math.trunc(flash * 1000 / MB);
// if (size < 0) {
//   alert('Ваша флешка перезаполнена, освободите пространство');
// }
// else {
//   alert('На флешку поместится ' + size + ' файлов объемом 820 Мб');
// }

// let num,A,B,C;
// num = prompt('Введите трехзначное число: ');
// A = Number(num % 10);
// B = Number((num - A) / 10 % 10);
// C = Number((num - A - B * 10) / 100);
// alert('Зеркально: ' + (A * 100 + B * 10 + C));

// let many,shoc;
// many = prompt("Cколько у вас денег? ");
// shoc = prompt("И почем шоколадка? ");
// many = Number(many);
// shoc = Number(shoc);
// res = Math.trunc(many / shoc);
// ch = many - shoc * res;
// if (res < 1) {
//   alert('у Вас не хватает денег. ');
// }
// else {
//   alert('Ва получите ' + res + ' шоколадки, и сдачу ' + (many - shoc * res) + ' р ');
// }

// let u;
// u = prompt('Введите число: ');
// u = Number(u);
// alert((parseInt(u) % 2 == 0) ? "Ваше число чётное" : "Ваше число нечётное");

var obj = new Object()
var obl2 = {}
var student = new Object();
student["Name"] = ("Anton");
student["Age"] = "23 года";
console.log(student["Name"]);
console.log(student["Age"]);
var firm = {}
firm.Name = "Star Inc";
firm.Address = "Nevskiy prospect";
console.log(firm.Name);
console.log(firm.Address);
var dog = {}
dog["Name of dog"] = "Caesar";
dog.Age = "3 года";
console.log(dog["Name of dog"]);
console.log(dog.Age);
var cat = {}
cat.Name = "Pusya";
cat.Age = "2 года";
console.log(cat.Name);
console.log(cat.Age);
if ("Address" in firm) {
  console.log("da " + firm.Address);
}
else {
  console.log("netu");
}

var student2 = {
  Name: "Vitas",
  LastName: "Petrov",
  age: "23 года",
}
console.log(student2)
console.log(student2.Name)
console.log(student2.LastName)
console.log(student2.age)

const message = new String("Hello");
console.log(message[3]);
console.log(message[0]);
console.log(message[2]);
console.log(message.length,"simvolov");
console.log(message.repeat(2))

const hello = "привет мир . пока мир .";
const key = "мир".padStart(10,"привет ");
const world = hello.substring(6,0);
const bey = hello.substring(13,17);
const bye = hello.slice(-10,-1);
const firstPos = hello.indexOf(key);
const lastPos = hello.lastIndexOf(key);
const eye = hello.substr(6,12);
const bor = hello.concat(key);
const tir = bye.replace("пока","привет");
const heyParts = hello.split(" ");
console.log(firstPos);
console.log(lastPos);
console.log(hello.includes("пока",12));
console.log(hello.includes("мир",18));
console.log(world);
console.log(bey);
console.log(bye);
console.log(eye);
console.log(eye.toUpperCase());
console.log(eye.charCodeAt(1),eye.charAt(1));
console.log(eye.trim());
console.log(bor)
console.log(tir.repeat(3))
console.log(heyParts)
console.log(hello.startsWith("п"))
console.log(hello.endsWith("."))
console.log(hello.startsWith("р",9))
console.log(hello.startsWith("п",hello.length-10))
console.log(key)