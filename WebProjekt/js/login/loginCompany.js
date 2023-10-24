document.getElementById('loginCompany').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('http://localhost:8080/CompanyLogin/login', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Anmeldung erfolgreich!');
            localStorage.setItem('companyId', data.id); // Speichert die Benutzer-ID aus der Antwort
            localStorage.setItem("companyLog","company is logged");
            localStorage.setItem("companyName",data.name);
          
            window.location.href = 'company.html';
        } else {
            alert('Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Eingaben.');
        }
    })
    .catch(error => {
        console.error('Fehler:', error);
    });
});
