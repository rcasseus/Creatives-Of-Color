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

    $.getJSON("https://spreadsheets.google.com/feeds/list/1mFtnlk9MjHz9smP07SG2uPJ8rkv8dt2_eDR5wqLkilg/1/public/values?alt=json", function(data) {


      // create a card
      var newCard = ' ';
      for (var i = 0; i < data.feed.entry.length; i++) {


        // variables
        var userName = (data.feed.entry[i]["gsx$enteryourfullname"]['$t']); // this works
        var urlLink = (data.feed.entry[i]["gsx$personalwebsiteurl"]['$t']); // this works
        var about = (data.feed.entry[i]["gsx$tellusaboutyourself"]['$t']); // this works
        var userImg = (data.feed.entry[i]["gsx$addaprofilepicture"]['$t']); // this works
        var twitterHandle = (data.feed.entry[i]["gsx$linktotwitteraccount"]['$t']); // this works
        var userRole = (data.feed.entry[i]["gsx$whatdoyou"]['$t']);
        var userLoc = (data.feed.entry[i]["gsx$whereareyoulocated"]['$t']);




        // Card template
        newCard += '<div class="col s12 m4 l4 ">';
        newCard += '<div class=" card small hoverable">';
        newCard += ' <div class="card-image">';
        newCard += '<img src='+userImg+' alt="">';
        newCard += '</div>';
        newCard += '<div class="card-content">';
        newCard += '<p class="card-title"><a href="'+ twitterHandle+'" class="twitterHandle"  target=”_blank”>' + userName + '</a></p>'; // this works
        newCard += '<p class="role">'+ userRole +'</p>';
        newCard += '<p class="about">' + about + '</p>'; // this works
        newCard += '<p class="role">' + userLoc + '</p>'; // this works
        newCard += '</div>';
        newCard += '<div class="card-action">';
        newCard += '<a href=" '+twitterHandle+' " target="_blank" class="websitelink twitterIcon"><img src="images/twitter.png" alt="twitter icon"></a>';
        newCard += '<a href="' + urlLink + ' " class="websitelink right" target="_blank"><i class="material-icons">open_in_new</i></a>'; // this works
        newCard += '</div>';
        newCard += '</div>';
        newCard += '</div>';


          // I want to know when a records field is false, then

          if (userRole == false) {
            console.log(twitterHandle);
          };

          // remove twitter icon if no value

          var twitterIcon1 = document.getElementsByClassName('twitterIcon');

                  if (twitterHandle == false) {
                    console.log(twitterHandle);

                    //document.getElementsByClassName("card-title").style.color = "#ff00ff";
                    //document.getElementById('demo').style.color = "#ff00ff";
                    //twitterIcon1.style.display = "none";
                    //document.getElementsByClassName('twitterIcon').style.visibility = "hidden";


                  }


      }; // End of Loop

      document.getElementById('rightColContent').innerHTML = newCard;



    }); // End Get Json
