import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import {IonicModule, NavController} from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterLink]

})
export class LoginPage {

  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private navCtrl: NavController) { }

  login() {
    let device_name = 'Web';
    this.authService.login(this.email, this.password, device_name).subscribe(
      data => {
        this.navCtrl.navigateRoot('/tabs', { animated: false });
      },
      error => {
        this.error = 'Invalid credentials';
      }
    );
  }
}
