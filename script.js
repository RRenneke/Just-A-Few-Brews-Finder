

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
    var state = []
    $.each($("#stacked-state option:selected"), function () {
        state.push($(this).val());
        console.log(state)
    })
    var postal = $("#zip").val();

    var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + city + "&by_state=" + state;
    console.log(queryURL)
    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // calling renderButtons which handles the processing of our Cities array
        console.log(response);
        // $("#inputPage").hide();
    });
});

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
$("#startBtn").on("click", function () {
    $("#homePage").hide();
    $("#inputPage").show();
});

//if error show "No Sway!" giphy

var statesList = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
function addSates() {


    // Looping through the array of cities
    for (var i = 0; i < statesList.length; i++) {

        // Then dynamicaly generating buttons for each city in the array.
        var a = $("<option>");
        // Adding a data-attribute with a value of the city at index i
        a.attr("data-name", statesList[i]);
        // Providing the button's text with a value of the city at index i
        a.text(statesList[i]);
        // Adding the button to the HTML
        $("#stacked-state").append(a);
    }
};

addSates();