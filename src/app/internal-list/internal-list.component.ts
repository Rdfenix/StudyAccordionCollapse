import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-list',
  templateUrl: './internal-list.component.html',
  styleUrls: ['./internal-list.component.scss'],
})
export class InternalListComponent implements OnInit {
  constructor() {}

  @Input() testeArray: any[] | undefined;

  ngOnInit(): void {}
}
