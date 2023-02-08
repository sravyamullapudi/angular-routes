import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  heros: any[] = [ 'Superman', 'Batman', 'BatGirl', 'Robin', 'Flash'];
  showText!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.heros.push('');
  }

  toggleText(data: boolean) {
    this.showText = data;
  }
}
