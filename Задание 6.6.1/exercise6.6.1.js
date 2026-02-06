const input = prompt('Введите слово или выражение');
if (input === null || input.trim() === "") {
    alert('Ошибка, поле не заполнено!');
}
else {
const register = input.toLowerCase();
let cleaned = "";
for (let space of register) {
    if (space !== " ") cleaned += space;
}
let reversed = "";
for (let i = cleaned.length - 1; i >= 0; i -= 1) {
    reversed += cleaned[i];
}
if (cleaned === reversed) {
    alert(`Слово или выражение "${input}" является палиндромом`);
}
else {
    alert(`Слово "${input}" не является палиндромом`);
}
}