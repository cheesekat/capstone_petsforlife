const supply = document.getElementById("supplyForm");

supply.addEventListener("find", supplyLinks);


const animal = document.querySelector("#animalType").value;
const output = document.querySelector("#output");



function supplyLinks(animal) {
switch (animal) {
    case dog: 
    output.innerHTML += (`<ul id="dogLinks">
    <li><a href="https://www.purina.com/dogs">Purina</a></li><br></br>
    <li><a href="https://www.chewy.com/b/dog-288">Chewy</a></li><br></br>
    <li><a href="https://www.petflow.com/dog">PetFlow</a></li><br></br>
    <li><a href="https://www.petsuppliesplus.com/">Pet Supplies Plus</a></li><br></br>
    <li><a href="https://www.petco.com/shop/en/petcostore/category/dog">Petco</a></li><br></br>
    <li><a href="https://www.entirelypets.com/dogsupplies.html">EntirelyPets</a></li>
    </ul>`);
  
    break;
    case animal.cat:
    results.innerHTML =  (`<ul id="catLinks">
      <li><a href="https://www.purina.com/cats">Purina</a></li><br></br>
      <li><a href="https://www.chewy.com/b/cat-325">Chewy</a></li><br></br>
      <li><a href="https://www.petflow.com/cat">PetFlow</a></li><br></br>
      <li><a href="https://www.petsuppliesplus.com/">Pet Supplies Plus</a></li><br></br>
      <li><a href="https://www.petco.com/shop/en/petcostore/category/cat">Petco</a></li><br></br>
      <li><a href="https://www.entirelypets.com/catsupplies.html">EntirelyPets</a></li>
      </ul>`);
      
      break;
    case animal.bird:
        results.innerHTML = ` <ul id="birdLinks">
        <li><a href="https://www.tractorsupply.com/tsc/catalog/pet-bird">Tractor Supply</a></li><br></br>
        <li><a href="https://www.chewy.com/b/bird-941">Chewy</a></li><br></br>
        <li><a href="https://www.petflow.com/bird">PetFlow</a></li><br></br>
        <li><a href="https://www.petsuppliesplus.com/">Pet Supplies Plus</a></li><br></br>
        <li><a href="https://www.petco.com/shop/en/petcostore/category/bird">Petco</a></li><br></br>
        <li><a href="https://www.entirelypets.com/birdproducts.html">EntirelyPets</a></li>
        </ul>`;
        
        break;
    case animal.farm:
            results.innerHTML =  `  <ul id="farmLinks">
          <li><a href="https://www.tractorsupply.com/tsc/catalog/poultry-livestock">Tractor Supply</a></li><br></br>
          <li><a href="https://www.chewy.com/b/farm-animal-8403">Chewy</a></li><br></br>
          <li><a href="https://www.farmtek.com/farm/supplies/cat1;;ft_livestock_supplies.html">Farm Tek</a></li><br></br>
          <li><a href="https://www.farmandfleet.com/farm-and-livestock/">Farm and Fleet</a></li><br></br>
          <li><a href="https://www.petco.com/shop/en/petcostore/category/farm-and-feed">Petco</a></li><br></br>
          </ul>`;
          break;
    case animal.horse:
            results.innerHTML = `<ul id="horseLinks">
            <li><a href="https://www.tractorsupply.com/tsc/cms/horse-essentials">Tractor Supply</a></li><br></br>
            <li><a href="https://www.chewy.com/b/horse-1663">Chewy</a></li><br></br>
            <li><a href="https://www.entirelypets.com/horseproducts.html">Entirerly Pets</a></li><br></br>
            <li><a href="https://www.farmandfleet.com/horse-care-and-tack/">Farm and Fleet</a></li><br></br>
            <li><a href="https://www.petco.com/shop/en/petcostore/category/farm-and-feed/horse-shop">Petco</a></li><br></br>
            </ul>`;
            
            break;
            case animal.fish:
                results.innerHTML = `<ul id="fishLinks">
              <li><a href="https://www.tractorsupply.com/tsc/catalog/pet-fish">Tractor Supply</a></li><br></br>
              <li><a href="https://www.chewy.com/b/fish-885">Chewy</a></li><br></br>
              <li><a href="https://www.petflow.com/fish">PetFlow</a></li><br></br>
              <li><a href="https://www.petsuppliesplus.com/">Pet Supplies Plus</a></li><br></br>
              <li><a href="https://www.petco.com/shop/en/petcostore/category/fish">Petco</a></li><br></br>
              <li><a href="https://www.entirelypets.com/aquarium-supplies.html">EntirelyPets</a></li>
              </ul>`;
              
              break;
              case animal.reptile:
                results.innerHTML = ` <ul id="reptileLinks">
                <li><a href="https://www.tractorsupply.com/tsc/catalog/reptile">Tractor Supply</a></li><br></br>
                <li><a href="https://www.chewy.com/b/reptile-1025">Chewy</a></li><br></br>
                <li><a href="https://www.petflow.com/reptile">PetFlow</a></li><br></br>
                <li><a href="https://www.petsuppliesplus.com/">Pet Supplies Plus</a></li><br></br>
                <li><a href="https://www.petco.com/shop/en/petcostore/category/reptile">Petco</a></li><br></br>
                <li><a href="https://www.entirelypets.com/repprod.html">EntirelyPets</a></li>
                </ul>`;
                
                break;
                case animal.smallPet:
                    results.innerHTML = `<ul id="smallPetLinks">
                  <li><a href="https://www.tractorsupply.com/tsc/catalog/small-pet">Tractor Supply</a></li><br></br>
                  <li><a href="https://www.chewy.com/b/small-pet-977">Chewy</a></li><br></br>
                  <li><a href="https://www.petflow.com/small-pet">PetFlow</a></li><br></br>
                  <li><a href="https://www.petsuppliesplus.com/">Pet Supplies Plus</a></li><br></br>
                  <li><a href="https://www.petco.com/shop/en/petcostore/category/small-animal">Petco</a></li><br></br>
                  <li><a href="https://www.entirelypets.com/birandotpet.html">EntirelyPets</a></li>
                  </ul>`;
                  
                  break;
                  default:
                    // results.innerHTML =  `<ul id="links">
                    //     <li><a href="https://www.purina.com/">Purina</a></li><br></br>
                    //     <li><a href="https://www.chewy.com/">Chewy</a></li><br></br>
                    //     <li><a href="https://www.petflow.com/">PetFlow</a></li><br></br>
                    //     <li><a href="https://www.petsuppliesplus.com/online-ordering">Pet Supplies Plus</a></li><br></br>
                    //     <li><a href="https://www.petco.com/shop/en/petcostore">Petco</a></li><br></br>
                    //     <li><a href="https://www.entirelypets.com/suppliesplus.html">EntirelyPets</a></li>
                    // </ul>`
                    ;
    }
  }