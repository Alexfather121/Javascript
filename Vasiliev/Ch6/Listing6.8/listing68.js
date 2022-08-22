//Конструктор для создания дерева объектов:
function Tree(rank, refs, number, code){
    //Ранг уровня, на котором находится объект:
    this.rank = rank
    //Номер объекта:
    this.number = number || 1
    //Формальный код объекта:
    this.code = code || "|"
    this.code+=this.rank+" ->"+this.number+" |"
    //Создание массива объектов:
    if(this.rank > 1){
        //Массив:
        this.next = new Array(refs)
        for(let k = 0; k < this.next.length; k++){
            //Создание объекта - элемента массива. Имеет
            //Место рекурсивный вызов функции - конструктора:
            this.next[k] = new Tree(this.rank - 1, refs, k+1, this.code)
        }
    }
}
//Переопределение метода toString() для прототипа
//конструктора дерева объектов:
Tree.prototype.toString = function(){
    //Локальная текстовая переменная:
    let t = "Объект: ранг -"+this.rank+", номер -"+this.number
    t+=", код - "+this.code+"<br>"
    //Если объект не на последнем уровне:
    if(this.rank > 1){
        for(let k = 0; k < this.next.length; k++){
            //Рекурсивный вызов метода toString():
            t+= this.next[k].toString()
        }
    }
    //Результат метода:
    return t
}
// Создание дерева объектов:
let myTree = new Tree(4,2)
//Отображение содержимого дерева объектов:
document.write(myTree)