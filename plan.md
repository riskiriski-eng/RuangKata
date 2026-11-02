# RuangKata - Development Plan (1 Week)

## Week 1 Breakdown

### Day 1-2: Backend Setup + Database
**Tasks:**
- [ ] Setup Express.js server (port 3000)
- [ ] Setup Supabase project
- [ ] Create database tables (users, kata_kata, comments, likes)
- [ ] Setup RLS (Row Level Security) policies
- [ ] Create API endpoints skeleton

**Deliverable:** Backend running, DB schema complete

---

### Day 2-3: Authentication & User Management
**Tasks:**
- [ ] Signup endpoint (POST /auth/signup)
- [ ] Login endpoint (POST /auth/login)
- [ ] JWT token generation
- [ ] Auth middleware
- [ ] Profile endpoint (GET /users/:id)
- [ ] Update profile (PUT /users/:id)

**Deliverable:** Full auth flow working

---

### Day 3-4: Kata-kata CRUD Operations
**Tasks:**
- [ ] Create kata-kata (POST /kata)
- [ ] Get all kata-kata (GET /kata)
- [ ] Get single kata (GET /kata/:id)
- [ ] Update kata (PUT /kata/:id)
- [ ] Delete kata (DELETE /kata/:id)
- [ ] Visibility control (public/private)
- [ ] Auto-save progress

**Deliverable:** Full CRUD for kata-kata

---

### Day 4-5: Spotify Integration
**Tasks:**
- [ ] Register Spotify Developer app
- [ ] Setup Spotify OAuth (optional)
- [ ] Search tracks endpoint (GET /spotify/search)
- [ ] Get track details (GET /spotify/track/:id)
- [ ] Cache track metadata

**Deliverable:** Spotify integration working

---

### Day 5-6: Frontend Pages & Components
**Tasks:**
- [ ] Setup React Router (Landing, Auth, Dashboard, Create)
- [ ] Create components (Button, Input, Card, Modal)
- [ ] Landing page (hero + CTA)
- [ ] Auth pages (signup/login)
- [ ] Dashboard (gallery + trending)
- [ ] Create page (form + Spotify search)
- [ ] View page (display kata + music)

**Deliverable:** All pages responsive + styled

---

### Day 6-7: Engagement Features + Polish
**Tasks:**
- [ ] Likes system (POST /kata/:id/like)
- [ ] Comments (POST /kata/:id/comments)
- [ ] Share link generation
- [ ] Search & filter
- [ ] Error handling
- [ ] Loading states
- [ ] Deploy (Vercel/Netlify frontend, Railway/Render backend)

**Deliverable:** MVP complete + deployed

---

## Daily Standup
- **Daily checklist:** tasks completed, blockers, next steps
- **Testing:** manual testing each feature before moving on

## Deployment
- **Frontend:** Vercel (auto-deploy from main)
- **Backend:** Railway or Render
- **Database:** Supabase cloud

## Success Criteria
✅ All MVP features working
✅ No console errors
✅ Mobile responsive
✅ Deployed live
