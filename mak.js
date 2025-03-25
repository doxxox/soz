document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Thank you for your message, " + name + "!");
    } else {
        alert("Please fill in all the fields.");
    }
});
