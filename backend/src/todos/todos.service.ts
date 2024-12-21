import { Injectable, Logger } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';

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
}
