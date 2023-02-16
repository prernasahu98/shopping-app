import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Observable, Subject } from 'rxjs';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '780399688014-tphpf71iddm7d1i2uegl1dvl22kije7m.apps.googleusercontent.com',
  scope: 'openid profile email'
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  gmail = 'https://gmail.googleapis.com';

  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(oAuthConfig);
    oAuthService.logoutUrl = 'https://www.google.com/accounts/Logout';
    oAuthService.loadDiscoveryDocument().then(() => {
      oAuthService.tryLoginImplicitFlow().then(() => {
        if (!oAuthService.hasValidAccessToken()) {
          oAuthService.initLoginFlow()
        } else {
          oAuthService.loadUserProfile().then((userProfile) => {
            console.log(JSON.stringify(userProfile));
          })
        }
      })
    })
  }

  // emails(userId: string): Observable<any> {
  //   return this.httpClient.get(`${this.gmail}/gmail/v1/users/${userId}/messages`,
  //     { headers: this.authHeader() })
  // }

  // getMail(userId: string, mailId: string): Observable<any> {
  //   return this.httpClient.get(`${this.gmail}/gmail/v1/users/${userId}/messages/${mailId}`,
  //     { headers: this.authHeader() })
  // }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  signOut() {
    this.oAuthService.logOut();
  }

}
