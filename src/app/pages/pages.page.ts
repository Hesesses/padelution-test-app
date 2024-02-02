import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar} from "@ionic/angular/standalone";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonBackButton,
    CommonModule, FormsModule, RouterModule]
})
export class PagesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
