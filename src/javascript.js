// console.log ("hello from javascript");

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
student["Age"] = 23;
alert(student["Name"]);
alert(student["Age"]);
var firm = {}
firm.Name = "Star Inc";
firm.Address = "Nevskiy prospect";
alert(firm.Name);
alert(firm.Address);
var dog = {}
dog["Name of dog"] = "Caesar";
dog.Age = 3;
alert(dog["Name of dog"]);
alert(dog.Age);
var cat = {}
cat.Name = "Pusya";
cat.Age = 2;
alert(cat.Name);
alert(cat.Age);
if ("Address" in firm) {
  alert("da " + firm.Address);
}
else {
  alert("netu");
}

var student2 = {
  name: "Vitas",
  LastName: "Petrov",
  age: 23
}
alert(student2.name)
alert(student2.LastName)
alert(student2.age)