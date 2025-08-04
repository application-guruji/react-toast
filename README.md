# @ag/react-toast

A beautiful, customizable, and lightweight toast notification library for React with stunning visual effects and comprehensive features.

![Demo](./assets/demo.gif)

## ✨ Features

- 🎨 **5 Toast Variants**: Default, Success, Warning, Danger, Info
- 🎭 **9 Style Variants**: Filled, Outline, Soft, Minimal, Gradient, Glow, Glass, Dark, Light
- 📏 **3 Sizes**: Small (sm), Medium (md), Large (lg)
- 🔲 **5 Border Options**: None, Left, Top, Bottom, All
- ✨ **5 Shadow Effects**: None, Small, Medium, Large, Extra Large
- 🎯 **6 Positioning Options**: All corners and centers
- ⚡ **Zero Dependencies**: Only React as peer dependency
- 📱 **Mobile Responsive**: Optimized for all screen sizes
- ♿ **Accessible**: ARIA labels and keyboard navigation
- 🌙 **Dark Mode**: Enhanced dark mode support
- 🎬 **Smooth Animations**: CSS-based animations
- 📦 **TypeScript**: Full TypeScript support
- 🔧 **Progress Bar**: Optional progress indicator
- 🎨 **Custom Colors**: Support for custom color schemes
- 🔄 **Promise Support**: Built-in promise handling

## 📦 Installation

```bash
npm install @ag/react-toast
```

```bash
yarn add @ag/react-toast
```

```bash
pnpm add @ag/react-toast
```

## 🚀 Quick Start

### 1. Setup Provider

```tsx
import React from 'react';
import { ToastProvider } from '@ag/react-toast';
import '@ag/react-toast/dist/index.css'; // Import styles
import App from './App';

function Root() {
  return (
    <ToastProvider>
      <App />
    </ToastProvider>
  );
}

export default Root;
```

### 2. Use Toast Notifications

```tsx
import React from 'react';
import { toast } from '@ag/react-toast';

function MyComponent() {
  const showToast = () => {
    toast.success('Operation completed successfully!');
  };

  return (
    <button onClick={showToast}>
      Show Toast
    </button>
  );
}
```

## 📚 API Reference

### ToastProvider

Wrap your app with the ToastProvider to enable toast notifications.

```tsx
<ToastProvider
  defaultPosition="top-right"
  maxToasts={5}
>
  <App />
</ToastProvider>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Your app components |
| `defaultPosition` | `ToastPosition` | `'top-right'` | Default position for toasts |
| `maxToasts` | `number` | `5` | Maximum number of toasts to show |

### Toast Functions

```tsx
// Basic toast
toast.show(message: string, options?: ToastOptions)

// Variant-specific methods
toast.success(message: string, options?: ToastOptions)
toast.error(message: string, options?: ToastOptions)
toast.warning(message: string, options?: ToastOptions)
toast.info(message: string, options?: ToastOptions)

// Promise handling
toast.promise(promise, { loading, success, error }, options?)

// Custom toast
toast.custom(message: string, options: ToastOptions)

// Management
toast.clearAll()
```

### ToastOptions

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | Toast variant |
| `styleVariant` | `'filled' \| 'outline' \| 'soft' \| 'minimal' \| 'gradient' \| 'glow' \| 'glass' \| 'dark' \| 'light'` | `'filled'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Toast size |
| `title` | `string` | - | Optional title |
| `duration` | `number` | `5000` | Auto-dismiss time (0 = persistent) |
| `dismissible` | `boolean` | `true` | Show close button |
| `showIcon` | `boolean` | `true` | Show variant icon |
| `icon` | `ReactNode` | - | Custom icon |
| `border` | `'none' \| 'left' \| 'top' \| 'bottom' \| 'all'` | `'none'` | Border style |
| `shadow` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Shadow effect |
| `position` | `ToastPosition` | - | Override default position |
| `transparent` | `boolean` | `false` | Transparent background |
| `showProgressBar` | `boolean` | `true` | Show progress indicator |
| `customColor` | `string` | - | Custom background color |

### Position Types

```tsx
type ToastPosition = 
  | 'top-right' 
  | 'top-left' 
  | 'top-center' 
  | 'bottom-right' 
  | 'bottom-left' 
  | 'bottom-center';
```

## 🎨 Toast Variants

```tsx
// Success toast
toast.success('Operation completed!', {
  title: 'Success'
});

// Error toast
toast.error('Something went wrong!', {
  title: 'Error'
});

// Warning toast
toast.warning('Please check your input!', {
  title: 'Warning'
});

// Info toast
toast.info('New update available!', {
  title: 'Information'
});

// Default toast
toast.show('Default message', {
  title: 'Default'
});
```

## 🎭 Style Variants

```tsx
// Filled (default)
toast.success('Filled style', { styleVariant: 'filled' });

// Gradient
toast.success('Gradient style', { styleVariant: 'gradient' });

// Glow
toast.info('Glow style', { styleVariant: 'glow' });

// Glass
toast.success('Glass style', { styleVariant: 'glass' });

// Dark
toast.info('Dark style', { styleVariant: 'dark' });

// Light
toast.success('Light style', { styleVariant: 'light' });

// Soft
toast.warning('Soft style', { styleVariant: 'soft' });

// Minimal
toast.error('Minimal style', { styleVariant: 'minimal' });


// Outline
toast.info('Outline style', { styleVariant: 'outline' });
```

## 📏 Sizes and Styling

