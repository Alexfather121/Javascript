//������� - ����������� ��������:
function Fellow(name,age){
    //�������� �������� name:
    this.name=name
    //�������� �������� age:
    this.age=age
    //����� show():
    this.show=function(){
        document.write("<b>���</b>:"+this.name+"<br>")
        document.write("<b>�������</b>:"+this.age+"<br><hr>")
        }
}
//�������� �������� � ������� ������������:
let objA= new Fellow("���� ������",38)
let objB = new Fellow("���� ������",39)
//�������� �������� ����� ��������:
objA.show()
objB.show()