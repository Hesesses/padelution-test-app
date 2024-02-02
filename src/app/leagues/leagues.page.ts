import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar} from "@ionic/angular/standalone";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.page.html',
  styleUrls: ['./leagues.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonBackButton,
    CommonModule, FormsModule, RouterModule]
})
export class LeaguesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
