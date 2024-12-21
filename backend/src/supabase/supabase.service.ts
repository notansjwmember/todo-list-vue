import { Injectable, Logger } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private readonly logger = new Logger(SupabaseService.name);
  private supabase: SupabaseClient;

  constructor() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase URL and Key are required.');
    }

    this.supabase = createClient(supabaseUrl, supabaseKey);
    this.logger.log('Supabase service initialized');
  }

  getClient() {
    this.logger.log('Supabase client initialized');
    return this.supabase;
  }
}
