import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-americano',
  templateUrl: './americano.page.html',
  styleUrls: ['./americano.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AmericanoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
