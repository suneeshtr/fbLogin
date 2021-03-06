  window.fbAsyncInit = function() {
    FB.init({
      appId      : '884142908295360', // App ID
      channelUrl : 'channel.html', // Channel File
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });
    
    
	FB.Event.subscribe('auth.authResponseChange', function(response) 
	{
 	 if (response.status === 'connected') 
  	{
  		getUserInfo();
  		document.getElementById("message").innerHTML =  "<br>Connected to Facebook";
  		//SUCCESS
  		
  	}	 
	else if (response.status === 'not_authorized') 
    {
    	document.getElementById("message").innerHTML =  "<br>Failed to Connect";

		//FAILED
    } else 
    {
    	document.getElementById("status").innerHTML = ""
    	document.getElementById("message").innerHTML =  "<br>Logged Out";

    	//UNKNOWN ERROR
    }
	});	
	
    };

  function getUserInfo() {
	    FB.api('/me', function(response) {
	    console.log(response)
	  	var str="<b>Name</b> : "+response.name+"<br>";
	  	  str +="<b>id: </b>"+response.id+"<br>";
	  	  str +="<b>Email:</b> "+response.email+"<br>";
	  	  document.getElementById("status").innerHTML=str;
	  	  	    
    });
    }

  // Load the SDK asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "https://connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));
