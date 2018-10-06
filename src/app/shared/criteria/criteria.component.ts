import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'pm-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit {

  private _listFilter: string;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this.valueChange.emit(this._listFilter = value);
  }
  @Input() displayDetails: boolean;
  @Input() hitCount: number;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('filterElement') filterElementRef: ElementRef;
  constructor() { }

  ngAfterViewInit(): void {
    if (this.filterElementRef) {
      debugger
      this.filterElementRef.nativeElement.focus();
    }
  }

  ngOnInit() {
  }

}
