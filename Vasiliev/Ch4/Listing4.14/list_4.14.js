//������ ������ � ����������:
let A={}
//������ ������ ��� ���������:
let B = Object.create(null)
//������ ������ � ���� ��������� ����������:
let C = Object.create(B)
//���������� �������� number � ������ B:
B.number = 100
//���������� �������� name � �������� �������� ������:
Object.prototype.name = "������ �"
//����������� ������� ��������:
show(A)
show(B)
show(C)
//������� ��� ����������� ������� �������:
function show(obj){
    for(let s in obj){
        document.write(s+" - > "+obj[s])
    }
    document.write("<br>")
}