import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader, IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonBackButton, IonList, IonLabel,
    CommonModule, FormsModule, RouterModule]
})
export class ChatsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
