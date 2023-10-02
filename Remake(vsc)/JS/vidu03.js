// function Homnay(){
//     var d = new Date();
//     alert("Hôm nay là ngày: " + d.getDate() +"Tháng"+ d.getMonth() + "Năm" + d.getFullYear());
// }
const div = document.getElementById('test');
const today = document.createElement('button');
today.innertext = 'Hom nay';
div.appendChild(today);