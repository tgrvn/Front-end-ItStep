import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congatulate',
  templateUrl: './congatulate.component.html',
  styleUrls: ['./congatulate.component.less']
})
export class CongatulateComponent implements OnInit {

  public handleClick(): void {
    this.routes.navigate(['/'])
  }

  constructor(public routes: Router) { }

  ngOnInit(): void {
  }

}
