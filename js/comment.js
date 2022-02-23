const loadComments = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComment(data));
};

const displayComment = (comments) => {
  const commentContainer = document.getElementById("comment-container");
  for (const comment of comments) {
    const div = document.createElement("div");
    div.classList.add("comment");
    div.innerHTML = `
    <div onclick="loadComment(${comment.id})">
        <h2>Name: ${comment.name}</h2>
        <h4>Email: ${comment.email}</h4>
        <p>Comment: ${comment.body}</p>
    </div>
    `;
    commentContainer.appendChild(div);
  }
};

const loadComment = (commentId) => {
  const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCommet(data));
};

const displayCommet = (comment) => {
  const singleCommentContainer = document.getElementById("single-comment-show");
  singleCommentContainer.textContent = "";

  const div = document.createElement("div");
  div.classList.add("comment");
  div.innerHTML = `
        <h2>Name: ${comment.name}</h2>
        <h4>Email: ${comment.email}</h4>
        <p>Comment: ${comment.body}</p>
        `;
  singleCommentContainer.appendChild(div);
};
