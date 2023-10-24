document.addEventListener('DOMContentLoaded', function () {
    var companyId = localStorage.getItem('companyId');
    var formData = new FormData();
    formData.append('companyId', companyId);

    fetch('http://localhost:8080/apiGetMeeting/openMeetingCompany', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (!response.ok) {
            throw new Error('Bad Request');
        }
        return response.json();
    }).then(data => {
        var acceptedMeetings = document.getElementById('openMeetings');

        if (acceptedMeetings && data && data.length > 0) {
            data.forEach(openData => {
                var meetingElement = document.createElement('div');

                var meetingInfo = ` <div class="meeting">
                    <form class="meetingRequest" method=post> 
                        <div class="line"> Termin </div>
                        <div class="line">Datum : <br> ${openData.date}</div>
                        <div class="line">Zeit: ${openData.time}</div>
                        <div class="line">UserMail: ${openData.userMail}</div>
                        <input type="hidden" name="meetingId" value="${openData.meetingId}">
                        <button class="button-40  accept" type="submit">Termin annehmen</button>
                        <button class="button-40  decline" type="submit">Termin ablehnen</button>
                    </form>
                </div>`;

                meetingElement.innerHTML = meetingInfo;
                acceptedMeetings.appendChild(meetingElement);

                // Hinzufügen des Event Listeners für die Buttons
                meetingElement.querySelector('.accept').addEventListener("click", function(event) {
                    event.preventDefault(); // Verhindert das Standardverhalten des Formulars

                    var formData = new FormData(this.closest('form'));
                    formData.append('action', 'accept'); // Füge die Aktion zum FormData hinzu

                    fetch('http://localhost:8080/apiGetMeeting/acceptMeetingCompany', {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            alert('Meeting akzeptiert');
                        } else {
                            alert(data.message);
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                });

                meetingElement.querySelector('.decline').addEventListener("click", function(event) {
                    event.preventDefault(); // Verhindert das Standardverhalten des Formulars

                    var formData = new FormData(this.closest('form'));
                    formData.append('action', 'decline'); // Füge die Aktion zum FormData hinzu

                    fetch('http://localhost:8080/apiGetMeeting/declineMeetingCompany', {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            alert('Meeting abgelehnt');
                        } else {
                            alert(data.message);
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                });
            });
        }
    });
});


