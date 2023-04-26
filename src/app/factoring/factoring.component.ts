import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-factoring',
  templateUrl: './factoring.component.html',
  styleUrls: ['./factoring.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FactoringComponent {
  getLabel() {
    console.log('hola Mundo');
    return 'factoring variable from template method';
  }
}
