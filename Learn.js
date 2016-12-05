"use strict";

// Названия задач как на сайте 
//==============================================

// Переменные

/*var admin, name = "Василий";
var ourPlanetName = "Земля";
var userName = "Петя";
admin = name;
alert( admin );*/
//===============================================

// Проверка целое ли число

/*function isIntefer(number)
{
	var number;
	return (number ^ 0) === number;
}*/
//===============================================

// Простая страница

/*var yourName = prompt ('Как тебя зовут?', 'Иван');
alert ('Тебя зовут ' + yourName +'!');*/
//================================================

// Сраная задача с угадайкой

/*var guesseWord = prompt ("Какое слово я задумал?", "");
while (guesseWord != "сендвич") 
{
if (guesseWord == "") {
	break;
}
prompt("Нет. Это не оно. Попробуйте еще раз.");
}
alert ("Поздравляю! Это именно то слово!");*/
//==================================================

// Проверка стандарта

/*var languageName = prompt('Каково "официальное" название Javascript', '');

if (languageName == 'EsmaScript') {
  alert('Верно!');
} else {
  alert('Не знаете? "EsmaScript"!');
}*/
//===================================================

// Получить знак числа

/*var number = prompt('Введите число', 0);
if (number > 0) {
  alert(1);
} 
else if (number < 0)
{
  alert(-1);
}
else {
	alert(0);
}*/
//=====================================================

// Проверка логина

/*var login = prompt ("Кто пришел?", "Админ");
if (login == null) {
	alert ("Вход отменен");
}
else if (login == "Админ") {
	var password = prompt ("Пароль?", "");
	if (password == null) {
		alert ("Вход отменен");
	}
	else if (password == "Черный Властелин") {
		alert ("Добро пожаловать!");
	}
	else {
		alert ("Пароль неверен");
	}
}
else {
	alert ("Я вас не знаю");
}*/
//=======================================================

// Перепишите 'if' в '?'

/*var a, b, result;
result = (a+b)<4 ? "Мало" : "Много";*/
//=======================================================

//Перепишите 'if..else' в '?'

/*var message = (login == "Вася") ? "Привет" :
	(login == "Директор") ? "Здравствуйте" :
	(login == "") ? "Нет логина" : "";*/
//========================================================

//Вопросник по преобразованиям для примитивов

//var a = (1,5-1)*2;
//alert("4px" - 2);

/**"" + 1 + 0 // 1 -
"" - 1 + 0 // -1 +
true + false // 1 +
6 / "3" //2 +
"2" * "3"  //6 +
4 + 5 + "px" //9 -
"$" + 4 + 5  //9 -

"4" - 2 //2 +

"4px" - 2 //2 -

7 / 0 // NaN -

"  -9\n" + 5 //-4 -
"  -9\n" - 5 //-14 +
5 && 2 //true - 

2 && 5 //true -

5 || 0 //true -

0 || 5 //true -
null + 1 //1 +
undefined + 1 // NaN +
null == "\n0\n" //true -
+null == +"\n0\n" //true +*/
//=============================================================

// Переписать if'ы в switch

/*var a = +prompt("a?", "");
switch (a) {
	case 0 :
	alert (0);
	break;

	case 1 :
	alert (1);
	break;

	case 2:
	case 3:
	alert ("2,3");
	break;
}*/
//=============================================================

// Обязателен ли "else"?

/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}*/
//=============================================================

// Перепишите функцию, используя оператор '?' или '||'

/*var age = prompt('Ваш возраст?');

if (checkAge(age)) {
  alert( 'Доступ разрешен' );
} else {
  alert( 'В доступе отказано' );
}

function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }

  alert( "Фильм не для всех" ); // (*)
  // ...
}*/

/*function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

function min (a, b) {
	var a, b;
	if (a < b) {
		return a;
	}
	else {
		return b;
	}
}*/
//==============================================================

// Степень

/*function pow (x, n) {
var result = x;
 	while (n) {
 		n--;
 	result *= x;
 	}
 return (result);
}
var x = prompt ("Введите число", "");
var n = prompt ("Введите степень >1", "");
 if(n<=1) {
 	alert ("Степень "+ n + " не поддерживается. Введите степень >1!");
 }
 else {
alert (pow (x, n));
}*/
//==================================================================

