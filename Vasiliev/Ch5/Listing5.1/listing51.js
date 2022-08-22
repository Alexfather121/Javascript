document.write("<h4>Создание массива</h4>")
//Создание массива:
let nums = [10,true,30,"текст",75]
//Отображение содержимого массива:
document.write(nums+"<br>")
for(let k in nums){
    document.write(nums[k]+"&nbsp;|&nbsp;")
} 