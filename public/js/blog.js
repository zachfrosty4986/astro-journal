const newBlog = async (event) => {
    //adds a new blog
    event.preventDefault();

    const title = document.querySelector('#').value
    const content = document.querySelector('#').value

    if (title && content) {
        const response = await fetch('/api/blog', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
        })

        if (response.ok) {
            document.location.replace('/profile')
        } else {
            alert('Failed to create new post, please try again.')
        }
    }
}

//function to delete blog
document.querySelector('#').addEventListener('submit', newBlog);