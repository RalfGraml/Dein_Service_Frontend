document.addEventListener('DOMContentLoaded', function() {
    var companyId = localStorage.getItem('companyId'); // Hole die companyId aus dem localStorage
    var imageElement = document.getElementById('companyImage');
    imageElement.src = 'Pfad/zum/Bild.jpg';

    if (companyId) {
        fetch('http://localhost:8080/apiCompanyPicture/getImage?companyId=' + companyId, {
            method: 'POST',
        })
        .then(response => response.text())
        .then(data => {
            if (data == 'Kein Bild Vorhanden') {
               alert("kein Bild vorhanden"+data)
               
              
            }else{ 
                imageElement.innerHTML = '<img src = "'+data+'"></img>';
            }
        })
        .catch(error => {
            console.error('Fehler:', error);
        });
    }
});



