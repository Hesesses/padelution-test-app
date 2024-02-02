import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
