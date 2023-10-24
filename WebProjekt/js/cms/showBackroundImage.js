
document.addEventListener('DOMContentLoaded', function() {
    var companyId = localStorage.getItem('companyId');

    if (companyId) {
        var formData = new FormData();
        formData.append('companyId', companyId);

        fetch('http://localhost:8080/apiCompanyPicture/getBackroundImagePath', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data !== 'Kein Hintergrundbild Vorhanden') {
                var backgroundImageUrl = data; 
              //  var backgroundImageUrl = '../Spring_Boot/FinalesProjekt/src/main/resources/static/img/29_userBack.jpg';
                document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
            }
        })
        .catch(error => {
            console.error('Fehler:', error);
        });
    }
});