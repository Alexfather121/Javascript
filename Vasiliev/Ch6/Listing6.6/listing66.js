//�������� �������:
let obj = {name:"������", code:123}
//���������� �������� � ������:
obj["text"]="�����"
//������������ �������� ����� �������
//� ���������� �� � ������:
for(let k = 1; k <= 5; k++){
    obj["symbol_"+k] = String.fromCharCode("A".charCodeAt(0)+k-1)
}
//����������� �������� � �������� ������� �������:
for(let s in obj){
    document.write("�������� <b>"+s+"</b>:"+obj[s]+"<br>")
}
document.write("��� ����� � = "+"A".charCodeAt(0)+"<br>")
//������ � ���������� ������� �������:
let list = Object.keys(obj)
//����������� �������� ������� �������:
document.write("["+list.join(" | ")+"]")