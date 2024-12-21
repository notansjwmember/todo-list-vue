export interface Todo {
  id: number;
  title: string;
  content: string;
  completed?: boolean;
  created_at?: Date;
  updated_at?: Date;
}
