//Объект для использования в качестве прототипа:
let X={
    color:"красный",
    number:123,
    show:function(arg){
        document.write("<b>"+arg+"</b>:")
        for(let s in this){
        if(s!="show"){
            document.write(s+" -> "+this[s]+"|")
        }
    }
    document.write("<br>")
}
}//Окончание описания объекта-прототипа
//Первый объект:
let A = Object.create(X)
//второй объект:
let B = Object.create(X)
//Проверяем свойства объектов:
showAll()
//Присваиваем новые значения свойствам объектов:
A.color="желтый"
A.number=321
B.color="зеленый"
//Проверяем свойства объектов:
showAll()
//Добавление свойства name в объект-прототип:
X.name="прототип"
//Добавление свойства state в первый объект:
A.state=true
//Проверяем свойства объектов:
showAll()
//Удаляем свойство number объекта-прототипа:
delete X.number
//Удаляем свойство color первого объекта:
delete A.color
//проверяем свойства объектов:
showAll()
//Функция для отображения свойств объектов:
function showAll(){
    X.show("X")
    A.show("A")
    B.show("B")
    document.write("<hr>")
}