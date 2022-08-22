//Создание объекта:
let objA={name:"Иван Петров", age:38, 
show:function(){
document.write("<u>Имя</u>:"+this.name+"<br>")    
document.write("<u>Возраст</u>:"+this.age+"<br>")
}
}
//Отображение значений свойств объекта objA:
objA.show()
//Присваивание объекта значением переменной:
let objB=objA
//Отображение значенией свойств объекта objB:
document.write("<b>Объект objB:</b><br>")
objB.show()
//Ноые значения свойств объекта objA:
objA.name = "Петр Иванов"
objA.age++
//Отображение новых значений свосйств объекта objA:
document.write("<b>Объект objA</b><br>")
objA.show()
//Оображение значений свойств объекта objB:
document.write("<b>Объект objB:</b><br>")
objB.show()