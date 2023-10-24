document.getElementById('first_text').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('http://localhost:8080/CompanySaveText/text', {
        method: 'PUT',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Text wurde geändert');
          
        } else {
            alert('Textänderung fehlgeschlagen. Bitte überprüfen Sie Ihre Eingaben.');
        }
    })
    .catch(error => {
        console.error('Fehler:', error);
    });
});
