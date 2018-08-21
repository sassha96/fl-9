let login = prompt('Enter your login, please: ', '');
if (login === '' || login === null) {
    alert('Canceled.');
} else if (login.length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols.')
} else if (login === 'User') {
    let password = prompt('Enter your password, please: ', '');
    if (password === '' || password === null) {
        alert('Canceled.');
    } else if (password === 'SuperUser') {
        if (new Date().getHours() < 20) {
            alert('Good day!')
        } else {
            alert('Good Evening!');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don\'t know you.');
}