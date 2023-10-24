document.getElementById('company_register').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('http://localhost:8080/apiCompany/registerCompany', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Registrierung erfolgreich!');
            window.location.href = 'login.html'; // Weiterleitung zur user.html
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
    
    });
});