const loadFriends = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => displayFriends(data.results));
};

const displayFriends = (friends) => {
  const friendCOntainer = document.getElementById("friends-container");
  friendCOntainer.textContent = "";
  for (const friend of friends) {
    const div = document.createElement("div");
    div.classList.add("comment");
    div.innerHTML = `
    <img src="${friend.picture.large}" />
    <h2>Name : ${friend.name.title} ${friend.name.first} ${friend.name.last}</h2>
    <p>Email : ${friend.email} </p>
    <p>street : ${friend.location.street.number}, ${friend.location.street.name}</p>
    <p>city : ${friend.location.city} </p>
    <p>coordinates : N- ${friend.location.coordinates.latitude} S- ${friend.location.coordinates.longitude} </p>
    <p>timezone : GMS: ${friend.location.timezone.offset}, ${friend.location.timezone.description}</p>
    `;
    friendCOntainer.appendChild(div);
  }
};
