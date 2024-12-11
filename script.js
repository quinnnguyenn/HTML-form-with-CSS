document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const resultsDiv = document.getElementById('results');

    const firstName = urlParams.get('firstName');
    const email = urlParams.get('email');
    const siblings = urlParams.get('siblings');
    const birthday = urlParams.get('birthday');
    const animal = urlParams.getAll('animal').join(', ');
    const iceCream = urlParams.get('iceCream');
    const color = urlParams.get('color');
    const password = urlParams.get('password');

    resultsDiv.innerHTML = `
        <p>First Name: ${firstName}</p>
        <p>Email: ${email}</p>
        <p>Number of Siblings: ${siblings}</p>
        <p>Birthday: ${birthday}</p>
        <p>Favorite Animal: ${animal}</p>
        <p>Do you like ice cream?: ${iceCream}</p>
        <p>Favorite Color: ${color}</p>
        <p>Password: ${password}</p>
    `;
});