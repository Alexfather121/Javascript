//�������� �������:
let A = {number:100}
//���������� �������� number:
let descriptor = Object.getOwnPropertyDescriptor(A,"number")
//����������� ������� ������� �:
show(A)
//����������� ������� ������� descriptor:
show(descriptor)
//������� ��� ����������� ������� �������:
function show(obj){
    document.write("{|")
    for(let s in obj){
        document.write("<b>"+s+"</b>:"+obj[s]+"|")
    }
    document.write("}<br>")
}