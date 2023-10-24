document.getElementById('meetingRequest').addEventListener("submit",function(event){
    event.preventDefault();
    var formData=new FormData(this);
    var companyLog=localStorage.getItem('userId');
    
    if(companyLog){
    fetch('http://localhost:8080/apiGetMeeting/requestMeeting', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Anfrage wurde gesendet');
            
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
    
    });}else{alert("Diese Funktion ist dem Kunden vorbehalten.");}
});

