# Contributing to React Snowfall Effect 🌨️

Thank you for your interest in contributing to React Snowfall Effect! We welcome contributions from the community and are grateful for your support.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Setting up the Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:

   ```bash
   git clone https://github.com/namnguyenthanhwork/react-snowfall-effect.git
   cd react-snowfall-effect
   ```

3. Install dependencies for all packages:

   ```bash
   npm install
   ```

4. Build the library:

   ```bash
   npm run build:lib
   ```

5. Start the demo application:
   ```bash
   npm run dev:demo
   ```

## 📁 Project Structure

```
react-snowfall-effect/
├── packages/
│   ├── react-snowfall-effect/    # Main library
│   │   ├── src/
│   │   │   ├── index.ts          # Main export
│   │   │   └── Snowfall.tsx      # Core component
│   │   ├── package.json
│   │   └── README.md
│   └── demo/                     # Next.js demo app
│       ├── app/
│       ├── package.json
│       └── README.md
├── package.json                  # Root package.json
└── README.md
```

## 🛠️ Development Workflow

### Making Changes

1. Create a new branch for your feature/fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes in the appropriate package:

   - Library changes: `packages/react-snowfall-effect/src/`
   - Demo changes: `packages/demo/`

3. Test your changes:

   ```bash
   # Build the library
   npm run build:lib

   # Run the demo to test
   npm run dev:demo
   ```

4. Commit your changes with a descriptive message:
   ```bash
   git add .
   git commit -m "feat: add new snowflake shape option"
   ```

### Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:

- `feat: add rotation animation for snowflakes`
- `fix: resolve performance issue with large snowflake counts`
- `docs: update API documentation for new props`

## 🧪 Testing

### Manual Testing

1. Build the library:

   ```bash
   npm run build:lib
   ```

2. Test in the demo application:

   ```bash
   npm run dev:demo
   ```

3. Test different configurations and edge cases
4. Verify performance with various snowflake counts
5. Test on different screen sizes and devices

### Browser Testing

Please test your changes on:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Documentation

### Code Documentation

- Use TypeScript for type safety
- Add JSDoc comments for public APIs
- Keep code readable and well-structured

### README Updates

If your changes affect the public API:

1. Update the main README.md
2. Update the library's README.md in `packages/react-snowfall-effect/`
3. Update the API reference table
4. Add examples if introducing new features

## 🚀 Submitting Changes

### Pull Request Process

1. Push your branch to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

2. Create a Pull Request on GitHub with:

   - Clear title describing the change
   - Detailed description of what was changed and why
   - Screenshots/GIFs if the change affects visuals
   - Link to any related issues

3. Ensure your PR:
   - Builds successfully
   - Doesn't break existing functionality
   - Includes appropriate documentation updates
   - Follows the existing code style

### Pull Request Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Tested locally
- [ ] Tested on multiple browsers
- [ ] Demo application works correctly

## Screenshots/GIFs

If applicable, add screenshots or GIFs

## Related Issues

Closes #(issue number)
```

## 🎯 What to Contribute

### Ideas for Contributions

- **New Features:**

  - Additional snowflake shapes
  - New animation effects
  - Performance optimizations
  - Accessibility improvements

- **Bug Fixes:**

  - Performance issues
  - Browser compatibility
  - Edge cases

- **Documentation:**

  - API documentation
  - Usage examples
  - Tutorials and guides

- **Demo Enhancements:**
  - New demo scenarios
  - Interactive controls
  - Performance metrics

### Reporting Issues

When reporting bugs, please include:

1. **Environment:** Browser, OS, Node.js version
2. **Steps to reproduce:** Clear steps to trigger the issue
3. **Expected behavior:** What should happen
4. **Actual behavior:** What actually happens
5. **Screenshots/Videos:** If applicable
6. **Code samples:** Minimal reproduction case

## 📋 Code Style Guidelines

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow existing naming conventions
- Use meaningful variable and function names
- Keep functions small and focused
- Add type annotations where helpful

### React Components

- Use functional components with hooks
- Follow React best practices
- Use proper prop typing with TypeScript
- Implement proper cleanup in useEffect

### Performance

- Consider performance implications of changes
- Use requestAnimationFrame for animations
- Minimize DOM manipulations
- Profile changes with large snowflake counts

## 🤝 Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different viewpoints and experiences

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or insulting comments
- Publishing private information
- Any conduct inappropriate in a professional setting

## 📞 Getting Help

If you need help:

1. Check existing issues and discussions
2. Read the documentation thoroughly
3. Ask questions in GitHub Discussions
4. Contact the maintainer: namnguyenthanh.work@gmail.com

## 🏆 Recognition

Contributors will be:

- Listed in the project's contributors
- Credited in release notes for significant contributions
- Welcomed to join as maintainers for consistent, high-quality contributions

## 📄 License

By contributing to React Snowfall Effect, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

Thank you for contributing to React Snowfall Effect! 🌨️❄️
