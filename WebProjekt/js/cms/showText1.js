
document.addEventListener('DOMContentLoaded', function() {
    var companyId = localStorage.getItem('companyId'); // Hole die companyId aus dem localStorage
    var textElement = document.getElementById('companyText');
    var companyLog=localStorage.getItem('companyLog');
    var companyName=localStorage.getItem('companyName');
    var companyNameField=document.getElementById('company_Name');

    companyNameField.textContent=companyName;
    if (companyId && companyLog ==null) {
        fetch('http://localhost:8080/apiCompanyShowText/getText?companyId=' + companyId, {
            method: 'POST',
        })
        .then(response => response.text())
        .then(data => {
            if (data ==null ) {
               alert("Kommunikation fehlgeschlagen")
              
            }else{ 

               data = data.replace(/\n/g, "<br>"); // Ersetze Zeilenumbrüche durch <br>-Tags
                textElement.innerHTML = data; // Verwende innerHTML, um HTML-Tags zu interpretieren
                
               
            }
                
                
        })
        .catch(error => {
            console.error('Fehler:', error);
        });
    }
});
