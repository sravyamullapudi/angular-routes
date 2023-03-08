import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-builtins',
  templateUrl: './pipe-builtins.component.html',
  styleUrls: ['./pipe-builtins.component.scss']
})
export class PipeBuiltinsComponent implements OnInit {

  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
