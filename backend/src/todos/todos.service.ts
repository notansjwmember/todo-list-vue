import { Injectable, Logger } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { Todo } from './todos.model';

@Injectable()
export class TodosService {
  private readonly logger = new Logger(TodosService.name);

  constructor(private readonly supabaseService: SupabaseService) {}

  async create(title: string, content: string) {
    this.logger.log('Creating a new todo...');

    const { data, error } = await this.supabaseService
      .getClient()
      .from('todos')
      .insert({ title, content });
    if (error) {
      this.logger.error('Error adding todo: ', error.message);
      throw new Error('Error adding todo');
    }

    this.logger.log('Succesfully added todo');
    return data;
  }

  async fetchAll() {
    this.logger.log('Fetching all todos...');

    const { data, error } = await this.supabaseService
      .getClient()
      .from('todos')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      this.logger.error('Error fetching todos: ', error.message);
      throw new Error('Error fetching todos');
    }

    this.logger.log('Succesfully fetched todos');
    return data;
  }

  async fetchOne(id: number) {
    this.logger.log(`Fetching todo with id of ${id}`);

    const { data, error } = await this.supabaseService
      .getClient()
      .from('todos')
      .select('*')
      .eq('id', id)
      .single();
    if (error) {
      this.logger.error(`Error fetching todo with id ${id}: ${error.message}`);
      throw new Error(`Error fetching todo: ${error.message}`);
    }

    this.logger.log(`Successfully fetched todo with id ${id}`);
    return data;
  }

  async update(id: number, updates: Partial<Todo>) {
    this.logger.log(`Fetching todo with id of ${id}`);

    const { data, error } = await this.supabaseService
      .getClient()
      .from('todos')
      .update(updates)
      .eq('id', id);
    if (error) {
      this.logger.error(`Error updating todo with ${id}`);
      throw new Error(`Error updating todo: ${error.message}`);
    }

    this.logger.log(`Succesfully updated todo with id of ${id}`);
    return data;
  }

  async delete(id: number) {
    this.logger.log(`Deleting todo with id of ${id}`);

    const { data, error } = await this.supabaseService
      .getClient()
      .from('todos')
      .delete()
      .eq('id', id);
    if (error) {
      this.logger.error(`Error deleting todo with id ${id}: ${error.message}`);
      throw new Error(`Error deleting todo: ${error.message}`);
    }

    this.logger.log(`Successfully deleted todo with id ${id}`);
    return data;
  }
}
