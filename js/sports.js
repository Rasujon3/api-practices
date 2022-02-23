const loadSports = () => {
  fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
    .then((res) => res.json())
    .then((data) => {
      if (data.sports.length > 0) {
        displaySports(data.sports);
      } else {
        document.getElementById("loader").style.display = "block";
      }
    });
};

const displaySports = (sports) => {
  console.log(sports.length);
  const sportsContainer = document.getElementById("sports-container");
  for (const sport of sports) {
    const div = document.createElement("div");
    div.classList.add("sports-container");
    div.innerHTML = `
    <img src="${sport.strSportThumb}" />
    <h2>Sport Name: ${sport.strSport}</h2>
    <p>Description: ${sport.strSportDescription}</p>
    `;
    sportsContainer.appendChild(div);
  }
};

loadSports();
