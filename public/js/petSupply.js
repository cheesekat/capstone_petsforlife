
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
      <li>Here is a list to get you started:</li><br>
        
        <form id="checklist">
          <input type="checkbox">
          <label for="dog1">Food - Dry and/or Wet</label><br>
          <input type="checkbox">
          <label for="dog2">Food Bowl</label><br>
          <input type="checkbox">
          <label for="dog3">Water Bowl</label><br>
          <input type="checkbox">
          <label for="dog4">Collar and Nametag</label><br>
          <input type="checkbox">
          <label for="dog5">Leash / Harness</label><br>
          <input type="checkbox">
          <label for="dog6">Brush</label><br>
          <input type="checkbox">
          <label for="dog7">Shampoo</label><br>
          <input type="checkbox">
          <label for="dog8">Toys</label><br>
          <input type="checkbox">
          <label for="dog9">Bed</label><br>
          <input type="checkbox">
          <label for="dog10">Crate</label><br>
          <input type="checkbox">
          <label for="dog11">Flea and Tick treatments</label><br>
          <input type="checkbox">
          <label for="dog12">NailFile</label><br>
          <input type="checkbox">
          <label for="dog13">Cleanup Bags</label><br>
          <input type="checkbox">
          <label for="dog14">Treats</label><br>
          <input type="checkbox">
          <label for="dog15">Cleaning Supplies</label><br><br>
          
        </form>
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
      <li>Here is a list to get you started:</li><br>
        <form id="checklist">
          <input type="checkbox">
          <label for="">Food</label><br>
          <input type="checkbox">
          <label for="">Food Bowl</label><br>
          <input type="checkbox">
          <label for="">Water Bowl or Automatic Waterer</label><br>
          <input type="checkbox">
          <label for="">Litter Box - 1 per cat</label><br>
          <input type="checkbox">
          <label for="">Litter</label><br>
          <input type="checkbox">
          <label for="">Litter Scoop</label><br>
          <input type="checkbox">
          <label for="">Brush</label><br>
          <input type="checkbox">
          <label for="">Toys</label><br>
          <input type="checkbox">
          <label for="">Scratching Post</label><br>
          <input type="checkbox">
          <label for="">Cat Tree / Perch</label><br>
          <input type="checkbox">
          <label for="">Catnip</label><br>
          <input type="checkbox">
          <label for="">Bed</label><br>
          <input type="checkbox">
          <label for="">Cleaning Supplies</label><br>
          <input type="checkbox">
          <label for="">Flea and Tick Treatment</label><br>
          <input type="checkbox">
          <label for="">Durable Carrier</label><br>
          <input type="checkbox">
          <label for="">Treats</label><br><br>
          
        </form>
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
        <li>Here is a list to get you started:</li><br>
          <form id="checklist">
            <input type="checkbox">
            <label for="">Cage</label><br>
            <input type="checkbox">
            <label for="">Cage Stand</label><br>
            <input type="checkbox">
            <label for="">Cage Cover</label><br>
            <input type="checkbox">
            <label for="">Litter / Bedding / Liners</label><br>
            <input type="checkbox">
            <label for="">Perches</label><br>
            <input type="checkbox">
            <label for="">Hide</label><br>
            <input type="checkbox">
            <label for="">Toys</label><br>
            <input type="checkbox">
            <label for="">Nesting Materials</label><br>
            <input type="checkbox">
            <label for="">Pellet Food</label><br>
            <input type="checkbox">
            <label for="">Seed Mix Food</label><br>
            <input type="checkbox">
            <label for="">Treats</label><br>
            <input type="checkbox">
            <label for="">Food Dish</label><br>
            <input type="checkbox">
            <label for="">Hanging Water Bottle</label><br>
            <input type="checkbox">
            <label for="">Spray Bottle for showers</label><br>
            <input type="checkbox">
            <label for="">Cleaning Supplies</label><br>
            <input type="checkbox">
            <label for="">Travel Cage Carrier</label><br><br>

         
          </form>
        </ul>`;
        
        break;
    
    case ("horse"):  //Horse
      output.innerHTML = `<ul id="horseLinks">
        <li><a href="https://www.tractorsupply.com/tsc/cms/horse-essentials" target="_blank">Tractor Supply</a></li><br>
        <li><a href="https://www.chewy.com/b/horse-1663" target="_blank">Chewy</a></li><br>
        <li><a href="https://www.entirelypets.com/horseproducts.html" target="_blank">Entirerly Pets</a></li><br>
        <li><a href="https://www.farmandfleet.com/horse-care-and-tack/" target="_blank">Farm and Fleet</a></li><br>
        <li><a href="https://www.petco.com/shop/en/petcostore/category/farm-and-feed/horse-shop" target="_blank">Petco</a></li><br>
        <li>Here is a list to get you started:</li><br>
        <form id="checklist">
          
          <input type="checkbox">
            <label for="">Halter & Lead Rope - x2</label><br>
            <input type="checkbox">
            <label for="">Saddle</label><br>
            <input type="checkbox">
            <label for="">Saddle Pads</label><br>
            <input type="checkbox">
            <label for="">Girth</label><br>
            <input type="checkbox">
            <label for="">Bridle</label><br>
            <input type="checkbox">
            <label for="">Reins</label><br>
            <input type="checkbox">
            <label for="">Bit</label><br>
            <input type="checkbox">
            <label for="">Stirrups / Leathers (sometimes come with saddle)</label><br>
            <input type="checkbox">
            <label for="">Curry Comb</label><br>
            <input type="checkbox">
            <label for="">Hard & Soft Brushes</label><br>
            <input type="checkbox">
            <label for="">Mane & Tail Comb</label><br>
            <input type="checkbox">
            <label for="">Hoof Pick</label><br>
            <input type="checkbox">
            <label for="">Shedding Blade</label><br>
            <input type="checkbox">
            <label for="">Water Scraper</label><br>
            <input type="checkbox">
            <label for="">Feed</label><br>
            <input type="checkbox">
            <label for="">Feed Bucket</label><br>
            <input type="checkbox">
            <label for="">Water Bucket</label><br>
            <input type="checkbox">
            <label for="">Pitchfork</label><br>
            <input type="checkbox">
            <label for="">Muck Tub</label><br>
            <input type="checkbox">
            <label for="">Broom</label><br>
            <input type="checkbox">
            <label for="">Salt Block Holdere</label><br>
            <input type="checkbox">
            <label for="">Shavings for Stall Floor</label><br>
            <input type="checkbox">
            <label for="">First Aid Kit</label><br>
            <input type="checkbox">
            <label for="">Seasonal Gear:</label><br>
            <input type="checkbox">
            <label for="">Flymask / Flysheet</label><br>
            <input type="checkbox">
            <label for="">Fly Spray</label><br>
            <input type="checkbox">
            <label for="">Blankets</label><br>
            <input type="checkbox">
            <label for="">Waterproof Sheet</label><br>
          
        </form>
      </ul>`;
            
      break;
      case("sheep"): output.innerHTML = `<ul>
        <li><a href="https://www.pbsanimalhealth.com/categories/sheep-goat?gclid=EAIaIQobChMIjYDpxaP_-wIViciUCR0Y9wu8EAAYAiAAEgKDxfD_BwE" target="_blank">PBS Animal Health</a></li><br>
        <li><a href="https://www.sullivansupply.com/product-category/sheep/" target="_blank">Sullivan Supply</a></li><br>
        <li><a href="https://www.jrgsupply.com/sheep-and-goat-supplies/" target="_blank">JRG Supply</a></li><br>
        <li><a href="https://www.jefferspet.com/sheep" target="_blank">Jeffers Pet</a></li><br>
        <li><a href="https://sydell.com/" target="_blank">Sydell</a></li><br>
        <li>Here is a list to get you started:</li><br>
        <form id="checklist">
          <input type="checkbox">
          <label for="">Food - Grass or Hay</label><br>
          <input type="checkbox">
          <label for="">Water Trough</label><br>
          <input type="checkbox">
          <label for="">Sheep Mineral</label><br>
          <input type="checkbox">
          <label for="">Treats</label><br>
          <input type="checkbox">
          <label for="">Outdoor Enclosure</label><br>
          <input type="checkbox">
          <label for="">Fencing</label><br>
          <input type="checkbox">
          <label for="">Shelter / Straw Bedding</label><br>
          <input type="checkbox">
          <label for="">Predator Control*</label><br>
          <input type="checkbox">
          <label for="">Medical Supplies</label><br>
          <input type="checkbox">
          <label for="">Hoof Trimmer</label><br>
          <input type="checkbox">
          <label for="">Shears or Clippers</label><br>
          <input type="checkbox">
          <label for="">Deworming and vaccination Administration Supplies</label><br>
          <input type="checkbox">
          <label for="">Lambing Supplies</label><br><br>

          
        </form>
      </ul>`;
      break;
      case("chicken"): output.innerHTML = `<ul>
          <li><a href="https://www.premier1supplies.com/c/poultry-supplies/" target="_blank">Premier1 Supplies</a></li><br>
          <li><a href="https://www.chewy.com/b/chicken-12992" target="_blank">Chewy</a></li><br>
          <li><a href="https://www.strombergschickens.com/poultry-supplies/" target="_blank">Stromberg's Chickens</a></li><br>
          <li><a href="https://www.cacklehatchery.com/product-category/poultry-supplies/" target="_blank">Cackle Hatchery</a></li><br>
          <li><a href="https://www.farmandhomesupply.com/livestock/chicken-poultry.html" target="_blank">Farm & Home Supply</a></li><br>
          <li>Here is a list to get you started:</li><br>
          <form id="checklist">
            <input type="checkbox">
            <label for="">Roost</label><br>
            <input type="checkbox">
            <label for="">Insulated Coop</label><br>
            <input type="checkbox">
            <label for="">Outdoor Enclosure Approx. 500SqFt</label><br>
            <input type="checkbox">
            <label for="">Nesting Boxes</label><br>
            <input type="checkbox">
            <label for="">Bedding</label><br>
            <input type="checkbox">
            <label for="">Fenced-in Run</label><br>
            <input type="checkbox">
            <label for="">Feeder</label><br>
            <input type="checkbox">
            <label for="">Waterer / Fresh Water</label><br>
            <input type="checkbox">
            <label for="">Feed</label><br>
            <input type="checkbox">
            <label for="">Feed Scoop</label><br>
            <input type="checkbox">
            <label for="">Compost Area</label><br>
            <input type="checkbox">
            <label for="">Egg Cartons if needed</label><br>
            <input type="checkbox">
            <label for="">Heat Light</label><br><br>

          </form>
        </ul>`;
      break;
      case("goat"): output.innerHTML = `<ul>
        <li><a href="https://www.chewy.com/b/goat-12732?gclid=EAIaIQobChMI-OTNoZz_-wIV__bjBx0BbwjuEAAYAiAAEgJf4PD_BwE" target="_blank">Chewy</a></li><br>
        <li><a href="https://www.valleyvet.com/c/livestock-supplies/goat-sheep-supplies.html" target="_blank">ValleyVet</a></li><br>
        <li><a href="https://thegoatshop.com/products" target="_blank">The Goat Shop</a></li><br>
        <li><a href="https://www.premier1supplies.com/goats/species.php" target="_blank">Premier1 Supplies</a></li><br>
        <li><a href="https://www.kvsupply.com/livestock/goat-supplies/16431/" target="_blank">KV Supply</a></li><br>
        <li>Here is a list to get you started:</li><br>
        <form id="checklist">
          <input type="checkbox">
          <label for="">Outdoor Enclosure</label><br>
          <input type="checkbox">
          <label for="">Shelter</label><br>
          <input type="checkbox">
          <label for="">Bedding Material</label><br>
          <input type="checkbox">
          <label for="">Collars / Nametags</label><br>
          <input type="checkbox">
          <label for="">Leashes</label><br>
          <input type="checkbox">
          <label for="">Food Dish</label><br>
          <input type="checkbox">
          <label for="">Water Bucket</label><br>
          <input type="checkbox">
          <label for="">Hay</label><br>
          <input type="checkbox">
          <label for="">Hay Storage</label><br>
          <input type="checkbox">
          <label for="">Black Sunflower Seeds</label><br>
          <input type="checkbox">
          <label for="">Goat Mineral</label><br>
          <input type="checkbox">
          <label for="">Baking Soda</label><br>
          <input type="checkbox">
          <label for="">Feeders</label><br>
          <input type="checkbox">
          <label for="">Hair Clippers</label><br>
          <input type="checkbox">
          <label for="">Brush</label><br>
          <input type="checkbox">
          <label for="">Hoof Trimmer</label><br>
          <input type="checkbox">
          <label for="">Medical Supplies</label><br><br>

          
        </form>
        </ul>`;
      break;
      case("pig"): output.innerHTML = `<ul>
        <li><a href="https://www.chewy.com/b/pig-12736" target="_blank">Chewy</a></li><br>
        <li><a href="https://www.farmtek.com/farm/supplies/cat1;ft_livestock_supplies;ft_hog_supplies.html" target="_blank">FarmTek</a></li><br>
        <li><a href="https://osbornelivestockequipment.com/online-store/" target="_blank">Osborne Livestock Equipment</a></li><br>
        <li><a href="https://www.jefferspet.com/swine/supplies/swine-show-supplies?gclid=EAIaIQobChMIkZzwwqj_-wIVBRTUAR2CQQY8EAAYBCAAEgKH-vD_BwE" target="_blank">Jeffers Pet</a></li><br>
        <li><a href="https://www.hogslat.com/online-web-store-shopping?gclid=EAIaIQobChMI5YGt26v_-wIVShXUAR07PwffEAAYAiAAEgLjK_D_BwE" target="_blank">Hog Slat</a></li><br>
        <li>Here is a list to get you started:</li><br>
        <form id="checklist">
          
          <input type="checkbox">
          <label for="">Outdoor Enclosure - 50sqft per pig</label><br>
          <input type="checkbox">
          <label for="">Hay or Straw</label><br>
          <input type="checkbox">
          <label for="">Shovel</label><br>
          <input type="checkbox">
          <label for="">Fresh Dirt Weekly</label><br>
          <input type="checkbox">
          <label for="">Feed</label><br>
          <input type="checkbox">
          <label for="">Feed Trough</label><br>
          <input type="checkbox">
          <label for="">Water Trough</label><br>
          <input type="checkbox">
          <label for=""Green leafy Vegetables></label><br>
          <input type="checkbox">
          <label for="">Limited amount apples, oranges</label><br>
          <input type="checkbox">
          <label for="">Toys</label><br>
          <input type="checkbox">
          <label for="">Shelter</label><br>
          <input type="checkbox">
          <label for=""></label><br>
          <input type="checkbox">
          <label for=""></label><br>
          <input type="checkbox">
          <label for=""></label><br>
          <input type="checkbox">
          <label for=""></label><br>
          <input type="checkbox">
          <label for=""></label><br>

          
        </form>
      </ul>`;
      break;
      case("guineapig"): output.innerHTML = `<ul>
        <li><a href="https://www.chewy.com/b/guinea-pig-10851" target="_blank">Chewy</a></li><br>
        <li><a href="https://www.petco.com/shop/en/petcostore/category/small-animal/guinea-pig-supplies" target="_blank">Petco</a></li><br>
        <li><a href="https://www.guineapigmarket.com/" target="_blank">Guinea Pig Market</a></li><br>
        <li><a href="https://shop.smallpetselect.com/pages/guinea-pig-products" target="_blank">Small Pet Select</a></li><br>
        <li><a href="https://www.petsmart.com/small-pet/small-pet-shops/guinea-pig/" target="_blank">PetSmart</a></li><br>
        <li>Here is a list to get you started:</li><br>
        <form id="checklist">
          <input type="checkbox">
          <label for="">Cage</label><br>
          <input type="checkbox">
          <label for="">Hutch</label><br>
          <input type="checkbox">
          <label for="">Bedding</label><br>
          <input type="checkbox">
          <label for="">Hide</label><br>
          <input type="checkbox">
          <label for="">Food Bowl</label><br>
          <input type="checkbox">
          <label for="">Hanging Waterbottle</label><br>
          <input type="checkbox">
          <label for="">Hay</label><br>
          <input type="checkbox">
          <label for="">Pellet Food</label><br>
          <input type="checkbox">
          <label for="">Veggies</label><br>
          <input type="checkbox">
          <label for="">Vitamin C Supplement</label><br>
          <input type="checkbox">
          <label for="">Brush</label><br>
          <input type="checkbox">
          <label for="">Parasite Prevention Treatment</label><br>
          <input type="checkbox">
          <label for="">Toys</label><br>
          <input type="checkbox">
          <label for="">Travel Carrying Cage</label><br>
          

          
        </form>
      </ul>`;
      break;
      case("hamster"): output.innerHTML = `<ul>
        <li><a href="https://www.chewy.com/b/hamster-10853" target="_blank">Chewy</a></li><br>
        <li><a href="https://www.petco.com/shop/en/petcostore/category/small-animal/hamster-supplies" target="_blank">Petco</a></li><br>
        <li><a href="https://www.petsmart.com/learning-center/small-pet-care/hamster-checklist/A0048.html" target="_blank">PetSmart</a></li><br>
        <li><a href="https://www.petsuppliesplus.com/categories/small-pet/shop-by-species/gerbils-hamsters#sort=relevancy&f:availablestores=[215]" target="_blank">Pet Supplies Plus</a></li><br>
        <li><a href="https://www.exoticnutrition.com/Departments/Shop-By-Pet/Hamster-and-Gerbil-Products.aspx" target="_blank">Exotic Nutrition</a></li><br>
        <li>Here is a list to get you started:</li><br>
        <form id="checklist">
          <input type="checkbox">
          <label for="">Cage</label><br>
          <input type="checkbox">
          <label for="">Bedding</label><br>
          <input type="checkbox">
          <label for="">Den / Hide</label><br>
          <input type="checkbox">
          <label for="">Hanging Waterbottle</label><br>
          <input type="checkbox">
          <label for="">Food Bowl</label><br>
          <input type="checkbox">
          <label for="">Pellet Food</label><br>
          <input type="checkbox">
          <label for="">Kale, Shredded Carrots & Zucchini</label><br>
          <input type="checkbox">
          <label for="">Toys</label><br>
          <input type="checkbox">
          <label for="">Sand Bath Box</label><br>
          <input type="checkbox">
          <label for="">Exercise Ball / Playpen</label><br>
          <input type="checkbox">
          <label for="">Exercise Wheel</label><br>
          <input type="checkbox">
          <label for="">Nesting Material</label><br>
          <input type="checkbox">
          <label for="">Carrying Cage</label><br>
          <input type="checkbox">
          <label for="">Treats</label><br>
          <input type="checkbox">
          <label for="">Brush</label><br>
          <input type="checkbox">
          <label for="">Chew Sticks</label><br>

      
        </form>
      </ul>`;
      break;
      case("rat"): output.innerHTML = `<ul>
      <li><a href="https://www.exoticnutrition.com/Departments/Shop-By-Pet/Rat-Products.aspx" target="_blank">Exotic Nutrition</a></li><br>
      <li><a href="https://www.petsmart.com/small-pet/small-pet-shops/rat-and-mouse/" target="_blank">PetSmart</a></li><br>
      <li><a href="https://www.ratwarehouse.com/" target="_blank">The Rat Warehouse</a></li><br>
      <li><a href="https://www.petco.com/shop/en/petcostore/category/small-animal/rat-mouse-supplies" target="_blank">Petco</a></li><br>
      <li><a href="https://www.chewy.com/b/rat-10854" target="_blank">Chewy</a></li><br>
      <li>Here is a list to get you started:</li><br>
        <form id="checklist">
          <input type="checkbox">
          <label for="">Cage</label><br>
          <input type="checkbox">
          <label for="">Bedding</label><br>
          <input type="checkbox">
          <label for="">Food Bowl</label><br>
          <input type="checkbox">
          <label for="">Hanging Waterbottle</label><br>
          <input type="checkbox">
          <label for="">Food</label><br>
          <input type="checkbox">
          <label for="">Hide / House</label><br>
          <input type="checkbox">
          <label for="">Toys</label><br>
          <input type="checkbox">
          <label for="">Exercise Wheel</label><br>
          <input type="checkbox">
          <label for="">Ladder</label><br>
          <input type="checkbox">
          <label for="">Carrying Cage</label><br>
          <input type="checkbox">
          <label for="">SaltLick</label><br>

          
        </form>
      </ul>`;
      break;
      case("ferret"): output.innerHTML = `<ul>
      <li><a href="https://www.petco.com/shop/en/petcostore/category/small-animal/ferret-supplies" target="_blank">Petco</a></li><br>
      <li><a href="https://www.ferret.com/" target="_blank">Ferret.com</a></li><br>
      <li><a href="https://ferretdepot.com/" target="_blank">Ferret Depot</a></li><br>
      <li><a href="https://www.chewy.com/b/ferret-10852" target="_blank">Chewy</a></li><br>
      <li><a href="https://www.petsmart.com/small-pet/small-pet-shops/ferret/" target="_blank">PetSmart</a></li><br>
      <li>Here is a list to get you started:</li><br>
        <form id="checklist">
          <input type="checkbox">
          <label for="">Carrier</label><br>
          <input type="checkbox">
          <label for="">Cage</label><br>
          <input type="checkbox">
          <label for="">Bedding</label><br>
          <input type="checkbox">
          <label for="">Sleep Sack / Hide</label><br>
          <input type="checkbox">
          <label for="">Food Dish</label><br>
          <input type="checkbox">
          <label for="">Hanging Water Bottle / Water Dish for playing</label><br>
          <input type="checkbox">
          <label for="">Kibble</label><br>
          <input type="checkbox">
          <label for="">Toys</label><br>
          <input type="checkbox">
          <label for="">Litter Box</label><br>
          <input type="checkbox">
          <label for="">Non-Clumping Litter</label><br>
          <input type="checkbox">
          <label for="">Scooper</label><br>
          <input type="checkbox">
          <label for="">Nail Trimmer</label><br>
          <input type="checkbox">
          <label for="">Shampoo</label><br>
          <input type="checkbox">
          <label for="">Brush</label><br>
          <input type="checkbox">
          <label for="">First-Aid Kit</label><br>
          <input type="checkbox">
          <label for="">Hairball Remedies</label><br>
          <input type="checkbox">
          <label for="">Toothbrush & Toothpaste</label><br>
          <input type="checkbox">
          <label for="">Treats</label><br>

         
        </form>
      </ul>`;
      break;
      case("mouse"): output.innerHTML = `<ul>
      <li><a href="https://www.chewy.com/b/mouse-10855" target="_blank">Chewy</a></li><br>
      <li><a href="https://www.petco.com/shop/en/petcostore/category/small-animal/rat-mouse-supplies" target="_blank">Petco</a></li><br>
      <li><a href="https://wellbredonline.com/collections/mouse-mice" target="_blank">Well Bred</a></li><br>
      <li><a href="https://www.petsmart.com/small-pet/small-pet-shops/rat-and-mouse/" target="_blank">PetSmart</a></li><br>
      <li><a href="https://www.petmountain.com/category/small-pet/mice-rat-supplies" target="_blank">Pet Mountain</a></li><br>
      <li>Here is a list to get you started:</li><br>
        <form id="checklist">
          <input type="checkbox">
          <label for="">Cage</label><br>
          <input type="checkbox">
          <label for="">Bedding</label><br>
          <input type="checkbox">
          <label for="">Pellet Food</label><br>
          <input type="checkbox">
          <label for="">Food Dish</label><br>
          <input type="checkbox">
          <label for="">Hanging Waterbottle</label><br>
          <input type="checkbox">
          <label for="">Hide</label><br>
          <input type="checkbox">
          <label for="">Chew Toys</label><br>
          <input type="checkbox">
          <label for="">Treats</label><br>
          <input type="checkbox">
          <label for="">Exercise Wheel</label><br>
          <input type="checkbox">
          <label for="">Ladder / Climbing Furniture</label><br>
          <input type="checkbox">
          <label for="">Mineral Chews</label><br>
          <input type="checkbox">
          <label for="">Carrier</label><br>

        </form>
      </ul>`;
      break;

    

  
      case ("rabbit"):
        output.innerHTML = `<ul id="rabbitLinks">
        <li><a href="https://www.chewy.com/b/rabbit-10850" target="_blank">Chewy</a></li><br>
        <li><a href="https://www.petco.com/shop/en/petcostore/category/small-animal/rabbit-shop" target="_blank">Petco</a></li><br>
        <li><a href="https://www.allthingsbunnies.com/" target="_blank">All Things Bunnies</a></li><br>
        <li><a href="https://shop.smallpetselect.com/pages/rabbit-products" target="_blank">Small Pet Select</a></li><br>
        <li><a href="https://www.petsmart.com/learning-center/small-pet-care/what-youll-need-for-your-new-pet-rabbit/A0200.html" target="_blank">PetSmart</a></li><br>
        <li>Here is a list to get you started:</li><br>
          <form id="checklist">
            <input type="checkbox">
            <label for="">Enclosure</label><br>
            <input type="checkbox">
            <label for="">Hay</label><br>
            <input type="checkbox">
            <label for="">Pellet Food</label><br>
            <input type="checkbox">
            <label for="">Treats</label><br>
            <input type="checkbox">
            <label for="">Hide</label><br>
            <input type="checkbox">
            <label for="">Food Bowl</label><br>
            <input type="checkbox">
            <label for="">Water Bowl / Water Bottle</label><br>
            <input type="checkbox">
            <label for="">Wire Covers for exposed wires</label><br>
            <input type="checkbox">
            <label for="">Fencing</label><br>
            <input type="checkbox">
            <label for="">Pet Gate</label><br>
            <input type="checkbox">
            <label for="">Plastic Mat</label><br>
            <input type="checkbox">
            <label for="">Flexiable Scratcher Mats</label><br>
            <input type="checkbox">
            <label for="">Paper Based Litter</label><br>
            <input type="checkbox">
            <label for="">Litter Box</label><br>
            <input type="checkbox">
            <label for="">Litter Scoop</label><br>
            <input type="checkbox">
            <label for="">Cleaning Supplies</label><br>
            <input type="checkbox">
            <label for="">Durable Carrier</label><br>
            <input type="checkbox">
            <label for="">Nail Clipper</label><br>
            <input type="checkbox">
            <label for="">Brush</label><br>
            <input type="checkbox">
            <label for="">Toys</label><br>
  
            
          </form>
          
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
        <li>Here is a list to get you started:</li><br>
        <form id="checklist">
          <input type="checkbox">
          <label for="">Aquarium With Hood</label><br>
          <input type="checkbox">
          <label for="">Water Conditioner</label><br>
          <input type="checkbox">
          <label for="">Filter</label><br>
          <input type="checkbox">
          <label for="">Aquarium Heater</label><br>
          <input type="checkbox">
          <label for="">Air Pump</label><br>
          <input type="checkbox">
          <label for="">Substrate</label><br>
          <input type="checkbox">
          <label for="">Light</label><br>
          <input type="checkbox">
          <label for="">Water Test Strips</label><br>
          <input type="checkbox">
          <label for="">Food</label><br>
          <input type="checkbox">
          <label for="">Decoration / Plants / Gravel</label><br>
          <input type="checkbox">
          <label for="">Siphon</label><br>
          <input type="checkbox">
          <label for="">Thermometer</label><br>

          
        </form>
      </ul>`;
              
      break;
      case("turtle"): output.innerHTML = `<ul>
      <li><a href="https://myturtlestore.com/turtles-and-turtle-tank-supplies/" target="_blank">My Turtle Store</a></li><br>
      <li><a href="https://www.chewy.com/f/aquatic-turtle-supplies_c1025_f57v68207" target="_blank">Chewy</a></li><br>
      <li><a href="https://www.reptilesupplyco.com/72-wholesale-water-turtle-supplies" target="_blank">Reptile Supply Co</a></li><br>
      <li><a href="https://www.backwaterreptiles.com/turtles/turtle-supplies-for-sale.html" target="_blank">Backwater Reptiles</a></li><br>
      <li><a href="https://www.petco.com/shop/en/petcostore/category/reptile/turtle-supplies" target="_blank">Petco</a></li><br>
      <li>Here is a list to get you started:</li><br>
        <form id="checklist">
          <input type="checkbox">
          <label for="">Aquarium or Terrarium with screened lid</label><br>
          <input type="checkbox">
          <label for="">UV Bulb and Fixture</label><br>
          <input type="checkbox">
          <label for="">Basking Lamp</label><br>
          <input type="checkbox">
          <label for="">Aquarium Heater</label><br>
          <input type="checkbox">
          <label for="">Thermometer</label><br>
          <input type="checkbox">
          <label for="">Water Conditioner</label><br>
          <input type="checkbox">
          <label for="">Filter</label><br>
          <input type="checkbox">
          <label for="">Branches / Rocks / Dock</label><br>
          <input type="checkbox">
          <label for="">Non-Toxic Plants</label><br>
          <input type="checkbox">
          <label for="">Pellet Food</label><br>
          <input type="checkbox">
          <label for="">Live Food - Crickets, Mealworms, Waxworms</label><br>
          <input type="checkbox">
          <label for="">Siphon / Bucket</label><br>
          <input type="checkbox">
          <label for="">Cleaning Supplies</label><br>

          
        </form>
      </ul>`;
      break;
      case("snake"): output.innerHTML = `<ul>
      <li><a href="https://www.chewy.com/f/snake-supplies_c1025_f57v68209" target="_blank">Chewy</a></li><br>
      <li><a href="https://www.petco.com/shop/en/petcostore/category/reptile/snake-supplies" target="_blank">Petco</a></li><br>
      <li><a href="https://reptileslounge.com/collections/snake" target="_blank">Reptile's Lounge</a></li><br>
      <li><a href="https://www.joshsfrogs.com/snake-supplies.html" target="_blank">Josh's Frogs</a></li><br>
      <li><a href="https://reptilesupply.com/" target="_blank">Reptile Supply</a></li><br>
      <li>Here is a list to get you started:</li><br>
        <form id="checklist">
          <input type="checkbox">
          <label for="">Terrarium with Screened Lid & Secure Latches</label><br>
          <input type="checkbox">
          <label for="">Bedding</label><br>
          <input type="checkbox">
          <label for="">Hide</label><br>
          <input type="checkbox">
          <label for="">Water Dish</label><br>
          <input type="checkbox">
          <label for="">UV Light</label><br>
          <input type="checkbox">
          <label for="">Heat Lamp</label><br>
          <input type="checkbox">
          <label for="">Thermometer</label><br>
          <input type="checkbox">
          <label for="">Hygrometer</label><br>
          <input type="checkbox">
          <label for="">Non-Toxic Plants / Branches</label><br>
          <input type="checkbox">
          <label for="">Spray Bottle</label><br>
          <input type="checkbox">
          <label for="">Feeding Tank</label><br>
          <input type="checkbox">
          <label for="">Live Food - Mouse or Rat</label><br>
          <input type="checkbox">
          <label for="">Heating Pad / Rock</label><br>

          
        </form>
      </ul>`;
      break;
      case("lizard"): output.innerHTML = `<ul>
      <li><a href="https://reptilesupply.com/" target="_blank">Reptile Supply</a></li><br>
      <li><a href="https://www.chewy.com/b/reptile-1025" target="_blank">Chewy</a></li><br>
      <li><a href="https://www.petsmart.com/reptile/" target="_blank">PetSmart</a></li><br>
      <li><a href="https://www.reptilesupplyco.com/" target="_blank">Reptile Supply Co.</a></li><br>
      <li><a href="https://www.lllreptile.com/" target="_blank">LLL Reptile</a></li><br>
      <li>Here is a list to get you started:</li><br>
        <form id="checklist">
          <input type="checkbox">
          <label for="">Terrarium</label><br>
          <input type="checkbox">
          <label for="">Basking Lamp</label><br>
          <input type="checkbox">
          <label for="">UV Light</label><br>
          <input type="checkbox">
          <label for="">Thermometer</label><br>
          <input type="checkbox">
          <label for="">Hygrometer</label><br>
          <input type="checkbox">
          <label for="">Bedding</label><br>
          <input type="checkbox">
          <label for="">Hide</label><br>
          <input type="checkbox">
          <label for="">Rocks / Non Toxic Plants</label><br>
          <input type="checkbox">
          <label for="">Spray Bottle</label><br>
          <input type="checkbox">
          <label for="">Leafy Greens / Live Insects for Food</label><br>
          <input type="checkbox">
          <label for="">Heating Pad</label><br>

          
        </form>
      </ul>`;
      break;
      case("beardeddragon"): output.innerHTML = `<ul>
      <li><a href="https://reptilesupply.com/collections/bearded-dragons" target="_blank">Reptile Supply</a></li><br>
      <li><a href="https://www.petsmart.com/learning-center/reptile-care/bearded-dragon-checklist/A0078.html" target="_blank">PetSmart</a></li><br>
      <li><a href="https://reptileslounge.com/collections/bearded-dragon" target="_blank">Reptiles Lounge</a></li><br>
      <li><a href="https://www.chewy.com/b/bearded-dragon-13997" target="_blank">Chewy</a></li><br>
      <li><a href="https://www.petco.com/shop/en/petcostore/category/reptile/bearded-dragon-supplies" target="_blank">Petco</a></li><br>
      <li>Here is a list to get you started:</li><br>
        <form id="checklist">
          <input type="checkbox">
          <label for="">Vivarium</label><br>
          <input type="checkbox">
          <label for="">UV Light</label><br>
          <input type="checkbox">
          <label for="">Basking Lamp</label><br>
          <input type="checkbox">
          <label for="">Thermometer</label><br>
          <input type="checkbox">
          <label for="">Hygrometer</label><br>
          <input type="checkbox">
          <label for="">Food Bowl</label><br>
          <input type="checkbox">
          <label for="">Water bowl</label><br>
          <input type="checkbox">
          <label for="">Bathtub</label><br>
          <input type="checkbox">
          <label for="">Soft Toothbrush for Bathing</label><br>
          <input type="checkbox">
          <label for="">Feeding Bin</label><br>
          <input type="checkbox">
          <label for="">Hide</label><br>
          <input type="checkbox">
          <label for="">Live Cricket or Roach Food</label><br>
          <input type="checkbox">
          <label for="">Gut Loading Product for Live Food</label><br>
          <input type="checkbox">
          <label for="">Toys</label><br>

          
        </form>
      </ul>`;
      break;
      case("iguana"): output.innerHTML = `<ul>
      <li><a href="https://thetyedyediguana.com/reptile-supplies/" target="_blank">The Tye Dyed Iguana</a></li><br>
      <li><a href="https://www.reptilesupplyco.com/205-wholesale-reptile-supplies" target="_blank">Reptile Supply Co.</a></li><br>
      <li><a href="https://reptilesupply.com/collections/iguanas" target="_blank">Reptile Supply</a></li><br>
      <li><a href="https://reptileslounge.com/collections/iguana" target="_blank">Reptiles Lounge</a></li><br>
      <li><a href="https://www.petco.com/shop/en/petcostore/search?query=iguana" target="_blank">Petco</a></li><br>
      <li>Here is a list to get you started:</li><br>
        <form id="checklist">
          <input type="checkbox">
          <label for="">Cage</label><br>
          <input type="checkbox">
          <label for="">Light</label><br>
          <input type="checkbox">
          <label for="">Basking Lamp</label><br>
          <input type="checkbox">
          <label for="">Bedding</label><br>
          <input type="checkbox">
          <label for="">Hide</label><br>
          <input type="checkbox">
          <label for="">Food Bowl</label><br>
          <input type="checkbox">
          <label for="">Water Bowl</label><br>
          <input type="checkbox">
          <label for="">Hygrometer</label><br>
          <input type="checkbox">
          <label for="">Thermometer</label><br>
          <input type="checkbox">
          <label for="">Spray Bottle</label><br>
          <input type="checkbox">
          <label for="">Leafy Greens, Vegetables, Fruit</label><br>
          <input type="checkbox">
          <label for="">Heating Pad</label><br>
          <input type="checkbox">
          <label for="">Cleaning Supplies</label><br>

         
        </form>
      </ul>`;
      break;
      case("gecko"): output.innerHTML = `<ul>
      <li><a href="https://www.petco.com/shop/en/petcostore/category/reptile/leopard-gecko-supplies" target="_blank">Petco</a></li><br>
      <li><a href="https://reptileslounge.com/collections/gecko" target="_blank">Reptiles Lounge</a></li><br>
      <li><a href="https://www.petsmart.com/reptile/reptile-shop/gecko-and-lizard/#page_name=flyout&category=reptile&cta=gecko-lizard" target="_blank">PetSmart</a></li><br>
      <li><a href="https://www.chewy.com/b/gecko-100242" target="_blank">Chewy</a></li><br>
      <li><a href="https://reptilesupply.com/collections/leopard-geckos" target="_blank">Reptile Supply</a></li><br>
      <li>Here is a list to get you started:</li><br>
        <form id="checklist">
          <input type="checkbox">
          <label for="">Vivarium</label><br>
          <input type="checkbox">
          <label for="">Canopy</label><br>
          <input type="checkbox">
          <label for="">UV Light</label><br>
          <input type="checkbox">
          <label for="">Heat Lamp</label><br>
          <input type="checkbox">
          <label for="">Heating Pad / Rock</label><br>
          <input type="checkbox">
          <label for="">Thermometer</label><br>
          <input type="checkbox">
          <label for="">Live Insect Food</label><br>
          <input type="checkbox">
          <label for="">Gut loading product for live food</label><br>
          <input type="checkbox">
          <label for="">Feeding Rock</label><br>
          <input type="checkbox">
          <label for="">Water Dish</label><br>
          <input type="checkbox">
          <label for="">Hide</label><br>
          <input type="checkbox">
          <label for="">Decor</label><br>
          <input type="checkbox">
          <label for="">Calcium / Vitamin Supplements</label><br>
          <input type="checkbox">
          <label for="">Substrate</label><br>
        
        </form>
      </ul>`;
      break;

    // default:
    //   output.innerHTML =  `<ul id="links">
    //     <li><a href="https://www.purina.com/" target="_blank">Purina</a></li><br>
    //     <li><a href="https://www.chewy.com/" target="_blank">Chewy</a></li><br>
    //     <li><a href="https://www.petflow.com/" target="_blank">PetFlow</a></li><br>
    //     <li><a href="https://www.petsuppliesplus.com/online-ordering" target="_blank">Pet Supplies Plus</a></li><br>
    //     <li><a href="https://www.petco.com/shop/en/petcostore" target="_blank">Petco</a></li><br>
    //     <li><a href="https://www.entirelypets.com/suppliesplus.html" target="_blank">EntirelyPets</a></li>
    //   </ul>`;
    }
  }