-- Add Playgrounds table for saving projects
CREATE TABLE IF NOT EXISTS playgrounds (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  files JSONB NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_playgrounds_user_id ON playgrounds(user_id);

-- Enable RLS
ALTER TABLE playgrounds ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own playgrounds"
  ON playgrounds FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own playgrounds"
  ON playgrounds FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own playgrounds"
  ON playgrounds FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own playgrounds"
  ON playgrounds FOR DELETE
  USING (auth.uid() = user_id);
