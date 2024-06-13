//signup function
const signUp = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#').value
    const userName = document.querySelector('#').value
    const password = document.querySelector('#').value

    if (email && userName && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ email, userName, password }),
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

    const email = document.querySelector('#').value
    const password = document.querySelector('#').value

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
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


document.querySelector('#').addEventListener('submit', signUp);
document.querySelector('#').addEventListener('submit', login);
document.querySelector('#').addEventListener('click', logout);