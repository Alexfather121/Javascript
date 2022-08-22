document.write("<h4>Добавление элементов в массив</h4>")
//Создание пустого массива:
let nums = []
//Добавление элеменов в массив:
nums[0] = 10
nums[1] = true
nums[2] = 30
nums[3] = "текст"
nums[4] = 75
//Отображение содержимого массива:
for(let k = 0; k < nums.length; k++){
    document.write(nums[k]+" | ")
}
