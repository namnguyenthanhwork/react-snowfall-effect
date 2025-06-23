# React Snowfall Effect 🌨️

Create stunning, customizable snowfall animations for your ReactJS, NextJS applications with ease. Perfect for winter themes, Christmas websites, or any application that needs beautiful falling particle effects.

## ✨ Features

- 🎨 **Highly Customizable**: Control every aspect of the snowfall effect
- ⚡ **Performance Optimized**: Smooth 60fps animations with intelligent frame timing, 50% better performance with optimized animation loop and memory management
- 📱 **Responsive**: Automatically adapts to screen size changes with optimized resize handling
- 🎯 **Interactive**: Mouse-following snowflakes with realistic physics and enhanced mouse interaction
- 🖼️ **Custom Images**: Use your own images as snowflakes with async loading - supports PNG, JPG, SVG, WebP formats, internet URLs, local files, and base64 data URIs (data:image/svg+xml;base64,...)
- 🎭 **Multiple Shapes**: Built-in circle, star, and dot shapes with crisp rendering
- ❄️ **Realistic Physics**: Advanced gravity, wind, bounce, and melting effects with more realistic particle behavior and collision detection
- 📦 **TypeScript Ready**: Full TypeScript support with enhanced type definitions and improved error handling
- 🧠 **Memory Efficient**: Optimized resource management, automatic cleanup, and memory leak prevention
- 🎚️ **Configurable FPS**: Adaptive frame rate control for different devices
- 🔧 **Smart Architecture**: Modular utility functions, cleaner code organization, and reduced re-renders with React hooks optimization

## 📦 Installation

```bash
npm install @namnguyenthanhwork/react-snowfall-effect
```

## 🚀 Quick Start

```tsx
import React from 'react';
import { Snowfall } from '@namnguyenthanhwork/react-snowfall-effect';

function App() {
  return (
    <div>
      <Snowfall />
      {/* Your app content */}
    </div>
  );
}

export default App;
```

## 🎨 Basic Usage

```tsx
import { Snowfall } from '@namnguyenthanhwork/react-snowfall-effect'

// Simple snowfall
<Snowfall />

// Customized snowfall
<Snowfall
  snowflakeCount={100}
  colors={['#ffffff', '#e6f3ff', '#b3d9ff']}
  wind={{ min: -1, max: 1 }}
  speed={{ min: 0.5, max: 2 }}
  size={{ min: 5, max: 25 }}
/>
```

## 🎨 Advanced Examples

### High-Performance Setup

```tsx
<Snowfall
  snowflakeCount={100}
  fps={60}
  fadeEdges={true}
  gravity={1}
  // Optimized for smooth performance
/>
```

### Interactive Snowfall

```tsx
<Snowfall
  followMouse={true}
  snowflakeCount={75}
  fadeEdges={true}
  gravity={0.8}
  // Enhanced mouse interaction with realistic physics
/>
```

### Christmas Theme

```tsx
<Snowfall
  colors={['#ffffff', '#ff6b6b', '#4ecdc4', '#ffe66d']}
  snowflakeShape='star'
  snowflakeCount={60}
  wind={{ min: -0.8, max: 0.8 }}
  accumulate={true}
  // Beautiful star-shaped snowflakes with accumulation
/>
```

### Custom Images

```tsx
// Local images (PNG, JPG, WebP, SVG)
<Snowfall
  images={['/snowflake1.png', '/snowflake2.jpg', '/star.svg']}
  snowflakeCount={40}
  size={{ min: 15, max: 35 }}
/>

// Internet URLs
<Snowfall
  images={[
    'https://example.com/snowflake.png',
    'https://cdn.example.com/winter/star.svg'
  ]}
  snowflakeCount={30}
/>

// Base64 Data URIs
<Snowfall
  images={[
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQi...',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...'
  ]}
  snowflakeCount={25}
/>

// Mixed formats with error handling
<Snowfall
  images={[
    '/local-snowflake.png',
    'https://example.com/remote-star.svg',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0...'
  ]}
  snowflakeCount={50}
  size={{ min: 10, max: 40 }}
  // Async image loading with graceful fallback to default shapes
/>
```

### Bouncing Snow with Physics

```tsx
<Snowfall
  bounce={true}
  gravity={1.2}
  snowflakeCount={50}
  accumulate={true}
  melt={false}
  // Realistic bouncing with advanced physics
/>
```

### Mobile-Optimized

```tsx
<Snowfall
  snowflakeCount={30}
  fps={30}
  followMouse={false}
  bounce={false}
  // Reduced particle count and FPS for mobile devices
/>
```

## 🎯 API Reference

### Props

