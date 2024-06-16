const addComment = async () => {
   const commentText = document.querySelector("#commentField").value;
   const blogID = document.querySelector('#blogNum').value

   if (commentText && blogID) {
      const response = await fetch("/api/comment/", {
         method: "POST",
         body: JSON.stringify({ body: commentText, blog_id: blogID }),
         headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
         document.location.replace(`/blog/${blogID}`);
      } else {
         alert('Failed to create comment, try again');
      }
   }
}

document.querySelector('#addComment').addEventListener('click', addComment)