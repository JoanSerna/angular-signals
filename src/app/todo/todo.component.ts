import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
  untracked
} from '@angular/core';
import {Todo, TodoFormReq} from "./models/todo";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  userName = signal('Joan Serna')
  currentUserName = signal('')
  todos = signal<Todo[]>([])
  pendingTodos = computed<Todo[]>(
    () => this.todos().filter(todo => !todo.status),
    {
      equal: (prev, current) => prev.length === current.length
    })
  completedTodos = computed<Todo[]>(
    () => this.todos().filter(todo => todo.status),
    {
      equal: (prev, current) => prev.length === current.length
    })
  formAddToDo: FormGroup<TodoFormReq> | undefined
  private readonly formBuilder: FormBuilder = inject(FormBuilder)
  private readonly effects = [effect(() => {
    const todos = this.todos()
    untracked(() => {
      console.log('Current ToDos and username', todos, this.userName())
    })
  })]

  ngOnInit(): void {
    this.formAddToDo = this.loadFormAddTodo();
  }

  addNewTodo(): void {
    if (this.formAddToDo) {
      const {name} = this.formAddToDo?.getRawValue()
      const timesStamp = parseInt(`${new Date().getTime() + Math.floor(Math.random() * 1000)}`)
      this.todos.mutate(todos => todos.push({
        name,
        status: false,
        id: timesStamp
      }))
      this.formAddToDo.reset();
    }
  }

  updateTodo(id: number, {checked}: MatCheckboxChange): void {
    this.todos.update(todos => todos.map(todo => ({
      ...todo,
      status: todo.id === id ? checked : todo.status
    })))
  }

  trackById(index: number, todo: Todo): Todo['id'] {
    return todo.id;
  }

  private loadFormAddTodo(): FormGroup<TodoFormReq> {
    return this.formBuilder.group({
      name: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.minLength(3)]),
        nonNullable: true
      })
    });
  }
}
