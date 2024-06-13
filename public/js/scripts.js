//signup function
const signUp = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value
    const name = document.querySelector('#username').value
    const password = document.querySelector('#password').value

    if (email && name && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ email, name, password }),
            headers: { 'Content-Type': 'application/json', },
        })

        if (response.ok) {
            document.location.replace('/profile')
        } else {
            alert('Failed to signup, please try again.')
        }
    }
};

//login function
const login = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value

    if (username && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json', },
        })

        if (response.ok) {
            document.location.replace('/profile')
        } else {
            alert('Failed to login, please try again.')
        }
    }
}

//logout function
const logout = async () => {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
    })

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to logout, please try again.')
    }
}


document.querySelector('#signUpBtn').addEventListener('click', signUp);
// document.querySelector('#loginBtn').addEventListener('click', login);
// document.querySelector('#').addEventListener('click', logout);