function markAsFavorite(event) {
    event.preventDefault();

    var formData = new FormData(this);


    fetch('http://localhost:8080/apiMark/addOrDeleteFavourite', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (!response.ok) {
            alert('Die Antwort ist nicht ok');
        }
        return response.json();
    }).then(data => {
        if (data.success) {
            alert('Firma erfolgreich als Favorit markiert!');
            location.reload();
        } else {
            alert('Die Firma wurde als Favorit entfernt');
            location.reload();
        }
    }).catch(error => {
        console.error('Fehler:', error);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var userId = localStorage.getItem('userId');
    var formData = new FormData();
    formData.append('userId', userId);

    fetch('http://localhost:8080/apiFavourite/getFavourites', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (!response.ok) {
            throw new Error('Bad Request');
        }
        return response.json();
    }).then(data => {
        var favouriteSection = document.getElementById('Favourite');

        if (favouriteSection && data && data.length > 0) {
            data.forEach(favoriteData => {
                var companyElement = document.createElement('div');


                var companyInfo = `
                    <div class="company">
                        <div class="comLine" >${
                    favoriteData.name
                }</div>
                        <div class="comLine">${
                    favoriteData.job
                }</div>
                        <div class="comLine">${
                    favoriteData.place
                }</div>
                        <div class="comLine">
                        <form class="meeting-form">
                            <input type="hidden" name="companyId" value="${
                    favoriteData.id
                }">
                            <input type="hidden" name="companyName" value="${
                    favoriteData.name
                }">
                            <button type="submit" class="search-meeting-btn button">Hier zur Seite</button>
                        </form>
                        </div>
                            <form class="favorite-form">
                                <input type="hidden" name="companyId" value="${
                    favoriteData.id
                }">
                                <input type="hidden" name="userId" value="${
                    localStorage.getItem('userId')
                }">
                                <button type="submit" class="favorite-btn"></button>
                            </form>
                    
                  </div>
                `;

                companyElement.innerHTML = companyInfo;
                favouriteSection.appendChild(companyElement);
            });

            var favoriteForms = document.querySelectorAll('.favorite-form');
            favoriteForms.forEach(form => {
                form.addEventListener('submit', markAsFavorite);
            });

        } else {
            if (favouriteSection) {
                favouriteSection.innerHTML = '<p>Keine Favoriten gefunden.</p>';
            } else {
                console.error('Element mit ID "Favourite" nicht gefunden.');
            }
        }
        var meetingForms = document.querySelectorAll('.meeting-form');
        meetingForms.forEach(form => {
            form.addEventListener('submit', searchMeeting);
        });

    }).catch(error => {
        console.error('Fehler:', error);
    });
});


function searchMeeting(event) {
    event.preventDefault();

    var formData = new FormData(this);
    var companyId = formData.get('companyId');
    var companyName = formData.get('companyName');
    localStorage.setItem('companyId', companyId);
    localStorage.setItem('companyName', companyName);
    window.location.href = 'company.html';
}
