import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../filter/filter.action';
import * as fromAction from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendientes: number;

  filtrosValidos: fromFilter.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFilter.filtrosValidos;

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro(nuevoFiltro: fromFilter.filtrosValidos) {
    const accion = new fromFilter.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter( todo => !todo.completado).length;
  }

  borrarAllCompletados() {
    const accion = new fromAction.BorrarAllTodoAction();
    this.store.dispatch(accion);
  }

}
