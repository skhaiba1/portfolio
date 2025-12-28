# Windows XP Portfolio - Sergii Khaiba

A nostalgic Windows XP-styled portfolio website showcasing product design work by Sergii Khaiba, Staff Product Designer.

## Features

✅ Authentic Windows XP boot sequence with loading screen
✅ User selection and welcome screens
✅ Classic Windows XP desktop with Bliss wallpaper
✅ Draggable, resizable, minimizable windows
✅ Fully functional Start menu
✅ Desktop shortcuts
✅ Multiple window types:
  - About (Tour Windows XP style)
  - My Portfolio (Paint style with case studies)
  - Case Studies (Notepad style)
  - Resume (PDF viewer style)
  - Contact (Email client)
  - Media Player (with embedded video)
  - Music Player (Winamp style)
  - My Documents (PowerPoint files)
✅ Recently Used programs menu
✅ All Programs menu
✅ Log Off / Shut Down functionality
✅ Windows XP sounds and interactions
✅ Taskbar with clock and system tray

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Add required assets (see ASSETS_README.md):
   - Windows XP icons
   - Bliss wallpaper
   - Windows XP sounds
   - Portfolio images

4. Start the development server:
```bash
npm run dev
```

5. Open your browser to `http://localhost:5173`

## Customization

### Portfolio Content

Edit `src/data/caseStudies.js` to add your real case studies.

### About Section

Update `src/components/windows/AboutWindow.jsx` with your bio.

### Resume

Modify `src/components/windows/ResumeWindow.jsx` with your resume content.

### Contact Email

The contact email is set to `skhaiba@gmail.com` in `src/components/windows/ContactWindow.jsx`.

### Media Links

- Update YouTube video in `src/components/windows/MediaPlayerWindow.jsx`
- Update music/audio in `src/components/windows/MusicPlayerWindow.jsx`
- Update Google Slides links in `src/components/windows/MyDocumentsWindow.jsx`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to deploy.

## Tech Stack

- React 18
- Vite
- xp.css (Windows XP styling library)
- Custom CSS for authentic XP look and feel

## Browser Support

Works best in modern browsers (Chrome, Firefox, Safari, Edge).

## Credits

Design & Development: Sergii Khaiba
Inspired by: Windows XP (Microsoft)
Reference: https://mitchivin.com

## License

Personal portfolio project - All rights reserved.
