// Start Page
//API Kanye in container https://api.kanye.rest/

var kanyeQuote = function () {
    $.ajax({
        url: 'https://api.kanye.rest/',
        method: "GET"
    }).then(function (response) {
        var quote = response.quote
        console.log(response)
        $(".quoteKanye").text(quote)

    })
};

kanyeQuote()


//start button 
// hide first container and show search container

//Search Page
//Search on click
$("#searchBtn").on("click", function (event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    event.preventDefault();
        // This line will grab the text from the input box
        var city = $("#city").val().trim();
        // The City from the textbox is then added to our array
        var state = $("#stacked-state").val().trim();
        var postal = $("#zip").val();
        var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + city + "&by_state" + state + "&by_postal" + postal;
    
        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // calling renderButtons which handles the processing of our Cities array
            console.log(response);
    
        });
})
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
$(#startBtn).on("click", function(){
    $(#homePage).addClass
})
    //if error show "No Sway!" giphy


