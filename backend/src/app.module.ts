import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosService } from './todos/todos.service';
import { TodosModule } from './todos/todos.module';
import { SupabaseService } from './supabase/supabase.service';
import { SupabaseModule } from './supabase/supabase.module';

@Module({
  imports: [TodosModule, SupabaseModule],
  controllers: [AppController],
  providers: [AppService, TodosService, SupabaseService],
  exports: [SupabaseService],
})
export class AppModule {}
