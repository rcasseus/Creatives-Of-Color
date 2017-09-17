// display modal window

function displayModal() { // codekit ignore:line
  document.getElementById('demo').innerHTML = "Clicked"; // this worked!!!!!!
  document.getElementById('modal1').style.display = "block"; // this worked!!!!!!
  console.log("Donate button clicked");
};

function closeModal(){
  document.getElementById("modal1").style.display = "none";
  console.log("Close button clicked");

};





// Getting all records and stuff from the database

    $.getJSON("https://spreadsheets.google.com/feeds/list/1mFtnlk9MjHz9smP07SG2uPJ8rkv8dt2_eDR5wqLkilg/od6/public/values?alt=json", function(data) {

      // var brucewayne = 'batman';

      // create a card
      var newCard = ' ';
      for (var i = 0; i < data.feed.entry.length; i++) {


        // variables
        var userName = (data.feed.entry[i]['gsx$name']['$t']); // this works
        var urlLink = (data.feed.entry[i]['gsx$personalwebsite']['$t']); // this works


        newCard += '<div class="card small hoverable">';
        newCard += ' <div class="card-image">';
        newCard += '<a href="https://twitter.com/umiworkshop?lang=en" target="_blank" class="websitelink">';
        newCard += '</a>';
        newCard += '</div>';
        newCard += '<div class="card-content">';
        newCard += '<p class="card-title"><a href="#" class="twitterHandle">' + userName + '</a></p>'; // this works
        newCard += '<p class="role" ></p>';
        newCard += '<p class="about">' + data.feed.entry[i]['gsx$twitterhandles']['$t'] + '</p>'; // this works
        newCard += '</div>';
        newCard += '<div class="card-action">';
        newCard += '<a href="https://twitter.com/umiworkshop?lang=en" target="_blank" class="websitelink twitterIcon"><img src="Images/twitter.svg" alt=""></a>';
        newCard += '<a href="' + urlLink + ' " class="websitelink right" target="_blank">website</a>'; // this works
        newCard += '</div>';
        newCard += '</div>';



      };

      document.getElementById('rightCol').innerHTML = newCard;

      // newCard.getElementByClassName('about').html = ' batman';









      //   for (var i = 0; i < data.feed.entry.length; i++) {
      //     var cardImage = "<div class='card-image'>"+"<img src='images/sample-1.jpg'>"+"<span class='card-title'>" ;
      //     var cardContent =  "<div class='card-content'>";
      //
      //     $("").append
      //
      //     // $("#rightCol").append('<div class="card">' + cardImage, cardContent);
      //     // doesnt work $('.card').clone([i]).appendTo('#rightCol');
      //
      //     // need to assign data to correct sections
      //     // $('.card-title').text(data.feed.entry[i]['gsx$name']['$t']);
      //
      // } // end of for loop
      // // $('.card').append('<div class="card-content">' , '<div class="card-action">');
      // // $('.card-action').append('<a href="#">');

    }); // End Get Json
