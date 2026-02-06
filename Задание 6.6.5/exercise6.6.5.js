const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
const arrValues = [];
arrValues.push(obj.some, obj.dom);
for (const value of obj.arr) {
    arrValues.push(value);
}
arrValues.push(obj.tom);
console.log(arrValues);