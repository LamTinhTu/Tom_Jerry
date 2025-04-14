document.addEventListener('DOMContentLoaded',function (){

    const button= document.getElementById('actionButton');
    button.addEventListener('click',function () {
        const member = [
            {name: 'Tom / LamTinhTu'},
            {name: 'Jerry / MaiTranThanhNhat'},
            {name: 'Spike / NguyenDinhNhatHuy'}

        ];
        let message = 'Thành viên nhóm:\n\n';
        members.forEach(member =>{
            message += '${member.name}\n';

        });
        alert(message);            
        });
    });