```tsx
// Different sizes
toast.info('Small toast', { size: 'sm' });
toast.info('Medium toast', { size: 'md' }); // default
toast.info('Large toast', { size: 'lg' });

// Border styles
toast.success('Left border', { border: 'left' });
toast.warning('Top border', { border: 'top' });
toast.error('Bottom border', { border: 'bottom' });
toast.info('All borders', { border: 'all' });

// Shadow effects
toast.success('Small shadow', { shadow: 'sm' });
toast.info('Medium shadow', { shadow: 'md' });
toast.warning('Large shadow', { shadow: 'lg' });
toast.error('Extra large shadow', { shadow: 'xl' });
```

## 📍 Positioning

```tsx
// Position toasts in different corners
toast.success('Top right', { position: 'top-right' });
toast.info('Top left', { position: 'top-left' });
toast.warning('Top center', { position: 'top-center' });
toast.error('Bottom right', { position: 'bottom-right' });
toast.success('Bottom left', { position: 'bottom-left' });
toast.info('Bottom center', { position: 'bottom-center' });
```

## 🎨 Custom Styling

```tsx
// Custom colors
toast.success('Custom color toast', {
  customColor: '#8B5CF6',
  title: 'Purple Toast'
});

// Transparent background
toast.info('Transparent toast', {
  transparent: true,
  title: 'See-through'
});

// Custom icon
toast.success('Custom icon', {
  icon: <YourCustomIcon />,
  title: 'Custom'
});

// Persistent toast (no auto-dismiss)
toast.warning('Persistent toast', {
  duration: 0,
  dismissible: true,
  title: 'Stays Forever'
});

// No progress bar
toast.info('No progress bar', {
  showProgressBar: false,
  title: 'Clean Look'
});
```

## 🔄 Promise Handling

```tsx
const handleAsyncOperation = async () => {
  const promise = fetch('/api/data');
  
  await toast.promise(promise, {
    loading: 'Loading data...',
    success: 'Data loaded successfully!',
    error: 'Failed to load data'
  });
};

// With custom options
await toast.promise(promise, {
  loading: 'Processing...',
  success: (data) => `Loaded ${data.length} items`,
  error: (err) => `Error: ${err.message}`
}, {
  styleVariant: 'gradient',
  position: 'top-center'
});
```

## 🎣 React Hooks

### useToast Hook

```tsx
import { useToast } from '@ag/react-toast';

function MyComponent() {
  const { addToast, removeToast, clearAll, toasts } = useToast();
  
  const handleAddToast = () => {
    const id = addToast('Custom toast message', {
      variant: 'success',
      styleVariant: 'glow',
      title: 'Custom Toast'
    });
    
    // Remove after 3 seconds
    setTimeout(() => removeToast(id), 3000);
  };
  
  return (
    <div>
      <button onClick={handleAddToast}>Add Toast</button>
      <button onClick={clearAll}>Clear All ({toasts.length})</button>
    </div>
  );
}
```

## ⚙️ Advanced Examples

```tsx
// Complex toast with all features
toast.success('Complex notification with all features enabled', {
  title: 'Advanced Toast',
  styleVariant: 'gradient',
  size: 'lg',
  border: 'left',
  shadow: 'xl',
  position: 'top-center',
  duration: 8000,
  dismissible: true,
  showIcon: true,
  showProgressBar: true
});

// Glow effect with custom styling
toast.info('Stunning glow effect with enhanced visuals', {
  title: 'Glow Effect',
  styleVariant: 'glow',
  shadow: 'lg',
  border: 'all',
  customColor: '#3B82F6'
});

// Glass morphism effect
toast.warning('Glass morphism design', {
  title: 'Modern Glass',
  styleVariant: 'glass',
  transparent: true,
  shadow: 'md'
});
```

## 🌙 Dark Mode

The library automatically supports dark mode when your app has a `.dark` class on a parent element:

```css
/* Dark mode is automatically applied */
.dark .toast {
  /* Enhanced dark mode styles */
}
```

## ♿ Accessibility

- **ARIA Roles**: All toasts use `role="alert"` and `aria-live="polite"`
- **Keyboard Navigation**: Close buttons are keyboard accessible
- **Screen Readers**: Toast content is properly announced
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Focus Management**: Proper focus handling for dismissible toasts

## 📱 Mobile & Responsive

- **Responsive Design**: Adapts to all screen sizes
- **Touch-Friendly**: Optimized touch targets
- **Mobile Positioning**: Smart positioning for mobile devices
- **Viewport Awareness**: Automatically adjusts to constraints

## 🎯 Browser Support

- **Chrome** 60+ ✅
- **Firefox** 55+ ✅
- **Safari** 12+ ✅
- **Edge** 79+ ✅
- **Mobile Browsers** ✅

## ⚡ Performance

- **Zero Dependencies**: Only React as peer dependency
- **Small Bundle Size**: Lightweight and optimized
- **CSS-Only Animations**: No JavaScript animations
- **Tree Shakeable**: Import only what you need
- **SSR Compatible**: Works with Next.js, Gatsby, etc.

## 🔧 TypeScript Support

Full TypeScript support with comprehensive types:

```tsx
import type { 
  ToastData,
  ToastOptions, 
  ToastPosition,
  ToastContextValue
} from '@ag/react-toast';

const options: ToastOptions = {
  variant: 'success',
  styleVariant: 'gradient',
  size: 'lg',
  border: 'left',
  shadow: 'xl',
  position: 'top-center',
  dismissible: true
};
```

## 📄 License

MIT © Application GuruJi

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

## 📞 Support

- 🐛 **Issues**: [GitHub Issues](https://github.com/application-guruji/react-toast/issues)
- 📧 **Email**: contact@applicationguruji.com
- 📖 **Documentation**: Full documentation available

---

**Made with ❤️ for the React community**

*Beautiful, accessible, and highly customizable toast notifications for modern React applications.*
```