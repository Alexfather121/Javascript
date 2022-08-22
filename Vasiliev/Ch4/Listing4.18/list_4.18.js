//Создание объекта:
let A = {number:100}
//Дескриптор свойства number:
let descriptor = Object.getOwnPropertyDescriptor(A,"number")
//Отображение свойств объекта А:
show(A)
//Отображение свойств объекта descriptor:
show(descriptor)
//Функция для отображения свйоств объекта:
function show(obj){
    document.write("{|")
    for(let s in obj){
        document.write("<b>"+s+"</b>:"+obj[s]+"|")
    }
    document.write("}<br>")
}