import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as fromFilter from './filter.action';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: fromFilter.filtrosValidos): Todo[] {

    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completado);
        break;
      case 'pendientes':
        return todos.filter(todo => !todo.completado);
        break;
      default:
        return todos;
        break;
    }
  }

}
