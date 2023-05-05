import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output, Signal,
  signal,
  WritableSignal
} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateUserComponent {
  @Output() changedUser: EventEmitter<Signal<string>> = new EventEmitter<Signal<string>>()

  @Input({required: true})
  get userName(): WritableSignal<string> {
    return this._username
  }

  set userName(username: WritableSignal<string>) {
    this._username = username
    this.userNameForm.setValue(username())
  }
  _username: WritableSignal<string> = signal('')
  userNameForm: FormControl<string> = new FormControl('', {
    nonNullable: true,
    validators: Validators.compose([Validators.required, Validators.minLength(3)])
  })
  updateUser(): void {
    const username = this.userNameForm.value
    this.userName.set(username)
    this.changedUser.emit(this.userName)
  }
}
