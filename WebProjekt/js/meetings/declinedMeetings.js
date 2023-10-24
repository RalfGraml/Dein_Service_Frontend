document.addEventListener('DOMContentLoaded', function () {
    var userId = localStorage.getItem('userId');
    var formData = new FormData();
    formData.append('userId', userId);

    fetch('http://localhost:8080/apiGetMeeting/declineMeeting', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (!response.ok) {
            throw new Error('Bad Request');
        }
        return response.json();
    }).then(data => {
        var declinedMeetings = document.getElementById('declinedMeetings');

        if (declinedMeetings && data && data.length > 0) {
            data.forEach(declinedData => {
                var meetingElement = document.createElement('div');


                var meetingInfo = ` <div class="meeting"> 
                <div class="line"> Termin </div>
                <div class="line">Bei :${declinedData.companyName} </div>
                <div class="line">Bei :${declinedData.userMail} </div>
                <div class="line">Datum : <br> ${declinedData.date}  </div>
                <div class="line">Zeit:${declinedData.time}</div>
            </div>
                `;
                

                meetingElement.innerHTML = meetingInfo;
                declinedMeetings.appendChild(meetingElement);
            });

        } else {
            if (declinedMeetings != null) {
                favouriteSection.innerHTML = '<p>Keine Favoriten gefunden.</p>';
            } else {
                console.error('keine Absagen gefunden');
            }
       
    }});
});

