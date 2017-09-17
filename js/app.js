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



      // create a card
      var newCard = ' ';
      for (var i = 0; i < data.feed.entry.length; i++) {
        newCard += '<div class="card small hoverable">';
        newCard += ' <div class="card-image">';
        newCard += '<a href="https://twitter.com/umiworkshop?lang=en" target="_blank" data-type="website">';
        newCard += '</a>';
        newCard += '</div>';
        newCard += '<div class="card-content">';
        newCard += '<p class="card-title" data-type="name"><a href="#" data-type="twitterHandle">Jon Lewis</a></p>';
        newCard += '<p class="location" data-type="location">HNL / SFO / DC</p>';
        newCard += '<p class="" data-type="about">Designer + Feminist + Black Man. Founder of @CircaVictor.Formerly lead design @ElevateLabs (2014 App of the Year) @designerbridge Alum #aloha</p>';
        newCard += '</div>';
        newCard += '<div class="card-action">';
        newCard += '<a href="https://twitter.com/umiworkshop?lang=en" target="_blank" class="twitterIcon"><img src="Images/twitter.svg" alt=""></a>';
        newCard += '<a href="https://twitter.com/umiworkshop?lang=en" class="websitelink right" target="_blank" data-type="website">website</a>';
        newCard += '</div>';
        newCard += '</div>';
      }; // end loop
      document.getElementById('rightCol').innerHTML = newCard;









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

