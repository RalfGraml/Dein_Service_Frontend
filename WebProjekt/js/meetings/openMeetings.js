document.addEventListener('DOMContentLoaded', function () {
    var userId = localStorage.getItem('userId');
    var formData = new FormData();
    formData.append('userId', userId);

    fetch('http://localhost:8080/apiGetMeeting/openMeeting', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (!response.ok) {
            throw new Error('Bad Request');
        }
        return response.json();
    }).then(data => {
        var accepptetMeetings = document.getElementById('openMeetings');

        if (accepptetMeetings && data && data.length > 0) {
            data.forEach(openData => {
                var meetingElement = document.createElement('div');


                var meetingInfo = ` <div class="meeting"> 
                <div class="line"> Termin </div>
                <div class="line">Bei :${openData.companyName} </div>
                 <div class="line">Mail: ${openData.userMail}</div>
                <div class="line">Datum : <br> ${openData.date}</div>
                <div class="line">Zeit: ${openData.time}</div>
            </div>
                `;

                meetingElement.innerHTML = meetingInfo;
                accepptetMeetings.appendChild(meetingElement);
            });

        } else {
            if (accepptetMeetings != null) {
               
            } else {
                console.error('keine Offenen Meetings gefunden');
            }
       
    }});
});
