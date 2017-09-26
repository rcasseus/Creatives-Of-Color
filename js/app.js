// display modal window
function displayModal() {
  document.getElementById('modal1').style.display = "block"; // this worked!!!!!!
  console.log("Donate button clicked");
}

// close modal window
function closeModal(){
  document.getElementById("modal1").style.display = "none";
  console.log("Close button clicked");

}


// Getting all records and stuff from the database

    $.getJSON("https://spreadsheets.google.com/feeds/list/1mFtnlk9MjHz9smP07SG2uPJ8rkv8dt2_eDR5wqLkilg/od6/public/values?alt=json", function(data) {

      // var brucewayne = 'batman';

      // create a card
      var newCard = ' ';
      for (var i = 0; i < data.feed.entry.length; i++) {


        // variables
        var userName = (data.feed.entry[i]['gsx$name']['$t']); // this works
        var urlLink = (data.feed.entry[i]['gsx$personalwebsite']['$t']); // this works
        var about = (data.feed.entry[i]['gsx$about']['$t']); // this works
        var userImg = (data.feed.entry[i]['gsx$picture']['$t']); // this works
        var twitterHandle = (data.feed.entry[i]['gsx$twitterhandles']['$t']); // this works
        var userRole = (data.feed.entry[i]['gsx$role']['$t']);
        var userLoc = (data.feed.entry[i]['gsx$location']['$t']);


        // Card template
        newCard += '<div class="col s12 m4 l4 ">';
        newCard += '<div class=" card small hoverable">';
        newCard += ' <div class="card-image">';
        newCard += '<img src="'+userImg+'" alt="">';
        newCard += '</div>';
        newCard += '<div class="card-content">';
        newCard += '<p class="card-title"><a href="'+ twitterHandle+'" class="twitterHandle">' + userName + '</a></p>'; // this works
        newCard += '<p class="role">'+ userLoc +'</p>';
        newCard += '<p class="about">' + about + '</p>'; // this works
        newCard += '</div>';
        newCard += '<div class="card-action">';
        newCard += '<a href=" '+twitterHandle+' " target="_blank" class="websitelink twitterIcon"><img src="images/twitter.png" alt="twitter icon"></a>';
        newCard += '<a href="' + urlLink + ' " class="websitelink right" target="_blank">website</a>'; // this works
        newCard += '</div>';
        newCard += '</div>';
        newCard += '</div>';



      };

      document.getElementById('rightColContent').innerHTML = newCard;



    }); // End Get Json


// get date for copyright

function currentYear(){
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("copyRightYear").innerHTML = n;
};
