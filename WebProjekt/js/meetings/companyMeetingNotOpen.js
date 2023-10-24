document.addEventListener('DOMContentLoaded', function () {
    var companyId = localStorage.getItem('companyId');
    var formData = new FormData();
    formData.append('companyId', companyId);

    fetch('http://localhost:8080/apiGetMeeting/showAllOtherMeetings', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (!response.ok) {
            throw new Error('Bad Request');
        }
        return response.json();
    }).then(data => {
        var declinedMeetings = document.getElementById('declinedMeetings');
        var acceptedMeetings = document.getElementById('acceptedMeetings');

        if (data && data.length > 0) {
            data.forEach(openData => {
                var meetingElement = document.createElement('div');
        
                var meetingInfo = ` <div class="meeting">
                   
                        <div class="line"> Termin </div>
                        <div class="line">Datum : <br> ${openData.date}</div>
                        <div class="line">Zeit: ${openData.time}</div>
                        <div class="line">UserMail: ${openData.userMail}</div>
                       
                </div>`;
        
                meetingElement.innerHTML = meetingInfo;
        
                // Änderung: Hier wird der Status von `openData` überprüft
                if (openData.status === "declined") {
                    declinedMeetings.appendChild(meetingElement);
                } else if (openData.status === "acceptet") {
                    acceptedMeetings.appendChild(meetingElement);
                    
                }
            });
        } else {
            console.log("Keine Daten gefunden.");
        }
    });
});
