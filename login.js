(function(){
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var db=firebase.database();
    var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
               
           k=authResult.user.uid;
           db.ref('users/'+k).set({

             score:0
           });

            return true;
            
            
           
          },
          uiShown: function() {
            
            document.getElementById('loader').style.display = 'none';
          }
        },
        
        signInFlow: 'popup',
        signInSuccessUrl: 'AA.html',
        signInOptions: [
          //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          //firebase.auth.GithubAuthProvider.PROVIDER_ID,
         firebase.auth.EmailAuthProvider.PROVIDER_ID,
         // firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
      
        tosUrl: 'AA.html'
      };
ui.start('#firebaseui-auth-container', uiConfig);

})()

