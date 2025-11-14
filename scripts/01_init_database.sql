-- Users table
CREATE TABLE IF NOT EXISTS "User" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  password TEXT NOT NULL,
  image TEXT,
  bio TEXT,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Patterns table
CREATE TABLE IF NOT EXISTS "Pattern" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  code TEXT NOT NULL,
  category TEXT NOT NULL,
  explanation TEXT,
  tags TEXT[] DEFAULT '{}',
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  "authorId" TEXT NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Likes table
CREATE TABLE IF NOT EXISTS "Like" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "userId" TEXT NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
  "patternId" TEXT NOT NULL REFERENCES "Pattern"(id) ON DELETE CASCADE,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE("userId", "patternId")
);

-- Comments table
CREATE TABLE IF NOT EXISTS "Comment" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  content TEXT NOT NULL,
  "userId" TEXT NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
  "patternId" TEXT NOT NULL REFERENCES "Pattern"(id) ON DELETE CASCADE,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bookmarks table
CREATE TABLE IF NOT EXISTS "Bookmark" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "userId" TEXT NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
  "patternId" TEXT NOT NULL REFERENCES "Pattern"(id) ON DELETE CASCADE,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE("userId", "patternId")
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS "Pattern_authorId_idx" ON "Pattern"("authorId");
CREATE INDEX IF NOT EXISTS "Pattern_category_idx" ON "Pattern"(category);
CREATE INDEX IF NOT EXISTS "Like_patternId_idx" ON "Like"("patternId");
CREATE INDEX IF NOT EXISTS "Comment_patternId_idx" ON "Comment"("patternId");
