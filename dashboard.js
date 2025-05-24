const content = document.getElementById('tab-content');

function switchTab(tabName) {
    if (tabName === 'appointments') {
        content.innerHTML = `<h2>Your Appointments</h2>
            <p>Display appointment list here with cancel buttons.</p>`;
    } else if (tabName === 'cases') {
        content.innerHTML = `<h2>Your Cases</h2>
            <p>Show lawyer name, start date, and legal documents.</p>`;
    } else if (tabName === 'book') {
        content.innerHTML = `<h2>Book Appointment</h2>
            <form>
                <label>Lawyer:</label>
                <select><option>Lawyer A</option></select><br>
                <label>Date:</label>
                <input type="date"><br>
                <label>Time Slot:</label>
                <input type="time"><br>
                <label>Reason:</label>
                <textarea></textarea><br>
                <button type="submit">Book</button>
            </form>`;
    } else if (tabName === 'payments') {
        content.innerHTML = `<h2>Payment History</h2>
            <p>Show invoice ID, total amount, date, status, method.</p>`;
    } else if (tabName === 'profile') {
        content.innerHTML = `<h2>Your Profile</h2>
            <form>
                <label>Full Name:</label><input type="text"><br>
                <label>Phone:</label><input type="text"><br>
                <label>Address:</label><input type="text"><br>
                <label>Change Password:</label><input type="password"><br>
                <button type="submit">Update</button>
            </form>`;
    }
}

// Load default tab
window.onload = () => switchTab('appointments');
