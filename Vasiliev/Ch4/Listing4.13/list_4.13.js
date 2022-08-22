//������ ������ (��������� �� ������ Math):
let A = Object.create(Math)
//������ ������ (��������� �� ������ �):
let B = Object.create(A)
//������ ������ (��������� �� ������ B):
let C = Object.create(B)
//��������� ������ (��������� �� ������ �):
let D = Object.create(C)
//���������� ������ f() � �������� ������� �:
Object.getPrototypeOf(A).f=function(x){
    return 2*x+1
}
//���������� � ������������� ���������:
let t = 2
//����� ������ f() �� ������� Math:
document.write("������� f("+t+")="+Math.f(t)+"<br>")
//����� �������� ���������� t:
t = 3
//����� ������ f() �� ������� D:
document.write("������� f("+t+")="+D.f(t)+"<br>")
//������ �� �������� ��������� ������� D:
let obj = Object.getPrototypeOf(Object.getPrototypeOf(D))
//�������� ��������� ��������:
document.write("obj==B ->"+(obj==B)+"<br>")
t = 20
document.write("������� f("+t+")="+A.f(t)+"<br>")