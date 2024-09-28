console.log ("hello from javascript");

let name;
name = prompt("Нипишите ваше имя")
alert("Привет  " + name)

let q,w;
q = prompt("Укажите год Вашего рождения:")
w = 2024 - q;
alert(" вам  " + w + " лет")

let l,z;
l = prompt("Введите длину стороны квадрата:");
l = Number(l)
z = 4 * l;
alert("Периметр квадрата = " + z)

const d = 3.14;
let r,S;
r = prompt("Введите радиу окружности:");
r = Number(r)
S = d * r * 2;
alert("Площадь окружности = " + S)

let X,Y,Z;
X = prompt("Укажите растояние в км: ")
Y = prompt("Укажите время в ч: ")
X = Number(X)
Y = Number(Y)
Z = X / Y;
alert("Необходимая скорость -  " + Z + "км/ч");

const eu = 0.89641;
let a,b,c;
a = prompt("Количество $:");
a = Number(a);
c = eu;
b = a * c;
alert("Результат -  " + b + ("eu"))
