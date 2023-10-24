document.addEventListener('DOMContentLoaded', function() {
    const calendarElement = document.getElementById('calendar');
    const nextMonthButton = document.getElementById('nextMonth');
    const prevMonthButton = document.getElementById('prevMonth');

    let currentYear = 2023;
    let currentMonth = 9; // 9 represents October (months are zero-based)

    function createCalendar(year, month) {
        const today = new Date();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        let calendarHTML = `<h2>${getMonthName(month)} ${year}</h2>`;
        calendarHTML += '<table><tr>';

        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        daysOfWeek.forEach(day => {
            calendarHTML += `<th>${day}</th>`;
        });

        calendarHTML += '</tr><tr>';

        let day = 1;
        for (let i = 0; i < 42; i++) {
            if (i < firstDayOfMonth || day > daysInMonth) {
                calendarHTML += '<td></td>';
            } else {
                const date = new Date(year, month, day);
                const isPastDate = date < today; // Check if it's a past date
                const isCurrentDate = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear(); // Check if it's the current date
                calendarHTML += `<td class="calendar-day ${isPastDate ? 'past-date' : 'selectable'} ${isCurrentDate ? 'current-date' : ''}" data-day="${day}">${day}</td>`;
                day++;
            }

            if ((i + 1) % 7 === 0) {
                calendarHTML += '</tr><tr>';
            }
        }

        calendarHTML += '</tr></table>';
        calendarElement.innerHTML = calendarHTML;

        const calendarDays = document.querySelectorAll('.calendar-day');
        calendarDays.forEach(day => {
            day.addEventListener('click', handleDayButtonClick);
        });
    }

    function getMonthName(month) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[month];
    }

    function showNextMonth() {
        if (currentMonth === 11) {
            currentYear++;
            currentMonth = 0;
        } else {
            currentMonth++;
        }
        createCalendar(currentYear, currentMonth);
    }

    function showPrevMonth() {
        if (currentMonth === 0) {
            currentYear--;
            currentMonth = 11;
        } else {
            currentMonth--;
        }
        createCalendar(currentYear, currentMonth);
    }

    function handleDayButtonClick(event) {
        const clickedDay = event.target;
        if (!clickedDay.classList.contains('selectable')) return; // Ignoriere nicht wählbare Tage
        const day = Number(clickedDay.dataset.day);

        window.location.href = `time_capture.html?day=${day}&month=${currentMonth + 1}&year=${currentYear}`;
    }

    nextMonthButton.addEventListener('click', showNextMonth);
    prevMonthButton.addEventListener('click', showPrevMonth);

    createCalendar(currentYear, currentMonth);
});