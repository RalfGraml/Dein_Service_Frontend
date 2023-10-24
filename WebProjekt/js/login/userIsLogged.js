document.addEventListener('DOMContentLoaded', function() {
    var userId = localStorage.getItem('userId');
    
    if (!userId) {
        window.location.href = 'login.html';
    }else{
        
    }
});
