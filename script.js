// Start Page
    //API Kanye in container https://api.kanye.rest/

var kanyeQuote = function () {
    $.ajax({
        url: 'https://api.kanye.rest/',
        method: "GET"
<<<<<<< HEAD
    }).then(function(response) {
=======
    }).then(function (response) {
        var quote = response
>>>>>>> cfaa0815807114977f23336e15c992861e6c27dd
        console.log(response)
        quote.text()
    })
};

kanyeQuote()


    //start button 
        // hide first container and show search container

//Search Page
    //Search on click
        //get values from input boxes - input.value
        //append https://api.openbrewerydb.org/breweries? + &by_city=(city input box) + &by_state=(state input box) &by_postal=(zip code input box) 
        //then show results page

//Results Page
    //display search results with:
    // name: "Almanac Beer Company",
    // address: "651B W Tower Ave", City, State, Zip
    // phone: "4159326531",
    // website_url: "http://almanacbeer.com",

    //new search button on click to go back to search page

    //if error show "No Sway!" giphy
        
    