// Рекурсия
//Вычислить сумму чисел до данного

/*function sumTo (n) {
	if (n>1) {
		return n+sumTo(n-1);
	}
	else {
		return n;
	}
}
alert (sumTo(100000));*/

/*function sumTo (n) {
	var result=n;
	while (n) {
		n--
		result += n;
	}
	return result;
}
alert (sumTo(100000));*/

/*function sumTo (n) {
	var result = ((1+n)/2)*n;
	return result;
}
alert (sumTo(100000));*/

/*function sumTo (n) {
	var result=0;
	for (var i=1; i<=n; i++) {
		result += i;
	}
	return result;
}
alert (sumTo(2));*/
//======================================================================

//Вычислить факториал

/*function factorial (n) {
	if (n==1) {
		return 1;
	}
	else {
		return n*factorial (n-1);
	}
}
alert (factorial(5));*/
//=====================================================================

//Числа Фибоначчи

/*function fib (n) {
	if (n<=1) return n;
	else {
		return fib(n-1) + fib (n-2);
	}
	
}
alert (fib (77));*/

/*function fib (n) {
	var a=1, b=1;
	for (var i=3; i<=n; i++) {
		var c = a + b;
			a = b; 
			b = c;
 	}
 	return b;
}
	
alert (fib (77));*/
//====================================================================

//Методы и свойства
//Интерфейс суммы

/*var a = +prompt ("Введите первое число", "");
var b = +prompt ("Введите второе число", "");
alert (a+b);*/
//=====================================================================

//Сложение цен 

//alert ( (0.1*10 + 0.2*10)/10 );
//=====================================================================

//Формула Бине

/*function fibBinet (n) {
	var fi = (1 + Math.sqrt(5)) / 2;
	var Fn = Math.round (Math.pow (fi, n) / Math.sqrt(5));
	return Fn;
}

alert (fibBinet(77));*/
//=====================================================================

//Случайное целое от min до max

/*var max = 3,
	min = 1;
alert (Math.round(min - 0.5 + Math.random() * (max - min + 1)));*/
//=====================================================================

//Проверьте спам

/*function checkSpam (str) {
   var modStr = str.toLowerCase();
       if (~modStr.indexOf("viagra") || ~modStr.indexOf("xxx")) return true;
       else return false;
 }*/
 //======================================================================

 //Сделать первый символ заглавным

 /*function ucFirst (str) {
   
   if (str.charAt(0) == "") {
    return str;
   }
   else {
     return str[0].toUpperCase() + str.slice(1);
   }
 }*/
 //=======================================================================

 //Усечение строки

 /*function truncate(str, maxlength) {
      if (str.length > maxlength) {
      return str.substr(0, maxlength - 1) + String.fromCharCode(8230);
      }
     return str;
}*/
//========================================================================

//Первый объект

/*var user = {};
user.name = "Вася";
user.surname ='Петров';
user.name = 'Сергей';
delete user.name;*/
//=======================================================================

//Пустой ли объект

/*function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
      return true;
}*/
//======================================================================

//Свойство с наибольшим значением

/*var salaries = {
  "Вася": 600,
  "Петя": 300,
  "Даша": 250
};*/
/*var sum = 0;
 for (var name in salaries) {
 	sum += salaries[name];
 }
alert (sum);*/
 /*var maxName = '',
 	 max = 0;
 for (var name in salaries) {
 	if (max < salaries[name]) {
 		max = salaries[name];
 		maxName = name;
 	}
 }

alert (maxName || "Нет сотрудников");*/
//===========================================================================

//Умножьте численные свойства на 2

/*let menu = {
      width: 200,
      height: 300,
      title: "My menu"
    };
    
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
    }
      
function multiplyNumeric(obj) {
    for (var value in obj) {
        if (isNumeric(obj[value])) {
          obj[value] *= 2;
        }
      }
    }
    
multiplyNumeric(menu);
        
alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );*/
//==================================================================================

