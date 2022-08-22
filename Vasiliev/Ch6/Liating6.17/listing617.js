//������� ���� � �����:
let today = new Date()
//��������� ����:
let tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate()+4)
//���������� ����:
let yesterday = new Date(today)
yesterday.setDate(yesterday.getDate()-1)
//����� �����:
let monthAfter = new Date(Date.now())
monthAfter.setMonth(monthAfter.getMonth()+1)
//����� ���:
let yearAfter = new Date(Date.now())
yearAfter.setFullYear(yearAfter.getFullYear()+1)
//����������� ���:
with(document){
    write("<b>�������:</b>"+today+"<br>")
    write("<u>���:</u>"+today.getFullYear()+"<br>")
    write("<u>����:</u>"+today.toLocaleDateString()+"<br>")
    write("<u>�����:</u>"+today.toLocaleTimeString()+"<br>")
    write("<b>������:</b>"+tomorrow+"<br>")
    write("<b>�����</b>"+yesterday+"<br>")
    write("<b>����� �����</b>"+monthAfter+"<br>")
    write("<b>����� ���</b>"+yearAfter+"<br>")
   
}
//����� ������� (���� ������ ���� � �����):
let meeting = new Date(2015,8,30,8,0,0)
//����������� ���:
document.write("<b>�������:</b>"+today.toLocaleString()+"<br>")
document.write("<b>����� � ���� �������: </b>"+meeting.toLocaleString()+"<br>")
//��������� ����:
meeting.setDate(meeting.getDate()+1)
//����������� ����� ����:
document.write("<b>����� ����� � ���� �������:</b>"+meeting.toLocaleString()+"<br>")
//����� �� ������� (� �������������):
document.write("<u>�� �������:</u>"+(meeting-today)+" �����������<br>")
//����� �� ������� (� ����):
document.write("<u>�� �������:</u>"+Math.round((meeting-today)/1000/60/60/24)+" ����<br>")