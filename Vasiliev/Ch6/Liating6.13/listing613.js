//������� � ����� ����������:
function zero(txt){
    document.write("<b>"+txt+"</b><hr>")
}
//����� toString() ��� ������� ������� zero():
zero.toString = function(){
    let t = "�������� ������� - zero<br>"
    t+="���������� ���������� -"+this.length+"<br><hr>"
    return t
}
//����� � ����� ����������:
function one(txt){
    document.write("<b>"+txt+"</b><br>")
    for(let s in this){
        document.write(this[s]+"<br>")
    }
    document.write("<hr>")
}
//����� toString() ��� ������� ������ one():
one.toString = function(){
    let t = "����� one()<br>"
    t+="���������� ���������� -"+this.length+"<br>"
    return t
}
//������ ������:
let A = []
//������ (���������) ������� �������:
A[0] = zero
//������ (� �������� ����) ������� �������:
A[1] = one
//����� ������� (������ ������� �������):
A[0]("��������� �������� �������")
//����� ������ (������ ������� �������):
A[1]("������� � ��������� ��������")