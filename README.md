# Software Developer Portfolio

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Dark/Light theme toggle with smooth transitions
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth scroll navigation between sections
- 🎭 Beautiful animations using Framer Motion
- 🚀 Optimized for performance with Next.js
- ♿ Accessible design with ARIA labels

## Sections

1. **Hero/About** - Introduction and call-to-action
2. **Skills** - Technical skills and technologies
3. **Projects** - Featured projects showcase
4. **Experience** - Work experience timeline
5. **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your personal information:

- `app/components/Hero.tsx` - Update name and introduction
- `app/components/Contact.tsx` - Update contact information and social links
- `app/components/Projects.tsx` - Add your projects
- `app/components/Experience.tsx` - Add your work experience
- `app/components/Skills.tsx` - Update skills and technologies

### Adding Your Profile Image

1. Add your profile image to the `public` folder with one of these names:
   - `profile.jpg`
   - `profile.jpeg`
   - `profile.png`
   - `profile.webp`

2. The image will automatically be displayed in the Hero section. If no image is found, a placeholder with your initials will be shown.

### Adding Your Resume

1. Move your `Resume.pdf` file to the `public` folder
2. The resume download link in the Hero section will automatically work

**Note:** Files in the `public` folder are accessible from the root URL (e.g., `/Resume.pdf`, `/profile.jpg`)

### Styling

The color scheme can be customized in `tailwind.config.ts`. The primary color is currently set to orange (#FF6B35), which can be changed to match your preferences.

### Theme

The theme toggle is implemented using a context provider. You can customize the theme colors in `tailwind.config.ts` and the theme logic in `app/contexts/ThemeContext.tsx`.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14+** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## License

This project is open source and available under the MIT License.

## Contact

Feel free to reach out if you have any questions or suggestions!

