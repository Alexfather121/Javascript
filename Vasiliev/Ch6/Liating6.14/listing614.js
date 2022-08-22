let x = new Number(12.3478)
with(document){
    write("<code>x.toExponential(10) = </code>"+x.toExponential(10)+"<br>")
    write("<code>x.toExponential(2) = </code>"+x.toExponential(2)+"<br>")
    write("<code>x.toFixed(10) = </code>"+x.toFixed(10)+"<br>")
    write("<code>x.toFixed(2) = </code>"+x.toFixed(2)+"<br>")
    write("<code>x.toPrecision(5) = </code>"+x.toPrecision(5)+"<br>")
    write("<code>x.toPrecision(2) = </code>"+x.toPrecision(2)+"<br>")
    
}