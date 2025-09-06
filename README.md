# Personal Website

A modern, responsive personal website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 **Elegant Design**: Clean, minimal, professional theme with gradient accents
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast**: Built with Vite for lightning-fast development and builds
- 🎯 **Modern Stack**: React 18, React Router, Tailwind CSS

## Tech Stack

- **Frontend**: React 18, React Router DOM
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (via SVG)
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd personal-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Personal Information

Update the following files with your information:

1. **Contact Information** (`src/pages/Contact.jsx`):

   - Email address
   - Location
   - Social media links

2. **About Section** (`src/pages/About.jsx`):

   - Personal description
   - Experience and interests

3. **Projects** (`src/pages/Projects.jsx`):

   - Your project portfolio
   - GitHub username

4. **Logo** (`src/assets/`):
   - Replace `logo-DDVMHhTG.png` and `logo-dark-CUxmLQ6C.png` with your logos

### Styling

The website uses a consistent color scheme defined in `tailwind.config.js`:

- **Primary**: Blue gradient (#3b82f6 to #2563eb)
- **Secondary**: Slate grays
- **Accent**: Various blue shades

You can customize colors, fonts, and other design tokens in the Tailwind configuration.

## Deployment

### GitHub Pages

1. Build the project:

```bash
npm run build
```

2. The built files will be in the `dist` directory

3. Deploy the `dist` directory contents to your GitHub Pages repository

### Other Platforms

The built files can be deployed to any static hosting service:

- Vercel
- Netlify
- AWS S3
- Firebase Hosting

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx      # Navigation header
│   ├── Layout.jsx      # Main layout wrapper
│   └── Sidebar.jsx     # Mobile navigation sidebar
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About page
│   ├── Projects.jsx    # Portfolio page
│   └── Contact.jsx     # Contact page
├── assets/             # Static assets
│   ├── logo-DDVMHhTG.png
│   └── logo-dark-CUxmLQ6C.png
├── styles/             # Global styles
│   └── index.css       # Tailwind CSS imports and custom styles
├── App.jsx             # Main app component with routing
└── main.jsx            # Application entry point
```

## License

This project is open source and available under the [MIT License](LICENSE).
