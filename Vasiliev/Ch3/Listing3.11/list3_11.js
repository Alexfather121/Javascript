// ������� ��� ���������� ������������:
function diff(f,x,dx){
    //��������� �������:
    return(f(x+dx)-f(x))/dx
}
//������� ��� �������� ����������:
function G(k){
    //�������� �������:
    return k*k+k
}
//������ �������� �����������:
function g(y){
    return 2*y+1
}
document.write("<h4>���������� �����������</h4>")
//���������� �����������:
for(var z=0; z<=2; z+=0.5){
    document.write(g(z)+"vs."+diff(G,z,0.001)+"<br>")
}