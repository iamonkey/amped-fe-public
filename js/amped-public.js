    $.urlParam = function (name) {
      var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                        .exec(window.location.search);
  
      return (results !== null) ? results[1] || 0 : false;
    }
    
    $.checkForScoreField = function() {
     var score = $.trim($('#profile-score').val()); 
     if(score) {
       alert("Score: "+ score);
       return score;
     }
     
     return false;
    }
    
    $.addToScoreField = function(addScore) {
     alert("Score being added: " + addScore);
     
     var currentScore = parseInt($.checkForScoreField());
     var newScore = currentScore + addScore;
     if( currentScore ) {
       $('#profile-score').val(newScore);
       alert("Score: "+ $('#profile-score').val());	
     }
     return newScore;
    }
  
      
    jQuery(document).ready(function($) {
      var referrer = $.urlParam('referrer')
      if( referrer ) {
        Cookies.set("referrer", referrer, { expires: 7 }); 
        alert( "hello, you were refered by : " + referrer );
      }
      
      refCookie = Cookies.get("referrer");
      if( refCookie ) {
        alert("We would save your account with ref" + refCookie);
      }
      
      if( $("#referrer").length ) {
        $("#referrer").val(refCookie)
      }
      
      var score = $.checkForScoreField();
      var newScore = $.addToScoreField(5);
    });