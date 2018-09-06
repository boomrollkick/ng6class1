import { element } from 'protractor';
import { Component,
    OnInit,
    Input,
    ViewEncapsulation,
    OnChanges,
    DoCheck,
    SimpleChanges,
    AfterContentInit,
    AfterViewInit,
    AfterContentChecked,
    OnDestroy,
    ViewChild,
    ElementRef,
    ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy, AfterViewInit {
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    console.log('on init called');
    console.log('Text Content', this.header.nativeElement.textContent);
    console.log('p content', this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('Text Content', this.header.nativeElement.textContent);
    console.log('p content', this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void  {
  console.log('ng do check')
  }

  ngOnDestroy(): void {
    console.log('we destroyed it')
  }

  ngAfterContentInit(): void  {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void  {
    console.log('AfterContenChecked')
  }
}
