//Вспомогательная текстовая переменная:
let txt = '"name" in Math'
//Проверка наличия свойства name у объекта Math:
document.write(txt+" - > "+eval(txt)+"<br>")
//Первый объект:
let A={color:"красный"}
//Второй объект:
let B=new Object()
//Добавление свойства number в объект B:
B.number=100
//Отображаются свойства объектов:
showAll()
//Добавляется свойство name в прототип Object.prototype:
Object.prototype.name="объектА"
//Проверка наличия свойства name у объекта Math:
document.write(txt+" -> "+eval(txt)+"<br>")
//Отображаются свойства объектов:
showAll()
//Добавляется свойство name в объект B:
B.name="объектB"
//Отображается значение свойства name объекта Math:
document.write("Math.name ->"+Math.name+"<br>")
//Отображаются свойства объектов:
showAll()
//Удаление свойства name у прототипа Object.prototype:
delete Object.prototype.name
//Проверка наличия свойства name у объекта Math:
document.write(txt+" -> "+eval(txt)+"<br>")
//Отображаются свойства объектов:
showAll()
//Функции для отображения свойств объектов:
function show(obj){
    for(let s in obj){
        document.write(s+" -> "+obj[s]+"|")
    }
 document.write("<br><hr>")
}
function showAll(){
    document.write("ОбъектА:")
    show(A)
    document.write("ОбъектB:")
    show(B)
}