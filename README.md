# AG React Toast v1.0.1

🎉 A beautiful, lightweight, and easy-to-use toast notification library for React. Simple API, modern design, and zero dependencies.

![Demo](./assets/demo.gif)

## ✨ Features

- 🎨 **5 Toast Types**: Default, Success, Error, Warning, Info
- 🎯 **6 Positioning Options**: All corners and centers
- 🎨 **Beautiful Colors**: Light, vibrant backgrounds that work everywhere
- ⚡ **Zero Dependencies**: Only React as peer dependency
- 📱 **Mobile Responsive**: Optimized for all screen sizes (320px width)
- ♿ **Accessible**: ARIA roles and keyboard navigation
- 🎬 **Smooth Animations**: Subtle CSS transitions
- 📦 **TypeScript**: Full TypeScript support
- 🔧 **Progress Bar**: Visual auto-dismiss indicator
- 🔄 **Promise Support**: Built-in promise handling
- 🪶 **Lightweight**: ~12KB minified
- 🎯 **Simple API**: Easy to use, hard to mess up

## 📦 Installation

```bash
npm install ag-react-toast
```

```bash
yarn add ag-react-toast
```

```bash
pnpm add ag-react-toast
```

## 🚀 Quick Start

### 1. Setup Provider

```tsx
import React from 'react';
import { ToastProvider } from 'ag-react-toast';
import 'ag-react-toast/dist/index.css'; // Import styles
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
import { toast } from 'ag-react-toast';

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
| `variant` | `'default' \| 'success' \| 'error' \| 'warning' \| 'info'` | `'default'` | Toast type |
| `title` | `string` | - | Optional title |
| `duration` | `number` | `5000` | Auto-dismiss time in ms (0 = persistent) |
| `dismissible` | `boolean` | `true` | Show close button |
| `showIcon` | `boolean` | `true` | Show icon |
| `icon` | `ReactNode` | - | Custom icon component |
| `position` | `ToastPosition` | - | Override default position |
| `showProgressBar` | `boolean` | `true` | Show progress bar |

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

## 🎨 Toast Types

```tsx
// Success toast
toast.success('Operation completed successfully!', {
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
toast.show('This is a notification', {
  title: 'Notification'
});
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

## 🎨 Customization

```tsx
// Custom icon
toast.success('Custom icon', {
  icon: <YourCustomIcon />,
  title: 'Custom'
});

// Persistent toast (no auto-dismiss)
toast.warning('This toast stays until manually closed', {
  duration: 0,
  title: 'Persistent'
});

// No progress bar
toast.info('Clean look without progress bar', {
  showProgressBar: false
});

// Long duration
toast.success('This stays for 10 seconds', {
  duration: 10000,
  title: 'Extended Duration'
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
  position: 'top-center',
  duration: 3000
});
```

## 🧹 Clearing Toasts

```tsx
// Clear all toasts at once
toast.clearAll();

// Example: Clear toasts on navigation
function MyComponent() {
  const handleNavigate = () => {
    toast.clearAll();
    // Navigate to another page
  };
  
  return <button onClick={handleNavigate}>Go to Page</button>;
}
```

## ⚙️ Advanced Examples

```tsx
// Toast with custom icon and long duration
toast.success('Your file has been uploaded successfully!', {
  title: 'Upload Complete',
  icon: <UploadIcon />,
  duration: 8000,
  position: 'top-center'
});

// Multiple toasts with different positions
toast.info('Processing...', { position: 'bottom-left' });
toast.success('Done!', { position: 'top-right' });

// Toast without icon
toast.warning('Please review your changes', {
  title: 'Attention',
  showIcon: false
});
```

## 🎨 Color Scheme

The library uses a beautiful, universal color scheme that works perfectly in both light and dark backgrounds:

- **Success**: Light green background (`#e8f5e9`) with dark green text
- **Error**: Light red background (`#ffebee`) with dark red text
- **Warning**: Light orange background (`#fff3e0`) with dark orange text
- **Info**: Light blue background (`#e3f2fd`) with dark blue text
- **Default**: Light gray background (`#f5f5f5`) with dark gray text

These colors provide excellent contrast and readability whether your app has a light or dark background!

## ♿ Accessibility

- **ARIA Roles**: All toasts use `role="alert"` and `aria-live="polite"`
- **Keyboard Navigation**: Close buttons are keyboard accessible
- **Screen Readers**: Toast content is properly announced
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Focus Management**: Proper focus handling for dismissible toasts

## 📱 Mobile & Responsive

- **Fixed Width**: 320px on desktop for consistency
- **Responsive**: Full width with margins on mobile (<640px)
- **Touch-Friendly**: 44px minimum touch targets
- **Smart Positioning**: Automatically centers on small screens
- **Safe Areas**: Respects device notches and safe areas

## 🎯 Browser Support

- **Chrome** 60+ ✅
- **Firefox** 55+ ✅
- **Safari** 12+ ✅
- **Edge** 79+ ✅
- **Mobile Browsers** ✅

## ⚡ Performance

- **Zero Dependencies**: Only React as peer dependency
- **Small Bundle**: ~12KB minified, ~4KB gzipped
- **CSS-Only Animations**: No JavaScript animations
- **Tree Shakeable**: Import only what you need
- **SSR Compatible**: Works with Next.js, Gatsby, etc.
- **60 FPS**: Smooth animations with requestAnimationFrame

## 🔧 TypeScript Support

Full TypeScript support with comprehensive types:

```tsx
import type { 
  ToastData,
  ToastOptions, 
  ToastPosition,
  ToastVariant
} from 'ag-react-toast';

const options: ToastOptions = {
  variant: 'success',
  title: 'Success',
  duration: 5000,
  position: 'top-right',
  dismissible: true,
  showIcon: true,
  showProgressBar: true
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