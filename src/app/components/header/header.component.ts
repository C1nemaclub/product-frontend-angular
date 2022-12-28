import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() item = '';

  @Output() onClick = new EventEmitter();

  handleClick() {
    this.onClick.emit();
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {}
}
