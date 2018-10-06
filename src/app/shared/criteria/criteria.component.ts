import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'pm-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit {
  listFilter: string;
  @ViewChild('filterElement') filterElementRef:ElementRef;
  constructor() { }
  
  ngAfterViewInit():void{
    if(this.filterElementRef){
   this.filterElementRef.nativeElement.focus();
   }
  }

  ngOnInit() {
  }

}
