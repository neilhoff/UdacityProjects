String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

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

    $greeting.text("So you want to live at " + address.capitalizeFirstLetter() + "?")
    var bodyImage = "<img class='bgimg' src='https://maps.googleapis.com/maps/api/streetview?size=600x400&location=" + address + "'>";

    // load streetview
    $body.append(bodyImage);

    // load NYT articles
    var nytUrl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + city +"&api-key=" + nytApiKey;
    $.getJSON(nytUrl, function(data){
        var articles = [];

        // Get all the NYT documents from the returned JSON
        var r = data.response.docs;

        // create the list of articles
        $.each(r, function(key, val){
           articles.push("<li class='article'><a href='" + val.web_url + "'>" + val.headline.main + "</a><p>" + val.snippet + "</p>");
        });

        // Add the documents to the unordered list and set the header text
        $nytElem.html(articles);
        $nytHeaderElem.text("New York Times Articles about: " + city.capitalizeFirstLetter());
    }).error(function() {
        $nytHeaderElem.text("New York Times Articles Could Not Be Loaded");
        });

    return false;
};

$('#form-container').submit(loadData);

// loadData();
