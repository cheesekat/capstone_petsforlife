
function supplyLinks() {

  const animal = document.querySelector("#animalType").value;
  const output = document.querySelector("#output");

  switch (animal) {
    case ("dog"): //Dog
      output.innerHTML = (`<ul id="dogLinks">
      <li><a href="https://www.purina.com/dogs">Purina</a></li><br>
      <li><a href="https://www.chewy.com/b/dog-288">Chewy</a></li><br>
      <li><a href="https://www.petflow.com/dog">PetFlow</a></li><br>
      <li><a href="https://www.petsuppliesplus.com/">Pet Supplies Plus</a></li><br>
      <li><a href="https://www.petco.com/shop/en/petcostore/category/dog">Petco</a></li><br>
      <li><a href="https://www.entirelypets.com/dogsupplies.html">EntirelyPets</a></li>
      <li>
        <a href="images/dogs.png" download="dogchecklist">
          <img src="images/dogs.png" alt="dogchecklist" width=250px" height="350px">
        </a>
      </li>
    </ul>`);
  
    break;
    case ("cat"):  //Cat
    output.innerHTML =  (`<ul id="catLinks">
      <li><a href="https://www.purina.com/cats">Purina</a></li><br>
      <li><a href="https://www.chewy.com/b/cat-325">Chewy</a></li><br>
      <li><a href="https://www.petflow.com/cat">PetFlow</a></li><br>
      <li><a href="https://www.petsuppliesplus.com/">Pet Supplies Plus</a></li><br>
      <li><a href="https://www.petco.com/shop/en/petcostore/category/cat">Petco</a></li><br>
      <li><a href="https://www.entirelypets.com/catsupplies.html">EntirelyPets</a></li>
      <li>
          <a href="images/cats.png" download="catchecklist">
            <img src="images/cats.png" alt="catschecklist" width=250px" height="350px">
          </a>
        </li>
      </ul>`);
      
      break;
    case ("bird"):  // bird
        output.innerHTML = ` <ul id="birdLinks">
        <li><a href="https://www.tractorsupply.com/tsc/catalog/pet-bird">Tractor Supply</a></li><br>
        <li><a href="https://www.chewy.com/b/bird-941">Chewy</a></li><br>
        <li><a href="https://www.petflow.com/bird">PetFlow</a></li><br>
        <li><a href="https://www.petsuppliesplus.com/">Pet Supplies Plus</a></li><br>
        <li><a href="https://www.petco.com/shop/en/petcostore/category/bird">Petco</a></li><br>
        <li><a href="https://www.entirelypets.com/birdproducts.html">EntirelyPets</a></li>
        <li>
          <a href="images/birds.png" download="birdchecklist">
            <img src="images/birds.png" alt="birdchecklist" width=250px" height="350px">
          </a>
        </li>
        </ul>`;
        
        break;
    case ("farm"):  //farm
      output.innerHTML =  `  <ul id="farmLinks">
        <li><a href="https://www.tractorsupply.com/tsc/catalog/poultry-livestock">Tractor Supply</a></li><br>
        <li><a href="https://www.chewy.com/b/farm-animal-8403">Chewy</a></li><br>
        <li><a href="https://www.farmtek.com/farm/supplies/cat1;;ft_livestock_supplies.html">Farm Tek</a></li><br>
        <li><a href="https://www.farmandfleet.com/farm-and-livestock/">Farm and Fleet</a></li><br>
        <li><a href="https://www.petco.com/shop/en/petcostore/category/farm-and-feed">Petco</a></li>
        <li>
          <a href="images/barnyards.png" download="barnyardchecklist">
            <img src="images/barnyards.png" alt="barnyardchecklist" width=250px" height="350px">
          </a>
        </li>
      </ul>`;
      break;
    case ("horse"):  //Horse
      output.innerHTML = `<ul id="horseLinks">
        <li><a href="https://www.tractorsupply.com/tsc/cms/horse-essentials">Tractor Supply</a></li><br>
        <li><a href="https://www.chewy.com/b/horse-1663">Chewy</a></li><br>
        <li><a href="https://www.entirelypets.com/horseproducts.html">Entirerly Pets</a></li><br>
        <li><a href="https://www.farmandfleet.com/horse-care-and-tack/">Farm and Fleet</a></li><br>
        <li><a href="https://www.petco.com/shop/en/petcostore/category/farm-and-feed/horse-shop">Petco</a></li>
        <li>
          <a href="images/horses.png" download="horsechecklist">
            <img src="images/horses.png" alt="horsechecklist" width=250px" height="350px">
          </a>
        </li>
      </ul>`;
            
      break;
    // case ("fish"):  //Fish
    //   output.innerHTML = `<ul id="fishLinks">
    //     <li><a href="https://www.tractorsupply.com/tsc/catalog/pet-fish">Tractor Supply</a></li><br>
    //     <li><a href="https://www.chewy.com/b/fish-885">Chewy</a></li><br>
    //     <li><a href="https://www.petflow.com/fish">PetFlow</a></li><br>
    //     <li><a href="https://www.petsuppliesplus.com/">Pet Supplies Plus</a></li><br>
    //     <li><a href="https://www.petco.com/shop/en/petcostore/category/fish">Petco</a></li><br>
    //     <li><a href="https://www.entirelypets.com/aquarium-supplies.html">EntirelyPets</a></li>
    //   </ul>`;
              
    //   break;
    case ("reptile"):  //Reptile
      output.innerHTML = ` <ul id="reptileLinks">
        <li><a href="https://www.tractorsupply.com/tsc/catalog/reptile">Tractor Supply</a></li><br>
        <li><a href="https://www.chewy.com/b/reptile-1025">Chewy</a></li><br>
        <li><a href="https://www.petflow.com/reptile">PetFlow</a></li><br>
        <li><a href="https://www.petsuppliesplus.com/">Pet Supplies Plus</a></li><br>
        <li><a href="https://www.petco.com/shop/en/petcostore/category/reptile">Petco</a></li><br>
        <li><a href="https://www.entirelypets.com/repprod.html">EntirelyPets</a></li>
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
        <li><a href="https://www.tractorsupply.com/tsc/catalog/small-pet">Tractor Supply</a></li><br>
        <li><a href="https://www.chewy.com/b/small-pet-977">Chewy</a></li><br>
        <li><a href="https://www.petflow.com/small-pet">PetFlow</a></li><br>
        <li><a href="https://www.petsuppliesplus.com/">Pet Supplies Plus</a></li><br>
        <li><a href="https://www.petco.com/shop/en/petcostore/category/small-animal">Petco</a></li><br>
        <li><a href="https://www.entirelypets.com/birandotpet.html">EntirelyPets</a></li>
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
        <li><a href="https://www.purina.com/">Purina</a></li><br>
        <li><a href="https://www.chewy.com/">Chewy</a></li><br>
        <li><a href="https://www.petflow.com/">PetFlow</a></li><br>
        <li><a href="https://www.petsuppliesplus.com/online-ordering">Pet Supplies Plus</a></li><br>
        <li><a href="https://www.petco.com/shop/en/petcostore">Petco</a></li><br>
        <li><a href="https://www.entirelypets.com/suppliesplus.html">EntirelyPets</a></li>
      </ul>`;
    }
  }