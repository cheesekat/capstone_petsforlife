// search by zip

const searchForm = document.getElementById("searchform");

searchForm.addEventListener("submit", fetchAnimals);

// fetch animals from api
function fetchAnimals(e) {
  e.preventDefault();

  // get input
  const animal = document.querySelector("#animal").value;
  const zip = document.querySelector("#zip").value;

  //fetch pets
  let key = "kCzRBtVZGzT2WFHPAsafmRrYknZy6dqBKLjB4BLgrcz1tTlrRt";
  let secret = "yaKlpvLvyOvT2tmVC4jccZK4JJpciqybwwBlMLeB";
  let token;

  // get authorization token
  fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    body: "grant_type=client_credentials&client_id=" + key + "&client_secret=" + secret,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      token = data.access_token;
    })
    .then(() => {
      // use token to fetch animals
      fetch(`https://api.petfinder.com/v2/animals?type=${animal}&location=${zip}`, 
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
        )
        .then((res) => res.json())
        .then((data) => showAnimals(data.animals));
    })
    .catch((err) => console.error(err));
}



// show listings of pets
function showAnimals(pets) {
  const results = document.querySelector("#searchresults");

  // clear results first
  results.innerHTML = "";

  // loop through pets
  pets.forEach((pet) => {
    
    // create elements
    const div = document.createElement("div");
    div.classList.add("card", "card-body", "mb-3");
    div.innerHTML = `
        <div class="row">
          <h3 class="pet">${pet.name}</h3>
          <img src="${pet.photos[0] ? pet.photos[0].medium : "" }">
          <p class="text-secondary">${pet.breeds.primary}</p>
          <p>${pet.contact.address.city}, ${pet.contact.address.state} ${pet.contact.address.postcode}</p>
            <ul class="list-group">
            <li class="list-group-item">Age: ${pet.age}</li>
              ${
                  pet.contact.phone
                    ? `<li class="list-group-item">Phone: ${pet.contact.phone}</li>`
                    : ``
              }
              ${
                pet.contact.email
                  ? `<li class="list-group-item">Email: ${pet.contact.email}</li>`
                  : ``
              }
              
            </ul>
          </div>
          
        </div>
        `;
      results.appendChild(div);
  });
}


// 
// contact form js - aboutus.html
// TODO: get email message

function sendMessage() {
  firstname = document.getElementById("firstname").value;
  lastname = document.getElementById("lastname").value;
  email = document.getElementById("email").value;
  message = document.getElementById("message").value;
  if (firstname == "" || lastname == "" || email == "" || message == "") {
    alert("please fill out the form.");
  } else {
    document.getElementById("confirm").innerHTML = "Thank You " + firstname + " " + lastname +"!";
  }
  }