//������� ������� ��� ���������� ���������:
function mlog(x){
    //��������� ����������:
    let s = 0, k
    //���������� ������ ����:
    let n = 100
    //���������� �������� ����:
    for(k=1;k<=n;k++){
        //����� ���������� �������:
        s-=power(-x,k)/k
    }
    //��������� ������� �������:
    return s
    //���������� ������� ��� ���������� ������� �����:
    function power(z,m){
        let p=1,i
        //���������� ������� �����:
        for(i=1;i<=m;i++){
            p*=z
        }
        //��������� ���������� �������:
        return p
    } //��������� �������� ���������� �������
}//��������� �������� ������� �������

document.write("<h4>������������� ���������� �������</h4>")
//���������� ����������:
let x = 0.2
//����� ������� ��� ���������� ���������:
document.write("ln(1+"+x+")="+mlog(x)+"<br>")
//�������� ������������ ��������:
document.write("��������: "+Math.log(1+x)+"</br>")
