document.addEventListener('DOMContentLoaded', function() {
    // Das DOM wurde geladen, jetzt können wir die E-Mail-Adresse abrufen und als String verwenden
    var emailElement = document.getElementById('user_Name');
    var storedName = localStorage.getItem('user_Name');
    emailElement.textContent=storedName;


});