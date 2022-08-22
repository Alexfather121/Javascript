//Создание объекта:
let obj = {name:"объект", code:123}
//Добавление свойства в объект:
obj["text"]="текст"
//Формирование названий новых свойств
//и добавление их в объект:
for(let k = 1; k <= 5; k++){
    obj["symbol_"+k] = String.fromCharCode("A".charCodeAt(0)+k-1)
}
//Отображение названий и значений свойств объекта:
for(let s in obj){
    document.write("Свойство <b>"+s+"</b>:"+obj[s]+"<br>")
}
document.write("Код буквы А = "+"A".charCodeAt(0)+"<br>")
//Массив с названиями свойств объекта:
let list = Object.keys(obj)
//Отображение названий свойств объекта:
document.write("["+list.join(" | ")+"]")