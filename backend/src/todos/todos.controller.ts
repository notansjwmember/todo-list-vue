import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todos.model';

@Controller('api/todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async create(@Body() body: { title: string; content: string }) {
    try {
      const newTodo = await this.todosService.create(body.title, body.content);
      return newTodo;
    } catch (error) {
      return { error: error.message };
    }
  }

  @Get()
  async fetchAll() {
    try {
      const todos = await this.todosService.fetchAll();
      return todos;
    } catch (error) {
      return { error: error.message };
    }
  }

  @Get(':id')
  async fetchOne(@Param('id') id: number) {
    try {
      const todo = await this.todosService.fetchOne(id);

      return todo;
    } catch (error) {
      return { error: error.message };
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() body: { title: string; content: string; completed?: boolean },
  ) {
    try {
      const updates: Todo = {
        id,
        title: body.title,
        content: body.content,
        completed: body.completed ?? false,
      };

      const updatedTodo = await this.todosService.update(id, updates);

      return updatedTodo;
    } catch (error) {
      return { error: error.message };
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    try {
      const deletedTodo = await this.todosService.delete(id);

      return deletedTodo;
    } catch (error) {
      return { error: error.message };
    }
  }
}
