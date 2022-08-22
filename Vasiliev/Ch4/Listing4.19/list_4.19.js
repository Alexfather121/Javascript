//�������� ������� �������:
let A = {}
//���������� �������� number:
Object.defineProperty(A,"number",{value:100, enumerable:true, writable:true, configurable:true})
//������ - ���������� ������ ��������:
let descriptor = {value:"������ �", enumerable:true, writable: true, configurable: true}
//���������� �������� name:
Object.defineProperty(A,"name", descriptor)
//����������� ������� ������� �:
show(A)
//��������� ��������� �������� number:
Object.defineProperty(A, "number", {value: 200, enumerable: false})
//����������� ������� ������� �:
show(A)
//����������� �������� �������� number:
document.write("A.number = "+A.number)
//������� ��� ����������� ������� �������:
function show(obj){
    document.write("{|")
    for(let s in obj){
        document.write("<b>"+s+"</b>:"+obj[s]+"|")
    }
    document.write("}<br>")
}