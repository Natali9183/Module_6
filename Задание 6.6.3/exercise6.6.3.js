const input = prompt("Введите любое число");
if (input === null) {
  alert("Завершение программы");
} else if (input.trim() === "") {
  alert("Ошибка, поле не заполнено");
} else {
  const number = +input;
  if (isNaN(number)) {
    alert("Ошибка, введите число");
  } else {
    const result = [];
    for (let i = 0; i <= number; i += 1) {
      result.push(i);
    }
    alert(result);
  }
}
