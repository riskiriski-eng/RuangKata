# RuangKata - PRD (Product Requirements Document)

## Overview
**RuangKata** adalah platform untuk bagikan kata-kata indah dengan musik dari Spotify. Users bisa create, share, dan explore kata-kata dari orang lain dengan soundtrack music.

## Target Users
- Penyuka poetry & quotes (semua usia)
- Content creators
- Music enthusiasts

## MVP Features

### 1. User Authentication
- Signup / Login (email + password)
- Logout
- Profile management
- Auth via Supabase

### 2. Create Kata-kata
- Title + text content
- Add musik dari Spotify (search + select)
- Set visibility (public/private)
- Auto-save progress
- Edit & Delete

### 3. Share & Discovery
- Share link (generate short URL)
- Public gallery (trending)
- Search kata-kata
- Filter by music genre

### 4. Interaction
- View count
- Likes/reactions
- Comments
- Copy text

### 5. Spotify Integration
- OAuth login (optional)
- Search Spotify music
- Preview 30s
- Display artist/album info

## Technical Stack
- **Frontend:** React 18 + Vite + Tailwind CSS
- **Backend:** Express.js + Node.js
- **Database:** Supabase (PostgreSQL)
- **Music API:** Spotify Web API
- **State:** Zustand
- **Auth:** Supabase Auth

## Data Model

### Users
- id (PK)
- email
- password_hash
- username
- avatar_url
- created_at

### KataKata (Posts)
- id (PK)
- user_id (FK)
- title
- content
- spotify_track_id
- visibility (public/private)
- view_count
- created_at
- updated_at

### Comments
- id (PK)
- kata_id (FK)
- user_id (FK)
- text
- created_at

### Likes
- id (PK)
- kata_id (FK)
- user_id (FK)
- created_at

## Success Metrics
- Users created
- KataKata posts created
- Engagement (likes, comments)
- Daily active users

## Timeline
- **Week 1:** MVP complete (all features above)
