import { Component, ContentChild, ElementRef } from '@angular/core';
import { TestComponent } from 'src/app/test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @ContentChild('para') parEl: ElementRef;

  @ContentChild(TestComponent) testComp: TestComponent;

  GetData() {
    console.log(this.parEl.nativeElement);
    console.log(this.testComp);
  }


}
