/* 

Build a 3x3 grid of light cells (omitting the center cell)
where you can click on the cells to activate them, turning
them green. When all the cells have been activated,
they will be deactivated one by one in the reverse order
they were activated with a 300ms interval in between.

*/



import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-grid-lights',
  templateUrl: './grid-lights.component.html',
  styleUrl: './grid-lights.component.css',
})
export class GridLightsComponent {
  @ViewChild('containerRef') template: ElementRef<HTMLDivElement> | undefined;
  public stack: string[] = new Array();
  handleClick(event: MouseEvent) {
    const target = event.target as HTMLDivElement;
    if (target.className.includes('grid-cell')) {
      target.className += ' active';
      const eleId = target.innerHTML;
      this.stack.push(eleId);
    }
  }

  handleReset() {
    console.log(this.stack);
    this.stack.reverse().forEach((ele, index) => {
      const gridCell = this.template?.nativeElement.children[
        Number(ele) - 1
      ] as HTMLDivElement;
      console.log(this.template?.nativeElement.children[Number(ele) - 1]);
      setTimeout(() => {
        gridCell.className = gridCell.className.replace(' active', '');
      }, index * 300);
    });
  }
}
