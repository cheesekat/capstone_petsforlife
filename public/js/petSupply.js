
function supplyLinks() {

  const animal = document.querySelector("#animalType").value;
  const output = document.querySelector("#output");

  switch (animal) {
    case ("dog"): //Dog
      output.innerHTML = (`<ul id="dogLinks">
      <li><a href="https://www.purina.com/dogs" target="_blank">Purina</a></li><br>
      <li><a href="https://www.chewy.com/b/dog-288" target="_blank">Chewy</a></li><br>
      <li><a href="https://www.petflow.com/dog" target="_blank">PetFlow</a></li><br>
      <li><a href="https://www.petsuppliesplus.com/" target="_blank">Pet Supplies Plus</a></li><br>
      <li><a href="https://www.petco.com/shop/en/petcostore/category/dog" target="_blank">Petco</a></li><br>
      <li><a href="https://www.entirelypets.com/dogsupplies.html" target="_blank">EntirelyPets</a></li><br>
      <li>
        <a href="images/dogs.png" download="dogchecklist">
          <img src="images/dogs.png" alt="dogchecklist" width=250px" height="350px">
        </a>
      </li>
    </ul>`);
  
    break;
    case ("cat"):  //Cat
    output.innerHTML =  (`<ul id="catLinks">
      <li><a href="https://www.purina.com/cats" target="_blank">Purina</a></li><br>
      <li><a href="https://www.chewy.com/b/cat-325" target="_blank">Chewy</a></li><br>
      <li><a href="https://www.petflow.com/cat" target="_blank">PetFlow</a></li><br>
      <li><a href="https://www.petsuppliesplus.com/" target="_blank">Pet Supplies Plus</a></li><br>
      <li><a href="https://www.petco.com/shop/en/petcostore/category/cat" target="_blank">Petco</a></li><br>
      <li><a href="https://www.entirelypets.com/catsupplies.html" target="_blank">EntirelyPets</a></li><br>
      <li>
          <a href="images/cats.png" download="catchecklist">
            <img src="images/cats.png" alt="catschecklist" width=250px" height="350px">
          </a>
        </li>
      </ul>`);
      
      break;
    case ("bird"):  // bird
        output.innerHTML = ` <ul id="birdLinks">
        <li><a href="https://www.tractorsupply.com/tsc/catalog/pet-bird" target="_blank">Tractor Supply</a></li><br>
        <li><a href="https://www.chewy.com/b/bird-941" target="_blank">Chewy</a></li><br>
        <li><a href="https://www.petflow.com/bird" target="_blank">PetFlow</a></li><br>
        <li><a href="https://www.petsuppliesplus.com/" target="_blank">Pet Supplies Plus</a></li><br>
        <li><a href="https://www.petco.com/shop/en/petcostore/category/bird" target="_blank">Petco</a></li><br>
        <li><a href="https://www.entirelypets.com/birdproducts.html" target="_blank">EntirelyPets</a></li><br>
        <li>
          <a href="images/birds.png" download="birdchecklist">
            <img src="images/birds.png" alt="birdchecklist" width=250px" height="350px">
          </a>
        </li>
        </ul>`;
        
        break;
    case ("farm"):  //farm
      output.innerHTML =  `  <ul id="farmLinks">
        <li><a href="https://www.tractorsupply.com/tsc/catalog/poultry-livestock" target="_blank">Tractor Supply</a></li><br>
        <li><a href="https://www.chewy.com/b/farm-animal-8403" target="_blank">Chewy</a></li><br>
        <li><a href="https://www.farmtek.com/farm/supplies/cat1;;ft_livestock_supplies.html" target="_blank">Farm Tek</a></li><br>
        <li><a href="https://www.farmandfleet.com/farm-and-livestock/" target="_blank">Farm and Fleet</a></li><br>
        <li><a href="https://www.petco.com/shop/en/petcostore/category/farm-and-feed" target="_blank">Petco</a></li><br>
        <li>
          <a href="images/barnyards.png" download="barnyardchecklist">
            <img src="images/barnyards.png" alt="barnyardchecklist" width=250px" height="350px">
          </a>
        </li>
      </ul>`;
      break;
    case ("horse"):  //Horse
      output.innerHTML = `<ul id="horseLinks">
        <li><a href="https://www.tractorsupply.com/tsc/cms/horse-essentials" target="_blank">Tractor Supply</a></li><br>
        <li><a href="https://www.chewy.com/b/horse-1663" target="_blank">Chewy</a></li><br>
        <li><a href="https://www.entirelypets.com/horseproducts.html" target="_blank">Entirerly Pets</a></li><br>
        <li><a href="https://www.farmandfleet.com/horse-care-and-tack/" target="_blank">Farm and Fleet</a></li><br>
        <li><a href="https://www.petco.com/shop/en/petcostore/category/farm-and-feed/horse-shop" target="_blank">Petco</a></li><br>
        <li>
          <a href="images/horses.png" download="horsechecklist">
            <img src="images/horses.png" alt="horsechecklist" width=250px" height="350px">
          </a>
        </li>
      </ul>`;
            
      break;
    case ("fish"):  //Fish
      output.innerHTML = `<ul id="fishLinks">
        <li><a href="https://www.tractorsupply.com/tsc/catalog/pet-fish" target="_blank">Tractor Supply</a></li><br>
        <li><a href="https://www.chewy.com/b/fish-885" target="_blank">Chewy</a></li><br>
        <li><a href="https://www.petflow.com/fish" target="_blank">PetFlow</a></li><br>
        <li><a href="https://www.petsuppliesplus.com/" target="_blank">Pet Supplies Plus</a></li><br>
        <li><a href="https://www.petco.com/shop/en/petcostore/category/fish" target="_blank">Petco</a></li><br>
        <li><a href="https://www.entirelypets.com/aquarium-supplies.html" target="_blank">EntirelyPets</a></li><br>
      </ul>`;
              
      break;
    case ("reptile"):  //Reptile
      output.innerHTML = ` <ul id="reptileLinks">
        <li><a href="https://www.tractorsupply.com/tsc/catalog/reptile" target="_blank">Tractor Supply</a></li><br>
        <li><a href="https://www.chewy.com/b/reptile-1025" target="_blank">Chewy</a></li><br>
        <li><a href="https://www.petflow.com/reptile" target="_blank">PetFlow</a></li><br>
        <li><a href="https://www.petsuppliesplus.com/" target="_blank">Pet Supplies Plus</a></li><br>
        <li><a href="https://www.petco.com/shop/en/petcostore/category/reptile" target="_blank">Petco</a></li><br>
        <li><a href="https://www.entirelypets.com/repprod.html" target="_blank">EntirelyPets</a></li><br>
        <li>
          <a href="images/scalesfins1.png" download="scalesfinschecklist1">
            <img src="images/scalesfins1.png" alt="scalesfinschecklist1" width=250px" height="350px">
          </a>
          <a href="images/scalesfins2.png" download="scalesfinschecklist2">
            <img src="images/scalesfins2.png" alt="scalesfinschecklist2" width=250px" height="350px">
          </a>
          <a href="images/scalesfins3.png" download="scalesfinschecklist3">
            <img src="images/scalesfins3.png" alt="scalesfinschecklist3" width=250px" height="350px">
          </a>
        </li>
      </ul>`;
                
      break;
    case ("smallPet"):  //Small Pet
      output.innerHTML = `<ul id="smallPetLinks">
        <li><a href="https://www.tractorsupply.com/tsc/catalog/small-pet" target="_blank">Tractor Supply</a></li><br>
        <li><a href="https://www.chewy.com/b/small-pet-977" target="_blank">Chewy</a></li><br>
        <li><a href="https://www.petflow.com/small-pet" target="_blank">PetFlow</a></li><br>
        <li><a href="https://www.petsuppliesplus.com/" target="_blank">Pet Supplies Plus</a></li><br>
        <li><a href="https://www.petco.com/shop/en/petcostore/category/small-animal" target="_blank">Petco</a></li><br>
        <li><a href="https://www.entirelypets.com/birandotpet.html" target="_blank">EntirelyPets</a></li><br>
        <li>
          <a href="images/smallfurry1.png" download="smallfurrychecklist1">
            <img src="images/smallfurry1.png" alt="smallfurrychecklist1" width=250px" height="350px">
          </a>
          <a href="images/smallfurry2.png" download="smallfurrychecklist2">
            <img src="images/smallfurry2.png" alt="smallfurrychecklist2" width=250px" height="350px">
          </a>
          <a href="images/smallfurry3.png" download="smallfurrychecklist3">
            <img src="images/smallfurry3.png" alt="smallfurrychecklist3" width=250px" height="350px">
          </a>
        </li>
      </ul>`;
                  
      break;
    case ("rabbit"):
      output.innerHTML = `<ul id="rabbitLinks">
        <li>
          <a href="images/rabbits.png" download="rabbitchecklist">
            <img src="images/rabbits.png" alt="rabbitchecklist" width=250px" height="350px">
          </a>
        </li>
      </ul>`;
      break;
    default:
      output.innerHTML =  `<ul id="links">
        <li><a href="https://www.purina.com/" target="_blank">Purina</a></li><br>
        <li><a href="https://www.chewy.com/" target="_blank">Chewy</a></li><br>
        <li><a href="https://www.petflow.com/" target="_blank">PetFlow</a></li><br>
        <li><a href="https://www.petsuppliesplus.com/online-ordering" target="_blank">Pet Supplies Plus</a></li><br>
        <li><a href="https://www.petco.com/shop/en/petcostore" target="_blank">Petco</a></li><br>
        <li><a href="https://www.entirelypets.com/suppliesplus.html" target="_blank">EntirelyPets</a></li>
      </ul>`;
    }
  }