//Получить последний элемент массива

/*var goods = [];

alert goods[length-1];

goods.push('Компьютер');
goods[goods.length] = "Говно";*/
//==========================================================================

//Добавить новый элемент в массив

/*var styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
styles[styles.length-2] = "Классика";
alert (styles.shift());
styles.unshift('Рэп', 'Регги');*/
//==========================================================================

//Создание массива и получить случайное значение

/*var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var rand = min + Math.floor(Math.random() * (max + 1 - min));
alert (arr[rand]);*/
//=========================================================================

//Создайте калькулятор для введённых значений

/*var calc = [],
	value = 0,
	result = 0;

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
    }

while(isNumeric(value)) {
	value = prompt ("Введите число", "");
	calc.push(value);
}

for (var i = 0; i < calc.length; i++) {
	if (isNumeric(calc[i])) {
	result += +calc[i];
   }
}

alert ("Сумма: " + result);*/
//==========================================================================

//Поиск в массиве

/*function find(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) return i;
    }
    return -1;
  }*/
//===========================================================================

//Фильтр диапазона

/*function filterRange(arr, a, b) {
    var filtArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (a <= arr[i] && arr[i] <= b) {
      filtArr.push(arr[i]);
      }
    }
    return filtArr;
}*/
//=============================================================================

//Решето Эратосфена

/*function findSimple (n) {

	var array = [];

	for (var i = 2; i <= n; i++) {
		array[i] = true;
	}
	
	for (i = 2; i*i <= n; i++) {
		if(array[i]) {
			for (var j = i*i; j <= n; j += i) {
				array[j] = false;
			}
		}
	}

	var summ = 0;
	var filtArr = [];
	for (i = 0; i <= n; i++) {
		if (array[i]) {
			filtArr.push(i);
			summ += i;
		}
	}

	return [filtArr, summ];
}

alert (findSimple (100));*/
//================================================================================

//Добавить класс в строку

/*var obj = {className: 'open menu'}

function addClass(obj, cls) {
    if (obj.className) {
    	var arrToStr = obj.className.split(" ");
    }
    else arrToStr = [];
    for(var i = 0; i < arrToStr.length; i++) {
      	if(arrToStr[i] == cls) {
		    return;
	  	  }
      }
    arrToStr.push(cls);
    obj.className = arrToStr.join(" ");
}

addClass(obj,"new");
addClass(obj,"open");*/
//==================================================================================

//Перевести текст вида border-left-width в borderLeftWidth

/*function camelize(str) {
	var arr = str.split("-");
	var newArr = arr[0];
	for(var i = 1; i < arr.length; i++) {
	newArr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	return newArr;
}

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");*/
//==================================================================================

//Функция removeClass

/*var obj = {className: 'open menu menu'}

function removeClass(obj, cls) {
	if (obj.className) {
    var arrFromStr = obj.className.split(" ");
    }
    else arrFromStr = [];
    for(var i = 0; i < arrFromStr.length; i++) {
    	for (var j = i; j < arrFromStr.length; j++) {
	    	if(arrFromStr[j] == cls) {
		    arrFromStr.splice(j, 1);
	  	  }
	  	}
      }
 obj.className = arrFromStr.join(" ");
}

removeClass(obj, 'menu');
removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)*/
//=================================================================================

//Фильтрация массива "на месте"

/*function filterRangeInPlace(arr, a, b) {
	for (var i = 0; i < arr.length; i++) {
      if (a > arr[i] || arr[i] > b) {
      	arr.splice(i, 1);
      	i--;
      }
  }
}*/
//================================================================================

//Сортировать в обратном порядке

/*var arr = [5, 2, 1, -10, 8];

function compareNumeric(a, b) {
  return b-a;
}

arr.sort(compareNumeric);

alert (arr);*/
//===============================================================================

//Скопировать и отсортировать массив

/*var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = arr.slice().sort();
alert (arrSorted);
alert (arr);*/
//==============================================================================

//Случайный порядок в массиве

var arr = [1, 2, 3, 4, 5];

function rundomize(a, b) {
	
}