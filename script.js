// Start Page
//API Kanye in container https://api.kanye.rest/

var kanyeQuote = function () {
    $.ajax({
        url: 'https://api.kanye.rest/',
        method: "GET"
    }).then(function (response) {
        var quote = response.quote
        console.log(response)
        $(".quoteKanye").text("'" + quote + "' -Kanye")

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

    //hides resultsPage and noResultsPage at start of search
    $("#noResultsPage").hide()
    $(".resultsPage").hide()

    // This line will grab the text from the input box
    var city = $("#city").val().trim();
    // The City from the textbox is then added to our array
    var state = []
    $.each($("#stacked-state option:selected"), function () {
        state.push($(this).val());
        console.log(state)
    })
    var postal = $("#zip").val();

    var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + city + "&by_state=" + state + "&by_postal=" + postal;
    console.log(queryURL)
    // Creating an AJAX call for search
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response.length);
        
        //if function to display noResultsPage if no results found
        if (response.length === 0) {
            $("#noResultsPage").show();
        //displays resultsPage if there are matching results
        } else{
            $(".resultsPage").show()
            function addResult() {
    
                // empties previous results
                $("#result").empty();
    
                // Looping through the array of results
                for (var i = 0; i < response.length; i++) {
    
                    var brewName = response[i].name
                    var brewStreet = response[i].street
                    var brewCity = response[i].city
                    var brewState = response[i].state
                    var brewZip = response[i].postal_code
                    var brewPhone = response[i].phone
                    var brewAddress = brewStreet + ", " + brewCity + ", " + brewState + ", " + brewZip
                    var brewWeb = response[i].website_url
    
                    // Then dynamicaly adds div Name, Address, Phone and Website of each result.
                    var a = $("<div>");
                    var displayName = $("<div>").text(brewName);
                    var displayAddress = $("<div>").text(brewAddress);
                    var displayPhone = $("<div>").text("Phone: " + brewPhone);
                    var displayWeb = $("<a>").text(brewWeb);
                    //adds attribute to displayed <a> to make it link
                    var Web = $(displayWeb).attr("href", brewWeb);
                    // Appends result info
                    a.addClass("row");
                    a.append(displayName);
                    a.append(displayAddress);
                    a.append(displayPhone);
                    a.append(Web);
                    $("#result").append(a);
                }
            }
        }
        addResult()
    });
});


//new search button on click to go back to search page
$("#startBtn").on("click", function () {
    $("#homePage").hide();
    $("#inputPage").show();
});


//if error show "No Sway!" giphy

var statesList = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
function addSates() {

    // Looping through the array of States
    for (var i = 0; i < statesList.length; i++) {

        // Then dynamicaly generating <option> for each State
        var a = $("<option>");
        // Adding a data-attribute with a value of the State at index i
        a.attr("data-name", statesList[i]);
        // Providing text with a value of the State at index i
        a.text(statesList[i]);
        // Adding the State Name to list
        $("#stacked-state").append(a);
    }
};

addSates();