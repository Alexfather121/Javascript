//������� � ���������� this ������� ��� �������:
function f(text, number){
    this.text = text
    this.number = number
}
//�������:
let A = {}
let B = {show:function(){
    for(let s in this){
        document.write(s+":"+this[s]+"<br>")
    }
}}
let C = {}
C.method = f
//����� �������:
f("�������",100)
//����� �� ������� ������� ������ call():
f.call(A,"������ �",200)
//����� �� ������� ������� ������ apply():
f.apply(B,["������ B",300])
//����� ������ �������:
C.method("������ �", 400)
//�������� �������� ����������
//���������� � ������� ��������:
with(document){
    write(text+"|"+number+"<br>")
    write(A.text+"|"+A.number+"<br>")
    write(B.text+"|"+B.number+"<br>")
    write(C.text+"|"+C.number+"<br>")
}
//�������� ������� � �������� ������ f():
document.write(("f" in A)+"<br>")
document.write(("f" in B)+"<br>")
document.write(("f" in C)+"<br>")
//�������� ������� � ������� ��������:
document.write("<b>������ B:</b><br>")
B.show()
document.write("<b>������ �:</b><br>")
B.show.call(A)
document.write("<b>������ �:</b><br>")
B["show"].call(C)