import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { TestComponent } from 'src/app/test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @ContentChild('para') parEl: ElementRef;

  @ContentChild(TestComponent) testComp: TestComponent;

  @ContentChildren('para') allParaEl: QueryList<ElementRef>;

  @ContentChildren(TestComponent) allTestComp: QueryList<TestComponent>;

  GetData() {
    // console.log(this.parEl.nativeElement);
    // console.log(this.testComp);
    this.allParaEl.forEach((el) => {
      console.log(el.nativeElement);
    });

    this.allTestComp.forEach((el) => {
      console.log(el.name);
    })
  }
}
