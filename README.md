# Nathen Fernandes - Personal Portfolio

A modern, responsive personal portfolio website built with React, showcasing my skills, experience, and projects.

## 🚀 Features

- **Modern Design**: Clean, aesthetic design with glass morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Elements**: Hover effects and smooth transitions
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized for performance

## 📋 Sections

1. **Hero Section**: Introduction with contact information
2. **About**: Personal information and education details
3. **Experience**: Work history with detailed achievements
4. **Projects**: Showcase of projects with image placeholders
5. **Skills**: Technical skills with animated progress bars
6. **Contact**: Contact information and social links

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Framer Motion**: Smooth animations and transitions
- **React Icons**: Beautiful icon library
- **CSS3**: Modern styling with gradients and animations
- **Responsive Design**: Mobile-first approach

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/NathenFernandes/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization

### Adding Images
- Replace the placeholder in the Hero section with your photo
- Add project images to the `public` folder and update the image paths in `src/components/Projects.js`

### Adding New Projects
1. Open `src/components/Projects.js`
2. Add a new project object to the `projects` array
3. Include project details, technologies, and features

### Updating Information
- Edit the component files to update personal information
- Modify the skills data in `src/components/Skills.js`
- Update contact information in `src/components/Contact.js`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Add homepage to package.json:
```json
{
  "homepage": "https://yourusername.github.io/portfolio"
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy script to package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Contact

- **Phone**: 647-978-0500
- **Email**: nferna62@uwo
- **LinkedIn**: [linkedin.com/in/nathenfernandes](https://linkedin.com/in/nathenfernandes)
- **GitHub**: [github.com/NathenFernandes](https://github.com/NathenFernandes) 