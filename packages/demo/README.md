# React Snowfall Effect Demo

This is a demo application showcasing the `@namnguyenthanhwork/react-snowfall-effect` library. The demo features a comprehensive interactive playground where you can test and experiment with all available snowfall configurations and effects.

## 🌟 Features

- **Interactive Configuration Panel** - Real-time customization of snowfall effects
- **Multiple Effect Types** - Traditional snowflakes, hearts, stars, and custom shapes
- **Advanced Physics** - Wind, gravity, rotation, and bounce effects
- **Custom Images** - Support for custom snowflake images and SVG shapes
- **Performance Controls** - FPS settings and optimization options
- **Visual Effects** - Fade edges, mouse following, melting, and accumulation
- **Responsive Design** - Built with Next.js 15 and Tailwind CSS

## 🚀 Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:3000`.

### Development with Local Library

Please use `"@namnguyenthanhwork/react-snowfall-effect": "file:../react-snowfall-effect"` in your `package.json`.

This allows you to develop the library and demo simultaneously. Make sure to link the local library correctly in your `package.json`:

```json
{
  "dependencies": {
    "@namnguyenthanhwork/react-snowfall-effect": "file:../react-snowfall-effect"
  }
}
```

Then run (root directory):

```bash
# Install dependencies (uses npm workspaces)
npm install

# Build the library
npm run build:lib

# Run the demo in development mode
npm run dev:demo
```

The demo uses the local library via workspace dependencies, so changes to the library will be reflected in the demo after rebuilding.

## 🏗️ Production Build

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Demo Components

The demo includes several interactive sections:

- **Basic Configuration** - Snowflake count, speed, size controls
- **Physics Settings** - Wind, gravity, rotation effects
- **Visual Customization** - Colors, opacity, shapes
- **Advanced Features** - Custom images, special effects
- **Performance Settings** - FPS and optimization controls

## 🌐 Live Demo

Visit the live demo at: [https://react-snowfall-effect-demo.vercel.app](https://react-snowfall-effect-demo.vercel.app)

## 🔧 Technology Stack

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **@namnguyenthanhwork/react-snowfall-effect** - Snowfall library

## 📄 License

MIT License - see the [LICENSE](../../LICENSE) file for details.

## 👨‍💻 Author

**Thành Nam Nguyễn**

- Website: [https://www.thanhnamnguyen.dev](https://www.thanhnamnguyen.dev)
- Email: namnguyenthanh.work@gmail.com
