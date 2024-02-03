import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader, IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonBackButton, IonList, IonLabel,
    CommonModule, FormsModule, RouterModule]
})
export class MatchPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
