
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    var nytApiKey = "028063169fcc268b78054332748930b0:18:72113403";

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    street = $("input#street").val();
    city = $("input#city").val();
    address = street + ", " + city;

    $greeting.text("So you want to live at " + address + "?")
    var bodyImage = "<img class='bgimg' src='https://maps.googleapis.com/maps/api/streetview?size=600x400&location=" + address + "'>";

    // load streetview
    $body.append(bodyImage);

    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);

// loadData();
