document.write("<h4>Числа Фибоначчи</h4>")
let n = 15, a, b
let fibs = new Array()
fibs.push(1,1)
while(fibs.length < n){
    a = fibs[fibs.length - 1]
    b = fibs[fibs.length - 2]
    fibs.push(a + b)
}
for (let k = 0; k < fibs.length; k ++){
    document.write(fibs[k]+" | ")
}