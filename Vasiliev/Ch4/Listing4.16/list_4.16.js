//�����������:
function MyObj(){
    this.number = 0
}
//������:
let A = new MyObj()
//����������� ������������ ����� ������:
let F = A.constructor
//�������� �������:
let B = new F()
//�������� �������� �������� number �������:
document.write("�������� B.number = "+B.number+"<br>")
//����� ������:
A = {}
//����������� ������������:
F = A.constructor
//�������� ������� ������������:
document.write("F==Object - > "+(F==Object)+"<br>")
//�������� ������� � ������� ���������� ������������:
A = new function(){
    this.name = "������"
}()
//����������� ������������:
F = A.constructor
//�������� �������:
B = new F()
//�������� �������� �������� name �������:
document.write("�������� B.name = "+B.name)