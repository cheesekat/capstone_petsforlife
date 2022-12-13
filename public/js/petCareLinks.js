function petCareLinks() {

    const animal = document.querySelector("#animalType").value;
    const output = document.querySelector("#output");

    switch (animal) {
        case ("dog"): //Dog
        output.innerHTML = (`
        <p>Pet Care for Dogs</p>
        <ul id="dogCareLinks">
        <li><a href="https://www.aspca.org/pet-care/dog-care" target="_blank">ASPCA Dogs</a></li><br>
        <li><a href="https://www.thesprucepets.com/dogs-4162034" target="_blank">The Spruce Pets Dogs</a></li><br>
        <li><a href="https://www.petmd.com/dog/breeds" target="_blank">PetMD Dogs</a></li><br>
      </ul>`);
      
        break;
        case ("cat"):  //Cat
        output.innerHTML =  (`<p>Pet Care for Cats</p>
        <ul id="catCareLinks">
          <li><a href="https://www.aspca.org/pet-care/cat-care" target="_blank">ASPCA Cats</a></li><br>
          <li><a href="https://www.thesprucepets.com/cats-4162124" target="_blank">The Spruce Pets Cats</a></li><br>
          <li><a href="https://www.petmd.com/cat/breeds" target="_blank">PetMD Cats</a></li><br>
          </ul>`);
          
          break;
        case ("bird"):  // bird
            output.innerHTML = `  <p>Pet Care for Birds</p>
            <ul id="birdCareLinks">
              <li><a href="https://www.petsmart.com/learning-center/search/?fdid=bird&isrefinedbyspecies=true" target="_blank">Pet Smart Birds</a></li><br>
              <li><a href="https://www.thesprucepets.com/birds-4162101" target="_blank">The Spruce Pets Birds</a></li><br>
              <li><a href="https://www.petmd.com/bird" target="_blank">PetMD Birds</a></li><br>
              </ul>`;
            
            break;
        case ("farm"):  //farm
                output.innerHTML =  ` <p>Pet Care for Barnyard Pets</p>
                <ul id="barnyardCareLinks">
                  <li><a href="https://livestock247.com/blog/2020/08/13/basic-livestock-care/" target="_blank">Livestock 24/7</a></li><br>
                  </ul>`;
              break;
        case ("horse"):  //Horse
                output.innerHTML = `<p>Pet Care for Horses</p>
                <ul id="horseCareLinks">
                  <li><a href="https://www.aspca.org/pet-care/horse-care" target="_blank">ASPCA Horses</a></li><br>
                  <li><a href="https://www.thesprucepets.com/horse-care-101-1886033" target="_blank">The Spruce Pets Horses</a></li><br>
                  <li><a href="https://www.petmd.com/horse/breeds" target="_blank">PetMD Horses</a></li><br>
                  </ul>`;
                
                break;
                case ("fish"):  //Fish
                    output.innerHTML = `<p>Pet Care for Fish</p>
                    <ul id="fishCareLinks">
                      <li><a href="https://www.petsmart.com/learning-center/search/?fdid=smallpet&isrefinedbyspecies=true" target="_blank">Pet Smart Fish</a></li><br>
                      <li><a href="https://www.thesprucepets.com/fish-and-aquariums-4162060" target="_blank">The Spruce Pets Fish</a></li><br>
                      <li><a href="https://www.petmd.com/" target="_blank">PetMD For Fish use Other Pets tab</a></li><br>
                      </ul>`;
                  
                  break;
                  case ("reptile"):  //Reptile
                    output.innerHTML = ` <p>Pet Care for Reptiles</p>
                    <ul id="reptileCareLinks">
                      <li><a href="https://www.petsmart.com/learning-center/reptile-care/" target="_blank">Pet Smart Reptiles</a></li><br>
                      <li><a href="https://www.thesprucepets.com/reptiles-and-amphibians-4162044" target="_blank">The Spruce Pets Reptiles</a></li><br>
                      <li><a href="https://www.petmd.com/reptile/species" target="_blank">PetMD Reptiles</a></li><br>
                      <li><a href="https://reptifiles.com/" target="_blank">Reptifiles</a></li><br>
                      </ul>`;
                    
                    break;
                    case ("smallPet"):  //Small Pet
                        output.innerHTML = `<p>Pet Care for Small Pets</p>
                        <ul id="smallPetCareLinks">
                          <li><a href="https://www.petsmart.com/learning-center/search/?fdid=smallpet&isrefinedbyspecies=true" target="_blank">Pet Smart Small Pets</a></li><br>
                          <li><a href="https://www.thesprucepets.com/small-pets-4162085" target="_blank">The Spruce Pets Small Pets</a></li><br>
                          <li><a href="https://www.petmd.com/" target="_blank">PetMD Use Other Tab</a></li><br>
                          </ul>`;
                      
                      break;
                      default:
                        output.innerHTML =  `<ul>
                        <li><a href="https://www.avma.org/resources-tools/pet-owners/petcare" target="_blank">American Veterinary Medical Association</a></li><br>
                        <li><a href="https://www.aspca.org/pet-care/general-pet-care" target="_blank">ASPCA</a></li><br>
                        <li><a href="https://pets.webmd.com/default.htm" target="_blank">Fetch By WebMD</a></li><br>
                        <li><a href="https://www.rspca.org.uk/adviceandwelfare/pets" target="_blank">RSPCA</a></li><br>
                        <li><a href="https://www.wikihow.com/Take-Care-of-Your-Pet" target="_blank">WikiHow - How to Take Care of Your Pet</a></li><br>
                        <li><a href="https://openmd.com/directory/veterinary" target="_blank">OpenMD.com</a></li><br>
                      </ul>`
                        ;
        }

}