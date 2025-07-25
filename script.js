// Function to calculate age and play sound
function calculateAge() {
    let dob = document.getElementById('dob').value;
    if (dob === '') {
        alert("Please select your date of birth.");
        return;
    }

    let dobDate = new Date(dob);
    let currentDate = new Date();

    let ageYears = currentDate.getFullYear() - dobDate.getFullYear();
    let ageMonths = currentDate.getMonth() - dobDate.getMonth();
    let ageDays = currentDate.getDate() - dobDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let birthDay = daysOfWeek[dobDate.getDay()];

    document.getElementById('result').innerHTML =
        `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.<br>
         You were born on a ${birthDay}.<br>
         Current Date: ${currentDate.toDateString()}`;

    // Play sound on calculation
    let sound = document.getElementById('successSound');
    sound.play();
}

// Function to clear the form and result
function clearForm() {
    document.getElementById('dob').value = '';
    document.getElementById('result').innerHTML = '';
}

// Allow Enter key to trigger calculation
document.getElementById('dob').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        calculateAge();
    }
});
