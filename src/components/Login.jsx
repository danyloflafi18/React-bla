import React from 'react';

const SignIn = () => {

    const componentDidMount = () => {
        var API_KEY = 'AIzaSyAj0ZfphIklqW2MjBduu1_NmoqXap23lRQ'; // TODO: Update placeholder with desired API key.

        var CLIENT_ID = '604594895802-m9vu2v8gkfd3a1t44hm4lfc74jimqfkl.apps.googleusercontent.com'; // TODO: Update placeholder with desired client ID.

        // TODO: Authorize using one of the following scopes:
        //   'https://www.googleapis.com/auth/drive'
        //   'https://www.googleapis.com/auth/drive.file'
        //   'https://www.googleapis.com/auth/spreadsheets'
        var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

        window.gapi.client.init({
            'apiKey': API_KEY,
            'clientId': CLIENT_ID,
            'scope': SCOPE,
            'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        }).then(function () {
            window.gapi.auth2.getAuthInstance().isSignedIn.listen(signInStatus);
        });
    }

    function signInStatus() {
        console.log("Authentification is: " + window.gapi.auth2.getAuthInstance().isSignedIn.get());
    }

    function handleSignInClick(event) {
        window.gapi.auth2.getAuthInstance().signIn();
    }

    function handleSignOutClick(event) {
        window.gapi.auth2.getAuthInstance().signOut();
    }

    addEventListener('load', componentDidMount);
    addEventListener('click', componentDidMount);
    addEventListener('click', componentDidMount);


    return (
        <div>
            <p>Click here to sign in:</p>
            <button id="signin-button" onClick={handleSignInClick}>Sign in</button>
            <button id="signout-button" onClick={handleSignOutClick}>Sign out</button>
        </div>
    )
};

export default SignIn;