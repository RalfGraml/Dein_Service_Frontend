document.getElementById('searchCompany').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);

    fetch('http://localhost:8080/apiSearch/findCompany', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Bad Request');
        }
        return response.json();
    })
    .then(data => {
        var resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = ''; // Zurücksetzen der vorherigen Ergebnisse

        if (data && data.length > 0) {
            data.forEach(companyData => {
                var companyElement = document.createElement('div');
               
                var companyInfo = `
                    <div class="company">
                        <div class="comLine" id="company_Name">${companyData.name}</div>
                        <div class="comLine" id="job_Name">${companyData.job}</div>
                        <div class="comLine" id="adress">${companyData.place}</div>
                        
                        <form class="meeting-form">
                            <input type="hidden" name="companyId" value="${companyData.id}">
                            <input type="hidden" name="companyName" value="${companyData.name}">
                            <button type="submit" class="search-meeting-btn button-78">Hier zur Seite</button>
                        </form>
                   
                        <form class="favorite-form">
                            <input type="hidden" name="companyId" value="${companyData.id}">
                            <input type="hidden" name="userId" value="${localStorage.getItem('userId')}">
                            <button type="submit" class="favorite-btn"></button>
                        </form>
                        
                    </div>`;
                companyElement.innerHTML = companyInfo;
                resultsDiv.appendChild(companyElement);
            });

            var favoriteForms = document.querySelectorAll('.favorite-form');
            favoriteForms.forEach(form => {
                form.addEventListener('submit', markAsFavorite);
            });

            var meetingForms = document.querySelectorAll('.meeting-form');
            meetingForms.forEach(form => {
                form.addEventListener('submit', searchMeeting);
            });

        } else {
            var resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '<p>Keine Firma gefunden.</p>';
        }
    })
    .catch(error => {
        console.error('Fehler:', error);
    });
});

function markAsFavorite(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('http://localhost:8080/apiMark/addOrDeleteFavourite', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            alert('Die Antwort ist nicht ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            alert('Firma erfolgreich als Favourit markiert!');
        } else {
            alert('Die Firma wurde als Favourit entfernt');
        }
    })
    .catch(error => {
        console.error('Fehler:', error);
    });
}

function searchMeeting(event) {
    event.preventDefault();

    var formData = new FormData(this);
    var companyId = formData.get('companyId');
    var companyName = formData.get('companyName');
    localStorage.setItem('companyId', companyId);
    localStorage.setItem('companyName', companyName);

    window.location.href = 'company.html';
}










