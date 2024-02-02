import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import {IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar} from "@ionic/angular/standalone";

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonBackButton,
    CommonModule, FormsModule, RouterModule]
})
export class EventsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
