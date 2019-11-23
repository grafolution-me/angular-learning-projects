import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName: string,  serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string,  serverContent: string}>()
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  constructor() { }


  ngOnInit() {
  }
  onAddServer(element) {

    this.serverCreated.emit({
      serverName:  element.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(element) {
    this.blueprintCreated.emit({
      serverName:  element.value,
      serverContent:  this.serverContentInput.nativeElement.value
    });
  }
}
