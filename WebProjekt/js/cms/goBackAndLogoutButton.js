var isUser=localStorage.getItem('userId');



document.getElementById('go_Back_search').addEventListener('click', function(event) {
event.preventDefault();

if(isUser!=null){
localStorage.removeItem('companyId');
localStorage.removeItem('companyName');
window.location.href='searchCompany.html';
}
else{alert('Diese Funktionen stehen nur den Kunden zur Verfügung');}
});

document.getElementById('go_Back_main').addEventListener('click', function(event) {
    event.preventDefault();
    if(isUser!=null){
    localStorage.removeItem('companyId');
    localStorage.removeItem('companyName');
    window.location.href='user.html';
    }
    else{alert('Diese Funktionen stehen nur den Kunden zur Verfügung');}
});


document.getElementById('logout').addEventListener('click', function(event) {
    event.preventDefault();
   
    localStorage.clear();
    window.location.href='login.html';
    
});
