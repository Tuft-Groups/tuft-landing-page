# Tuft Landing Page

A modern, responsive landing page for Tuft - a productivity-focused group chat application. Built with Next.js, Mantine UI, and SCSS.

## 🚀 Features Showcased

- Centralized feed and notice board system
- Real-time group chat capabilities
- File management and storage solutions
- Video conferencing and meeting functionality
- Integrated payment processing
- Member management and analytics

## 🛠️ Tech Stack

- **Framework:** Next.js
- **UI Library:** Mantine
- **Styling:** SCSS
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:

```bash
git https://github.com/Tuft-Groups/tuft-landing-page.git
cd tuft-landing-page
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

```
tuft-landing-page/
├── components/
├── pages/
├── public/
├── styles/
│   ├── globals.scss
```

## 🎨 Customization

### Styling

The project uses SCSS modules for styling. Global styles are defined in `styles/globals.scss`, while component-specific styles are located in their respective SCSS modules.

### Mantine Theme

Mantine UI components can be customized through the theme provider in `pages/_app.tsx`:

```javascript
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider
      theme={
        {
          // Your theme configuration
        }
      }
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 About Tuft

Tuft is a group chat application focused on improving productivity in group communications. It offers a comprehensive suite of features including feeds, file sharing, video meetings, and payment processing, making it suitable for various use cases from family groups to public events.

## 📞 Contact

For any questions or support, please reach out to us:

- 📧 Email: neeraj.sameer@tuft.in
- 📱 Phone: +917702316894

---

Made with ❤️ by [Tuft]
