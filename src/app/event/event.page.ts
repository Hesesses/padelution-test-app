import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import {
  IonBackButton,
  IonButtons, IonCol,
  IonContent, IonFooter, IonGrid,
  IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonRow,
  IonSegment, IonSegmentButton, IonTabBar, IonTabButton, IonTabs,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { playCircle, radio, library, search } from 'ionicons/icons';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonBackButton, IonSegment,
    IonSegmentButton, IonLabel,IonIcon,IonList, IonItem, IonItemGroup, IonItemDivider, IonGrid, IonRow, IonCol,
    IonFooter,IonTabs, IonTabBar, IonTabButton,
    CommonModule, FormsModule, RouterModule]
})
export class EventPage implements OnInit {

  constructor() {
    addIcons({ playCircle, radio, library, search });
  }

  ngOnInit() {
  }

}
