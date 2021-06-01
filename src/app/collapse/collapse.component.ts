import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
})
export class CollapseComponent implements OnInit {
  constructor() {}

  @ViewChildren('collapseSection') collapse: QueryList<ElementRef> | undefined;
  @ViewChildren('innerCollapse') innerCollapse:
    | QueryList<ElementRef>
    | undefined;

  teste: Array<any> = [
    {
      id: 1,
      name: 'Rudnei',
      city: 'campinas',
      things: {
        content: 'teste',
        contentArray: [
          { title: 'things1' },
          { title: 'things2' },
          { title: 'things3' },
        ],
      },
    },
    {
      id: 2,
      name: 'Marcos',
      city: 'campinas',
      things: {
        content: 'teste',
        contentArray: [
          { title: 'things4' },
          { title: 'things5' },
          { title: 'things6' },
        ],
      },
    },
    {
      id: 3,
      name: 'Ana',
      city: 'campinas',
      things: {
        content: 'teste',
        contentArray: [
          { title: 'things7' },
          { title: 'things8' },
          { title: 'things9' },
        ],
      },
    },
  ];

  testFunc(index: number): void {
    const element = this.collapse?.toArray()[index].nativeElement;

    if (element.style.maxHeight) {
      element.style.maxHeight = null;
    } else {
      element.style.maxHeight = `${element.scrollHeight}px`;
    }
  }

  innerFuncTest(index: number): void {
    const element = this.innerCollapse?.toArray()[index].nativeElement;

    element.style.height = !element.style.height
      ? `${element.scrollHeight}px`
      : null;
  }

  ngOnInit(): void {}
}
