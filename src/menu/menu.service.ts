import { Injectable } from '@nestjs/common';
import { localStorage } from '../../localStorage';

@Injectable()
export class MenuService {
  fetchFood() {
    return JSON.parse(localStorage.getItem('Todo'));
  }

  addFood(data) {
    let todoItems = JSON.parse(localStorage.getItem('Todo'));
    if (todoItems) {
      data.id = todoItems[todoItems.length - 1].id + 1;
      todoItems.push(data);
      localStorage.setItem('Todo', JSON.stringify(todoItems));
    } else {
      data.id = 1;
      let arr = [data];
      localStorage.setItem('Todo', JSON.stringify(arr));
    }

    return data;
  }

  deleteFood(id) {
    let todoItems = JSON.parse(localStorage.getItem('Todo'));
    let filteredTodos = todoItems.filter((e) => e.id != id);
    localStorage.setItem('Todo', JSON.stringify(filteredTodos));
    return `Todo item with id ${id} has been deleted`;
  }
}
