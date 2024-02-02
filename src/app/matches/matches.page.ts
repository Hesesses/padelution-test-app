import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButtons, IonChip,
  IonContent,
  IonHeader, IonItem, IonItemDivider, IonItemGroup, IonLabel,
  IonList, IonSegment, IonSegmentButton,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-matches',
  templateUrl: './matches.page.html',
  styleUrls: ['./matches.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonBackButton, IonList, IonItemGroup,
    IonToolbar, IonItemDivider, IonLabel, IonItem, IonSegment, IonSegmentButton, IonChip
    , CommonModule, FormsModule, RouterModule]
})
export class MatchesPage implements OnInit {

  selectedSegment:string = 'requests';
  constructor() { }

  ngOnInit() {
  }

  // segmentChanged(event:any) {
  //   this.selectedSegment = event.detail.value;
  // }

}