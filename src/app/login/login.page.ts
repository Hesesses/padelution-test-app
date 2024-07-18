import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {IonicModule, NavController} from "@ionic/angular";
import {environment} from "../../environments/environment";
import { GenericOAuth2 } from '@capacitor-community/generic-oauth2';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {StorageService} from "../services/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterLink]
})
export class LoginPage implements OnInit {

  private oauth2Options = {
    authorizationBaseUrl: environment.oauthAuthorizationUrl,
    accessTokenEndpoint: environment.oauthTokenUrl,
    scope: '',
    additionalParameters: {'prompt':'login'},
    appId: environment.oauthClientId,
    redirectUrl: environment.oauthWebRedirectUri,
    resourceUrl: environment.apiUrl +"v1/users/me",
    pkceEnabled: true,
    web: {
      appId: environment.oauthClientId,
      responseType: "code",
      redirectUrl: environment.oauthWebRedirectUri,
      windowOptions: "height=600,left=0,top=0"
    },
    android: {
      appId: environment.oauthClientId,
      responseType: "code", // if you configured a android app in google dev console the value must be "code"
      redirectUrl: "com.padelution.app:/" // package name from google dev console
    },
    ios: {
      appId: environment.oauthClientId,
      responseType: "code", // if you configured a ios app in google dev console the value must be "code"
      redirectUrl: "com.padelution.app:/" // Bundle ID from google dev console
    },
  };

  constructor(private storageService: StorageService,
              private authService: AuthService,
              private navCtrl: NavController) { }

  ngOnInit() {}


  login() {
    GenericOAuth2.authenticate(this.oauth2Options).then(response => {
      // console.log('OAuth success', response);
      this.authService.setCurrentUser({
        id: response['id'],
        firstname: response['firstname'],
        lastname: response['lastname'],
        profile_photo_url: response['profile_photo_url'],
        elo_rating: response['elo_rating'],
        token: response['access_token'],
        refresh_token: response['refresh_token'],
      })

      this.navCtrl.navigateRoot('/tabs', { animated: false });
    })
    .catch(reason => {
      console.error('OAuth rejected', reason);
    });
  }

}
