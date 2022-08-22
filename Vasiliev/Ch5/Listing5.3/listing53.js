document.write("<h4>Массив</h4>")
//Создание массива:
let nums = new Array(10, true, 30, "текст", 75)
//Отображение содержимого массива:
for(let o = 0; o < nums.length; o++){
    document.write(nums[o]+" | ")
}