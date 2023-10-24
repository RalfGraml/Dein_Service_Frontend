
var favoriteForms = document.querySelectorAll('.favorite-form');
            favoriteForms.forEach(form => {
                form.addEventListener('submit', markAsFavorite)});
var userId=localStorage.getItem('userId');

        function markAsFavorite(event) {
            event.preventDefault();
            if(userId != null){
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
                   
                } else {
                    alert('Die Firma wurde als Favorit entfernt');
                  
                }
            }).catch(error => {
                console.error('Fehler:', error);
            }        
            )}else{alert('Funktion kann nur vom user benutzt werden')}       };



