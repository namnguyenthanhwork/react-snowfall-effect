# React Snowfall Effect Demo

This is a demo application showcasing the `@namnguyenthanhwork/react-snowfall-effect` library.

## Development

### Local Development (with local library)

For development with the local version of the library:

```bash
npm run dev
# or
npm run dev:local
```

This will:

1. Install the local version of the library (`file:../react-snowfall-effect`)
2. Start the development server

### Development (with published library)

To test with the published version of the library:

```bash
npm run dev:prod
```

This will:

1. Install the published version from npm (`^1.0.2`)
2. Start the development server

## Production Build

For production builds (used by Vercel):

```bash
npm run build
```

This automatically uses the published npm package.

## Scripts

- `npm run dev` - Development with local library (default)
- `npm run dev:local` - Explicitly use local library for development
- `npm run dev:prod` - Use published library for development testing
- `npm run build` - Production build with published library
- `npm run install:local` - Install local library version
- `npm run install:prod` - Install published library version

## Deployment

When deploying to Vercel, the build script automatically uses the published npm package, so no configuration changes are needed.
