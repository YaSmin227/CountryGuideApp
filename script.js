
$('#search-btn').click(function(){
    let countryName = $('#country-inp').val();
    $.ajax({
        method:'GET',
        url:`https://restcountries.com/v3.1/name/${countryName}?fullText=true`,
        success:function(response){
             result.innerHTML = `
            <img src="${response[0].flags.svg}" class="flag-img">
            <h2>${response[0].name.common}</h2>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Capital:</h4>
                    <span>${response[0].capital[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Continent:</h4>
                    <span>${response[0].continents[0]}</span>
                </div>
            </div>
             <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Population:</h4>
                    <span>${response[0].population}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Currency:</h4>
                    <span>${
                        // using Object.keys to reach to the dynamic key of inner object 
                        // using Object.keys(myobject)
                        
                        response[0].currencies[Object.keys(response[0].currencies)[0]].name}- ${Object.keys(response[0].currencies)[0]}</span>
                </div>
            </div>
             <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Common Languages:</h4>
                    <span>${Object.values(response[0].languages)
                     }
                   </span>
                </div>
            </div>
          `;
     
           
        },
        error:function(){
            if (countryName.length == 0) {
            result.innerHTML=(`<h3>The input field cannot be empty</h3>`) ;
            } else {
            result.innerHTML=(`<h3>Please enter a valid country name.</h3>`);
            }
        }
    })
})

 //  may use key instead of value in language
//  ${response[0].languages[Object.keys(response[0].languages)]}