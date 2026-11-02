# RuangKata - Design System

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Primary | #1e293b (slate-900) | Headers, CTAs |
| Secondary | #64748b (slate-500) | Body text, backgrounds |
| Accent | #ec4899 (pink-500) | Highlights, links |
| Success | #22c55e (green-500) | Success states |
| Error | #ef4444 (red-500) | Error states |
| Background | #f8fafc (slate-50) | Page bg |
| Surface | #ffffff | Cards, modals |

## Typography

### Font Stack
- **Heading:** 'Segoe UI', 'Roboto', sans-serif (600-700 weight)
- **Body:** 'Segoe UI', 'Roboto', sans-serif (400 weight)
- **Mono:** 'Monaco', 'Courier New', monospace

### Type Scale
| Size | Usage |
|------|-------|
| 32px | Page title |
| 24px | Section header |
| 20px | Card title |
| 16px | Body text |
| 14px | Caption, label |
| 12px | Helper text |

## Spacing
- **Base unit:** 8px
- **Padding:** 8px, 16px, 24px, 32px
- **Margin:** 8px, 16px, 24px, 32px
- **Gap:** 8px, 12px, 16px

## Components

### Button
- **Primary:** bg-primary text-white (hover: darker)
- **Secondary:** border-primary text-primary (hover: bg-light)
- **Sizes:** sm (12px), md (16px), lg (20px)
- **States:** hover, active, disabled, loading

### Input
- **Border:** 2px solid secondary
- **Focus:** 2px solid accent (outline-none)
- **Padding:** 12px 16px
- **Error:** border-error (red)

### Card
- **Background:** surface (white)
- **Padding:** 24px
- **Border-radius:** 8px
- **Shadow:** 0 2px 8px rgba(0,0,0,0.1)
- **Hover:** shadow-lg

### Modal
- **Overlay:** rgba(0,0,0,0.5)
- **Max-width:** 500px
- **Padding:** 32px
- **Border-radius:** 12px

## Responsive Breakpoints
| Name | Width |
|------|-------|
| Mobile | 320px |
| Tablet | 768px |
| Desktop | 1024px |
| Wide | 1280px |

## Icons
- Use Lucide React (https://lucide.dev)
- Size: 16px (inline), 24px (buttons), 32px (hero)

## Animations
- **Transition:** 150ms ease-out (quick interactions)
- **Duration:** 300ms (modals, pages)
