import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-league',
  templateUrl: './league.page.html',
  styleUrls: ['./league.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LeaguePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
