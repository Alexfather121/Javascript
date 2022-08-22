//Конструктор объектов:
function MyObject(name,number){
    this.name = name
    this.number = number
    this.show = function(){
        for(let s in this){
            if(s!="show"){
            document.write(s+" - > "+this[s]+"|")
        }
    }
    document.write("<br>")
}
}
//Создание объектов на основе конструктора:
let A = new MyObject("Объект А",100)
let B = new MyObject("Объект B",200)
//Отображение свойств объектов:
document.write("<b>Свойства созданных объектов:</b><br>")
A.show()
B.show()
//Добавление свойства color в прототип объектов:
MyObject.prototype.color = "прозрачный"
//Отображение свойств объектов:
document.write("<b>После добавления свойства:</b><br>")
A.show()
B.show()
//Добавление собственного свойства color в объект А:
A.color = "белый"
//Удаление свойства color из прототипа объектов:
delete MyObject.prototype.color
//Отображение свойств объектов:
document.write("<b>После удаления свойства:</b><br>")
A.show()
B.show()
//Проверка прототипа объекта:
document.write("<b>Проверка прототипа объекта:</b><br>")
let txt = "Object.getPrototypeOf(A)==MyObject.prototype"
document.write(txt+" -> "+eval(txt))