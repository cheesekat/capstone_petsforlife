window.onload = function() {

    let key = "kCzRBtVZGzT2WFHPAsafmRrYknZy6dqBKLjB4BLgrcz1tTlrRt";
    let secret = "yaKlpvLvyOvT2tmVC4jccZK4JJpciqybwwBlMLeB";
    let token;

    // random id function
    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const randoms = randomNumber(59030000, 59039999);
    
  
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
        fetch(`https://api.petfinder.com/v2/animals?id=${randoms}&limit=1`, 
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
  
  
  
  // show the animal
  function showAnimals(pets) {
    const results = document.querySelector("#random");

    // loop through pets
    pets.forEach((pet) => {
      // create elements
      const div = document.createElement("div");
      
      div.innerHTML = `
          <div>
            <h4>${pet.name}</h4>
            <img src="${pet.photos[0] ? pet.photos[0].medium : "" }">
            <p class="text-secondary">${pet.breeds.primary}</p>
            <p>${pet.contact.address.city}, ${pet.contact.address.state} ${pet.contact.address.postcode}</p>
              <ul class="list-group">
                <li class="list-group-item">${pet.age}</li>
                ${pet.contact.phone
                      ? `<li class="list-group-item">${pet.contact.phone}</li>`
                      : ``
                }
                ${pet.contact.email
                    ? `<li class="list-group-item">${pet.contact.email}</li>`
                    : ``
                }
              </ul>
            </div>
          </div>
          `;
        results.appendChild(div);
    });
  } 
  