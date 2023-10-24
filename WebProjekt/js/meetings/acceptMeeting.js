document.addEventListener('DOMContentLoaded', function () {
    var userId = localStorage.getItem('userId');
    var formData = new FormData();
    formData.append('userId', userId);
   

    fetch('http://localhost:8080/apiGetMeeting/acceptMeeting', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (!response.ok) {
            throw new Error('Bad Request');
        }
        return response.json();
    }).then(data => {
        var acceptedMeetings = document.getElementById('acceptedMeetings');
        
        if (acceptedMeetings && data&& data.length > 0) {
            data.forEach(acceptData => {
                console.log(data);
                var meetingElement = document.createElement('div');
            
                var meetingInfo = `
                    <div class="meeting"> 
                        <div class="line"> Termin </div>
                        <div class="line">Bei :${acceptData.companyName} </div>
                        <div class="line">Datum : <br> ${acceptData.date}</div>
                        <div class="line">Zeit: ${acceptData.time}</div>
                        <div class="line">Wo: ${acceptData.companyAdress}</div>
                    </div>
                `;
            
                meetingElement.innerHTML = meetingInfo;
                acceptedMeetings.appendChild(meetingElement);
            });

        } else {
          
            if (acceptedMeetings != null) {
                acceptedMeetings.innerHTML = '<p>Keine Termine gefunden.</p>';
            } else {
                console.error('keine Zusagen gefunden');
            }
       
    }});
});
