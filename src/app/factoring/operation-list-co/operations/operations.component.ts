import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OperationsComponent {

}
