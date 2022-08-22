//Функция - конструктор объектов:
function Fellow(name,age){
    //Значение свойства name:
    this.name=name
    //Значение свойства age:
    this.age=age
    //Метод show():
    this.show=function(){
        document.write("<b>Имя</b>:"+this.name+"<br>")
        document.write("<b>Возраст</b>:"+this.age+"<br><hr>")
        }
}
//Создание объектов с помощью конструктора:
let objA= new Fellow("Иван Петров",38)
let objB = new Fellow("Петр Иванов",39)
//Проверка значений полей объектов:
objA.show()
objB.show()