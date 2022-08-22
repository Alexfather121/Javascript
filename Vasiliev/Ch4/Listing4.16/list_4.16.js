//Конструктор:
function MyObj(){
    this.number = 0
}
//Объект:
let A = new MyObj()
//Определение конструктора через объект:
let F = A.constructor
//создание объекта:
let B = new F()
//Проверка значения свойства number объекта:
document.write("Свойство B.number = "+B.number+"<br>")
//Новый объект:
A = {}
//Определение конструктора:
F = A.constructor
//Проверка объекта конструктора:
document.write("F==Object - > "+(F==Object)+"<br>")
//Создание объекта с помощью анонимного конструктора:
A = new function(){
    this.name = "объект"
}()
//Определение конструктора:
F = A.constructor
//Создание объекта:
B = new F()
//Проверка значения свойства name объекта:
document.write("Свойство B.name = "+B.name)