function validatePhoneNumber(input) {
    // Update the regex pattern to allow only specific characters at specific positions
    const cleaned = input.replace(/[^\d() -]/g, ''); // Remove all characters except digits, parentheses, space, and hyphen
    if (/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/.test(cleaned)) {
        // Regex pattern that matches valid US phone numbers
        return true;
    } else {
        return false;
    }
}


// Handle button click event
document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput === '') {
        alert('Please provide a phone number');
    } else {
        if (validatePhoneNumber(userInput)) {
            document.getElementById('results-div').innerText = `Valid US number: ${userInput}`;
        } else {
            document.getElementById('results-div').innerText = `Invalid US number: ${userInput}`;
        }
    }
});

// Handle clear button click event
document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('results-div').innerText = '';
});