document.getElementById('uploadPicture').addEventListener('submit', function(event) {
    event.preventDefault();

    var companyId = document.querySelector('[name="companyId"]').value;
    var imageFile = document.querySelector('[name="imageFile"]').files[0];

    var formData = new FormData();
    formData.append('companyId', companyId);
    formData.append('imageFile', imageFile);

    fetch('http://localhost:8080/apiCompanyPicture/uploadImage', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
       alert(data);
       location.reload();
    })
    .catch(error => {
       aler('Fehler:', error);
    });
}); 

document.getElementById('uploadBackroundPicture').addEventListener('submit', function(event) {
    event.preventDefault();

    var companyId = document.querySelector('[name="companyId"]').value;
    var imageFile = document.querySelector('[name="imageFile2"]').files[0];

    var formData = new FormData();
    formData.append('companyId', companyId);
    formData.append('imageFile', imageFile);

    fetch('http://localhost:8080/apiCompanyPicture/uploadBackroundImage', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        location.reload();
    })
    .catch(error => {
        alert('Fehler:', error);
    });
}); 
