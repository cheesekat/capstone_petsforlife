function petCareLinks() {

    const animal = document.querySelector("#animalType").value;
    const output = document.querySelector("#output");

    switch (animal) {
        case ("dog"): //Dog
        output.innerHTML = (`
        <p>Pet Care for Dogs</p>
        <ul id="dogCareLinks">
        <li><a href="https://www.aspca.org/pet-care/dog-care">ASPCA Dogs</a></li><br></br>
        <li><a href="https://www.thesprucepets.com/dogs-4162034">The Spruce Pets Dogs</a></li><br></br>
        <li><a href="https://www.petmd.com/dog/breeds">PetMD Dogs</a></li><br></br>
      </ul>`);
      
        break;
        case ("cat"):  //Cat
        output.innerHTML =  (`<p>Pet Care for Cats</p>
        <ul id="catCareLinks">
          <li><a href="https://www.aspca.org/pet-care/cat-care">ASPCA Cats</a></li><br></br>
          <li><a href="https://www.thesprucepets.com/cats-4162124">The Spruce Pets Cats</a></li><br></br>
          <li><a href="https://www.petmd.com/cat/breeds">PetMD Cats</a></li><br></br>
          </ul>`);
          
          break;
        case ("bird"):  // bird
            output.innerHTML = `  <p>Pet Care for Birds</p>
            <ul id="birdCareLinks">
              <li><a href="https://www.petsmart.com/learning-center/search/?fdid=bird&isrefinedbyspecies=true">Pet Smart Birds</a></li><br></br>
              <li><a href="https://www.thesprucepets.com/birds-4162101">The Spruce Pets Birds</a></li><br></br>
              <li><a href="https://www.petmd.com/bird">PetMD Birds</a></li><br></br>
              </ul>`;
            
            break;
        case ("farm"):  //farm
                output.innerHTML =  ` <p>Pet Care for Barnyard Pets</p>
                <ul id="barnyardCareLinks">
                  <li><a href="https://livestock247.com/blog/2020/08/13/basic-livestock-care/">Livestock 24/7</a></li><br></br>
                  </ul>`;
              break;
        case ("horse"):  //Horse
                output.innerHTML = `<p>Pet Care for Horses</p>
                <ul id="horseCareLinks">
                  <li><a href="https://www.aspca.org/pet-care/horse-care">ASPCA Horses</a></li><br></br>
                  <li><a href="https://www.thesprucepets.com/horse-care-101-1886033">The Spruce Pets Horses</a></li><br></br>
                  <li><a href="https://www.petmd.com/horse/breeds">PetMD Horses</a></li><br></br>
                  </ul>`;
                
                break;
                case ("fish"):  //Fish
                    output.innerHTML = `<p>Pet Care for Fish</p>
                    <ul id="fishCareLinks">
                      <li><a href="https://www.petsmart.com/learning-center/search/?fdid=smallpet&isrefinedbyspecies=true">Pet Smart Fish</a></li><br></br>
                      <li><a href="https://www.thesprucepets.com/fish-and-aquariums-4162060">The Spruce Pets Fish</a></li><br></br>
                      <li><a href="https://www.petmd.com/">PetMD For Fish use Other Pets tab</a></li><br></br>
                      </ul>`;
                  
                  break;
                  case ("reptile"):  //Reptile
                    output.innerHTML = ` <p>Pet Care for Reptiles</p>
                    <ul id="reptileCareLinks">
                      <li><a href="https://www.petsmart.com/learning-center/reptile-care/">Pet Smart Reptiles</a></li><br></br>
                      <li><a href="https://www.thesprucepets.com/reptiles-and-amphibians-4162044">The Spruce Pets Reptiles</a></li><br></br>
                      <li><a href="https://www.petmd.com/reptile/species">PetMD Reptiles</a></li><br></br>
                      <li><a href="https://reptifiles.com/">Reptifiles</a></li><br></br>
                      </ul>`;
                    
                    break;
                    case ("smallPet"):  //Small Pet
                        output.innerHTML = `<p>Pet Care for Small Pets</p>
                        <ul id="smallPetCareLinks">
                          <li><a href="https://www.petsmart.com/learning-center/search/?fdid=smallpet&isrefinedbyspecies=true">Pet Smart Small Pets</a></li><br></br>
                          <li><a href="https://www.thesprucepets.com/small-pets-4162085">The Spruce Pets Small Pets</a></li><br></br>
                          <li><a href="https://www.petmd.com/">PetMD Use Other Tab</a></li><br></br>
                          </ul>`;
                      
                      break;
                      default:
                        output.innerHTML =  `<ul>
                        <li><a href="https://www.avma.org/resources-tools/pet-owners/petcare">American Veterinary Medical Association</a></li><br>
                        <li><a href="https://www.aspca.org/pet-care/general-pet-care">ASPCA</a></li><br>
                        <li><a href="https://pets.webmd.com/default.htm">Fetch By WebMD</a></li><br>
                        <li><a href="https://www.rspca.org.uk/adviceandwelfare/pets">RSPCA</a></li><br>
                        <li><a href="https://www.wikihow.com/Take-Care-of-Your-Pet">WikiHow - How to Take Care of Your Pet</a></li><br>
                        <li><a href="https://openmd.com/directory/veterinary">OpenMD.com</a></li><br>
                      </ul>`
                        ;
        }

}