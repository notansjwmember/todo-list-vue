import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async create(@Body() body: { title: string; content: string }) {
    try {
      const newTodo = await this.todosService.create(body.title, body.content);
      return { data: newTodo };
    } catch (error) {
      return { error: error.message };
    }
  }

  @Get()
  async fetchAll() {
    try {
      const todos = await this.todosService.fetchAll();
      return { data: todos };
    } catch (error) {
      return { error: error.message };
    }
  }
}
