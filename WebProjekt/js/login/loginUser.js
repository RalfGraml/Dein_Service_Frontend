document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('http://localhost:8080/api/login', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Anmeldung erfolgreich!');
            localStorage.setItem('email', formData.get('email'));
            localStorage.setItem('user_Name', data.name); // Speichert den Namen aus der Antwort
            localStorage.setItem('userId', parseFloat(data.id));
           
           window.location.href = 'user.html';
        } else {
            alert('Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Eingaben.');
        }
    })
    .catch(error => {
        console.error('Fehler:', error);
    });
});