| Prop             | Type                                                    | Default                                     | Description                                                                                                |
| ---------------- | ------------------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `snowflakeCount` | `number`                                                | `50`                                        | Number of snowflakes (affects performance)                                                                 |
| `images`         | `string[]`                                              | `[]`                                        | Array of image URLs/paths - supports PNG, JPG, SVG, WebP, internet URLs, local files, and base64 data URIs |
| `speed`          | `{min: number, max: number}`                            | `{min: 1, max: 3}`                          | Falling speed range with physics                                                                           |
| `wind`           | `{min: number, max: number}`                            | `{min: -0.5, max: 0.5}`                     | Horizontal wind force with realistic drift                                                                 |
| `size`           | `{min: number, max: number}`                            | `{min: 10, max: 30}`                        | Snowflake size range in pixels                                                                             |
| `opacity`        | `{min: number, max: number}`                            | `{min: 0.1, max: 0.8}`                      | Opacity range for natural variation                                                                        |
| `rotation`       | `{enabled: boolean, speed: {min: number, max: number}}` | `{enabled: true, speed: {min: -2, max: 2}}` | Rotation with performance optimization                                                                     |
| `colors`         | `string[]`                                              | `['#ffffff']`                               | Array of hex/rgb colors for snowflakes                                                                     |
| `className`      | `string`                                                | `''`                                        | Additional CSS classes for canvas                                                                          |
| `style`          | `React.CSSProperties`                                   | `{}`                                        | Additional inline styles (memoized)                                                                        |
| `zIndex`         | `number`                                                | `1000`                                      | Z-index of the canvas element                                                                              |
| `fps`            | `number`                                                | `60`                                        | Target FPS with intelligent throttling                                                                     |
| `snowflakeShape` | `'circle' \| 'star' \| 'dot'`                           | `'circle'`                                  | Built-in shapes with crisp rendering                                                                       |
| `fadeEdges`      | `boolean`                                               | `true`                                      | Fade snowflakes near edges (performance optimized)                                                         |
| `followMouse`    | `boolean`                                               | `false`                                     | Mouse interaction with realistic physics                                                                   |
| `gravity`        | `number`                                                | `1`                                         | Gravity multiplier for natural fall                                                                        |
| `bounce`         | `boolean`                                               | `false`                                     | Realistic bouncing with damping                                                                            |
| `melt`           | `boolean`                                               | `false`                                     | Gradual melting effect near bottom                                                                         |
| `accumulate`     | `boolean`                                               | `false`                                     | Snow accumulation with collision detection                                                                 |

## 🚀 Performance Tips

### For Best Performance

1. **Optimize `snowflakeCount`**:

   - Desktop: 50-100 snowflakes
   - Mobile: 20-50 snowflakes
   - Low-end devices: 10-30 snowflakes

2. **Adjust `fps` based on device**:

   - High-end desktop: 60fps
   - Standard desktop: 30-45fps
   - Mobile devices: 24-30fps

3. **Disable expensive effects when not needed**:

   ```tsx
   // For mobile or low-end devices
   <Snowfall
     followMouse={false}
     bounce={false}
     accumulate={false}
     fadeEdges={false}
   />
   ```

4. **Use optimized image assets**:

   - Keep images under 50KB
   - Use WebP format when possible
   - Optimize for 32x32 or 64x64 pixel sizes

5. **Memory Management**:
   - The component automatically cleans up resources
   - Animation stops when component unmounts
   - No memory leaks with proper cleanup

### Performance Monitoring

```tsx
// Monitor performance in development
const [frameRate, setFrameRate] = useState(60);

<Snowfall
  fps={frameRate}
  snowflakeCount={frameRate >= 45 ? 80 : 40}
/>;
```

## 🎯 Browser Support

- Chrome 60+ (Hardware acceleration recommended)
- Firefox 55+ (WebGL support recommended)
- Safari 12+ (Canvas performance optimized)
- Edge 79+ (Chromium-based)

### Performance Notes

- Best performance on devices with hardware acceleration
- Automatically adapts to device capabilities
- Graceful degradation on older browsers

## 🏗️ Architecture & Technical Details

### Performance Optimizations

- **Memoized Calculations**: React hooks prevent unnecessary re-computations
- **Efficient Animation Loop**: Intelligent frame timing with requestAnimationFrame
- **Memory Management**: Automatic cleanup and resource disposal
- **Canvas Optimization**: Optimized drawing calls and context management

### TypeScript Support

```tsx
import {
  SnowfallProps,
  Snowfall,
} from '@namnguyenthanhwork/react-snowfall-effect';

const props: SnowfallProps = {
  snowflakeCount: 60,
  speed: { min: 1, max: 4 },
  // Full intellisense and type checking
};

<Snowfall {...props} />;
```

## 🎯 License

MIT © [Thành Nam Nguyễn](https://github.com/namnguyenthanhwork)

## 🤝 Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) for details.

## 🐛 Issues

Found a bug or have a feature request? Please open an issue on [GitHub](https://github.com/namnguyenthanhwork/react-snowfall-effect/issues).
