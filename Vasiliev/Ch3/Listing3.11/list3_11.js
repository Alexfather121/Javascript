// Функция для вычисления провизводной:
function diff(f,x,dx){
    //Результат функции:
    return(f(x+dx)-f(x))/dx
}
//Функция для передачи аргументом:
function G(k){
    //Значение функции:
    return k*k+k
}
//Точное значение производной:
function g(y){
    return 2*y+1
}
document.write("<h4>Вычисление производной</h4>")
//Вычисление производной:
for(var z=0; z<=2; z+=0.5){
    document.write(g(z)+"vs."+diff(G,z,0.001)+"<br>")
}