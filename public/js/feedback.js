const commentText = document.querySelector("#commentField").value;
const blogID = document.querySelector("#blogNum").textContent

const addComment = async () => {

   if (commentText && blogID) {
      const response = await fetch("/api/comment/", {
         method: "POST",
         body: JSON.stringify({ content: commentText, blog_id: blogID }),
         headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
         document.location.replace(`/blog/${blogID}`);
      } else {
         alert('Failed to create comment, try again');
      }
   }
}

const addLike = async () => {

   const response = await fetch(`/like/${blogID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
   });

   if (response.ok) {
      document.location.replace(`/blog/${blogID}`);
   } else {
      alert('Failed to like post, try again');
   }
}

document.querySelector('#addLike').addEventListener('click', addLike)
document.querySelector('#addComment').addEventListener('click', addComment)