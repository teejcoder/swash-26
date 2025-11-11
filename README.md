# 🎸 Swash Booking Agency

A gritty, dive bar-inspired single-page website for Swash - Brisbane's live music booking agency run by local musicians.

## 🎨 Design

- **Aesthetic**: Graffiti dive bar vibes with a raw, urban feel
- **Colors**: Dulled neons (dirty orange, lime green, muted cyan/magenta)
- **Style**: Angular borders, stencil typography, sticker-style elements
- **Animations**: Framer Motion for smooth transitions and reveals

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Project Structure

```
src/
├── app/
│   ├── globals.css      # Custom color palette & styles
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main page composition
└── components/
    ├── Header.tsx       # Floating navigation
    ├── Hero.tsx         # Bold hero section
    ├── SocialProof.tsx  # Stats & venues
    ├── Features.tsx     # Services overview
    ├── VenuesMarquee.tsx # Scrolling venue names
    ├── Showcase.tsx     # Past shows gallery
    ├── Testimonials.tsx # Client quotes
    └── Contact.tsx      # Contact section
```

## 🎯 Features

- Responsive mobile-first design
- Smooth scroll navigation
- Dark theme optimized for high contrast
- Grayscale-to-color image transitions
- Rotated/skewed elements for graffiti effect
- Custom color palette with dive bar aesthetic

## 📝 Customisation

### Colors
Edit custom colors in `src/app/globals.css`:
```css
--dirty-orange: 30 75% 55%;
--lime-green: 80 50% 50%;
--neon-cyan: 180 60% 45%;
--neon-magenta: 320 55% 50%;
```

---

**Built for Swash** - Brisbane live music booking agency | Fortitude Valley, QLD
