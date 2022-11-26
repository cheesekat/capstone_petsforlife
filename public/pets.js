

// const petForm = document.querySelector('#pet-form');

// petForm.addEventListener('submit', fetchAnimals);

// function fetchAnimals(e) {
//     return "cat";
// }

 
(function(){
    var url = 'http://api.petfinder.com/v2/types?key=kCzRBtVZGzT2WFHPAsafmRrYknZy6dqBKLjB4BLgrcz1tTlrRt&shelterid=KY305&output=full&format=json';
    $.ajax({
        type : 'GET',
        data : {},
        url : url+'&callback=?' ,
        dataType: 'json',
        success : function(data) {              
            // stores result
            var result = '';

            var petfinder = data.petfinder;
            var infoHTML = '<ul>';
            infoHTML += '<li>';
            infoHTML += '<strong>Description</strong><br>';
            infoHTML += petfinder.pet.description['$t'];
            infoHTML += '</li>';

            infoHTML += '</li>';

            infoHTML += '</ul>';
            // return infoHTML;
            $('#petfinderInfo').html(infoHTML);

            // $('#petfinderInfo').html(petfinder.pet.description['$t']);
            // 
            console.log(petfinder);
        },
        error : function(request,error)
        {
            alert("Request: "+JSON.stringify(request));
        }
    });
});

