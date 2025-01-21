document.addEventListener('DOMContentLoaded', function () {
  //   alert('Привет, мир!'); строчный тип данных

  //   alert(3 + 1 + 2); числовой тип данный, где без кавычек

  //   let message = 'Hi';
  //   alert(message);
  //   //   всплывающее окно

  //   let name = 'Иван';
  //   // Вставим переменную
  //   alert(`Привет, ${name}!`);

  //   let isGreater = 4 > 1;
  //   alert(isGreater);

  //   let isGreater = 7 > 12;
  //   console.log(isGreater);
  //   //   функция вывода значения, которое имеет переменная. можно посмотреть через инспектор, там же обычно к
  //   //   этому там оставляют комментарии

  //   let temperature = 25;
  //   let isHot = temperature > 30 ? 'Горячо' : 'Не горячо';
  //   alert(isHot); // Выводит: Не горячо

  //   let age = prompt('Сколько тебе лет?', 100);
  //   alert(`Тебе ${age} лет!`);

  //   let userAge = prompt('Введите ваш возраст:');
  //   let ageNextYear = parseInt(userAge) + 1;
  //   //   parseInt округляет до целого числа
  //   console.log('В следующем году вам будет ' + ageNextYear + ' лет.');

  //   let userAnswer = prompt('Вы согласны с условиями использования? (да/нет)');

  //   if (userAnswer.toLowerCase() === 'да') {
  //     console.log('Спасибо за согласие!');
  //   } else if (userAnswer === null) {
  //     console.log('Операция отменена');
  //   } else {
  //     console.log('Вы отказались от условий использования.');
  //   }

  // let isBoss = confirm('Ты здесь главный?');
  // alert(isBoss);
  //   это вопрос, а до этого был запрос

  // Домашка
  // Задача 1
  let str = 'abcde';
  alert(str[1]);
  // меняя цифры от этого разные буквы

  // Задача 2
  let a = parseInt(prompt('Введите первое число:'));
  let b = parseInt(prompt('Введите второе число:'));
  console.log(a > 0 || b > 0);

  // Задача 3
  let age = parseInt(prompt('Введите ваш возраст:'));
  if (age >= 18) {
    console.log('Совершеннолетний');
  } else {
    console.log('Несовершеннолетний');
  }
});
// В коде все древовидно, чтобы была нужная последовательность действий, это список функций
