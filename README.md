# Alfabit Design System

## What is it?

Alfabit is an innovative technology company dedicated to providing creative and efficient solutions for its clients. Recognizing the importance of consistent and intuitive design across all its platforms and products, Alfabit decided to invest in a cutting-edge design system.

> **Note:** This is a case study of the Alfabit Design System (Alura).

## 👨‍💻 How to install?

```bash
# Using npm
npm i alfabit-ds

# Using yarn
yarn add alfabit-ds
```

## 🏃 How to use?

The Alfabit-ds library is designed to work in Next.js+TailwindCSS applications. Therefore, ensure your applications follow this structure. To use all components of the library seamlessly, additional configuration is required in your project. Follow these steps:

1. In the same file where you import the Tailwind layers (usually `globals.css` or `styles.css`), also import the Alfabit library's CSS file:
    
    ```tsx
    import './globals.css'
    import 'alfabit-ds/styles/globals.css'
    ```
    
2. In the Tailwind configuration file, `tailwind.config.js`, add the Alfabit library configurations as a `preset`:
    
    ```tsx
    const config = {
    	presets: [
    		require('<module_name>/tailwind.config')
    	]
    	// ... other configurations ...
    }
    ```
    
3. Add the Alfabit library files to the `content` property in the Tailwind configuration file to ensure Tailwind processes them properly:
    
    ```tsx
    const config = {
    	content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/<module_name>/components/**/*.{js,ts,jsx,tsx,mdx}'
      ]
    	// ... other configurations ...
    }
    ```
    
4. Configure Next.js transpiling in `next.config.js`. In Next 13, there is a new feature that helps transpile the library, preventing compilation errors:
    
    ```jsx
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      transpilePackages: ["ds-alfabit-v1"],
    };
    
    module.exports = nextConfig;
    ```

Now you can use the library components in your pages:

```tsx
"use client";
import { Typograph } from "alfabit-ds/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <div className="px-8 py-5 rounded-md flex flex-col gap-3 text-center text-gray-950 bg-gray-800">
        <Typograph element="h3" size="title3" className="font-black text-white">
          Hello world!
        </Typograph>
      </div>
    </main>
  );
}
```

## 🎨 What colors are used in the library?

All visual identity elements, such as components, spacing, and colors, can be accessed in [Figma by clicking this link](https://www.figma.com/file/h86gUvqUXTKwgr6tVYinLT/React%3A-Design-System-com-Tailwind?type=design&node-id=0-1&t=GuaFV9cp30SS2di9-0).

Check out the library documentation for more details: [Documentation](https://alfabit-three.vercel.app/).

## 📚 Dependencies used in this library

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://www.npmjs.com/package/tailwindcss)
- [Storybook](https://www.npmjs.com/package/storybook)
- [Class Variance Authority (CVA)](https://www.npmjs.com/package/class-variance-authority)
- [classnames](https://www.npmjs.com/package/classnames)
- [HeadlessUI](https://www.npmjs.com/package/@headlessui/react)
- [heroicons](https://www.npmjs.com/package/@heroicons/react)
- [Chromatic](https://www.npmjs.com/package/chromatic)

## 📝 Documentation

To check the documentation, click [here](https://alfabit-ds.vercel.app/?path=/docs/design-tokens-colors--docs).

- To view the development documentation, run:
  
```bash
npm run storybook or yarn storybook
```

## License

The [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.html) (GPL)

&copy; 2025 - Alfabit Design System

