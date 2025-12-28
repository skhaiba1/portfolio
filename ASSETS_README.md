# Assets Guide for Windows XP Portfolio

This document explains what assets you need to add to complete the Windows XP-style portfolio.

## Required Assets

### Icons (place in `/public/icons/`)

All icons should be 32x32 or 48x48 PNG files with transparency:

- `windows.png` - Windows logo for Start button
- `user.png` - User profile icon
- `tour.png` - Tour Windows XP icon (for About)
- `paint.png` - MS Paint icon
- `pdf.png` - Adobe PDF icon
- `email.png` - Email/Outlook icon
- `mediaplayer.png` - Windows Media Player icon
- `winamp.png` - Winamp player icon
- `folder.png` - Folder icon
- `linkedin.png` - LinkedIn icon
- `recent.png` - Recently used icon
- `volume.png` - Volume icon
- `logoff.png` - Log off icon
- `shutdown.png` - Shutdown icon
- `powerpoint.png` - PowerPoint icon
- `notepad.png` - Notepad icon
- `default.png` - Default window icon

### Tool Icons (place in `/public/icons/`)

For the "Recently Used" menu:
- `figma.png`
- `slack.png`
- `adobe.png`
- `cursor.png`
- `lovable.png`
- `sketch.png`
- `miro.png`
- `jira.png`
- `abstract.png`
- `zeplin.png`
- `claude.png`

### Images

1. **Background** (place in `/public/`)
   - `bliss.jpg` - The iconic Windows XP "Bliss" wallpaper (1920x1080 or higher)
   - Download from: https://wallpapercave.com/windows-xp-bliss-wallpapers

2. **Case Study Images** (place in `/public/images/case-studies/`)
   - Design System thumbnails:
     - `design-system-1.jpg`
     - `design-system-2.jpg`
     - `design-system-3.jpg`
   - UX Case Study thumbnails:
     - `ux-1.jpg`
     - `ux-2.jpg`
     - `ux-3.jpg`
     - `ux-4.jpg`
   - Detailed images for each case study section (see data/caseStudies.js)

### Sounds (place in `/public/sounds/`)

Windows XP authentic sound files (WAV format):
- `startup.wav` - Windows XP startup sound
- `shutdown.wav` - Windows XP shutdown sound
- `welcome.wav` - Windows XP welcome sound
- `logoff.wav` - Windows XP logoff sound
- `click.wav` - Button click sound
- `error.wav` - Error sound
- `minimize.wav` - Window minimize sound
- `maximize.wav` - Window maximize sound
- `close.wav` - Window close sound

You can find these sounds at:
- https://archive.org/details/windows-xp-sounds
- Or search for "Windows XP sounds" online

## Where to Find Assets

### Icons
- **Windows XP Icons**: Search for "Windows XP icon pack" on sites like IconArchive or DeviantArt
- **App Icons**: Download from official websites or use icon libraries like Iconify

### Sounds
- **Windows XP Sounds**: Archive.org has the complete Windows XP sound pack
- Alternatively, use similar sounds from free sound libraries

### Background
- Search for "Windows XP Bliss wallpaper" - the original or high-res recreations are available

## Using Placeholder Images

If you don't have real case study images yet, you can use placeholder services:
- https://placehold.co/800x600/png
- https://picsum.photos/800/600

## Quick Setup

After adding all assets, your `/public` folder structure should look like:

```
public/
├── bliss.jpg
├── favicon.ico
├── icons/
│   ├── windows.png
│   ├── user.png
│   ├── tour.png
│   └── ... (all other icons)
├── images/
│   └── case-studies/
│       ├── design-system-1.jpg
│       └── ... (all case study images)
└── sounds/
    ├── startup.wav
    ├── click.wav
    └── ... (all sound files)
```

## Customization

Once you have all assets:
1. Update case study content in `src/data/caseStudies.js`
2. Add your real portfolio content
3. Update the About section in `src/components/windows/AboutWindow.jsx`
4. Update resume in `src/components/windows/ResumeWindow.jsx`
5. Add real Google Slides links in `src/components/windows/MyDocumentsWindow.jsx`
6. Add real YouTube video link in `src/components/windows/MediaPlayerWindow.jsx`
