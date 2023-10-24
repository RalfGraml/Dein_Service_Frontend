document.getElementById('user_register').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('http://localhost:8080/api/register', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Registrierung erfolgreich!');
            window.location.href = 'login.html';
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        // Hier kannst du den Fehler untersuchen
        console.error('Fehler aufgetreten:', error);

        
    });
});