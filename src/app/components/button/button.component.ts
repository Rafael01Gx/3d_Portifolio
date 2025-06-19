import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  host: {
    '[class]': 'cssClass()'
  },

})
export class ButtonComponent {
cssClass = input<string>('')
text = input<string>('')
id = input<string>('')
}
