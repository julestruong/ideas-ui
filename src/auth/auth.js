import auth0 from 'auth0-js';

class Auth {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'julestruong.eu.auth0.com',
            clientID: 'Yrxupi0XGXXDiZ3GFYm2Z4Bfjl4WsSoO',
            redirectUri: 'http://localhost:8081/callback',
            audience: 'https://julestruong.eu.auth0.com/userinfo',
            responseType: 'token id_token',
            scope: 'openid profile email'
        });

        this.login = this.login.bind(this); 
        this.logout = this.logout.bind(this); 
        this.handleAuthentication  = this.handleAuthentication .bind(this); 
        this.isAuthenticated = this.isAuthenticated.bind(this); 
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                console.log("handleAuthentication", err);
            }
        });
    }

    setSession(authResult) {
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }
    
    
    login() {
        this.auth0.authorize();
    }

    logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    }

    isAuthenticated() {
        // Check whether the current time is past the 
        // access token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }
}

export default Auth;
