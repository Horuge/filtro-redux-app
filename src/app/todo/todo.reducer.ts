import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Vencer a tanos.');
const todo2 = new Todo('Salvar el mundo.');

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones) {

    switch (action.type) {
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state, todo];
            break;
        case fromTodo.TOGGLE_TODO:
            return state.map( todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                } else {
                    return todoEdit;
                }
            });
            break;
        case fromTodo.EDITAR_TODO:
            return state.map( todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                       texto: action.texto
                    };
                } else {
                    return todoEdit;
                }
            });
            break;
        case fromTodo.BORRAR_TODO:
            return state.filter( todoEdit => todo.id !== action.id);
            break;
        case fromTodo.TOGGLE_ALL_TODO:
            return state.map( todoEdit => {
                return {
                    ...todoEdit,
                    completado: action.completado
                };
            });
            break;
        case fromTodo.BORRAR_ALL_TODO:
            return state.filter( todoEdit => !todoEdit.completado);
            break;
        default:
            return state;
            break;
    }
}

