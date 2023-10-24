var companyIsLogged=localStorage.getItem('companyLog');
var hideForUsers = document.getElementsByClassName("hideUser");

if(companyIsLogged == null){
    for (var i = 0; i < hideForUsers.length; i++) {
        hideForUsers[i].style.display = "none";
      }
}

document.getElementById('userSight').addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.removeItem('companyLog');
    localStorage.setItem('back',"back");
    location.reload();

});

if( localStorage.getItem('back') !=null && localStorage.getItem('userId')==null){
var showbackButton=document.getElementById('backToCompanySight');
    showbackButton.style.display="flex";
    
}
document.getElementById('backToCompanySight').addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.setItem('companyLog',"log");
    localStorage.removeItem('back');
    location.reload();
});

