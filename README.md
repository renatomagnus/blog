This is my blog and portfolio site. This project has the intention of spread the knowledge and show more about my work as an frontend developer.


   * [Getting Started](##Getting-Started)
   * [Languages](##Languages)
   * [Functionalities](##Functionalities)
   * [Branch Pattern](##Branch-Pattern)
   * [CSS / Less](##CSS-/-Less)
      * [Gulp](###Gulp---.css-compiler)
      * [Less file structure](###-Less-file-structure)
      * [Import of Less files](###-Import-of-Less-files)
      * [Styling Patterns](###-Styling-Patterns)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Languages
 - [Next.js](https://https://nextjs.org/): React web development framework for building fast and efficient applications.
 - [React](https://pt-br.reactjs.org/): JavaScript library for creating interactive and dynamic user interfaces.
 - [CSS](https://www.w3.org/Style/CSS/): Styling of website components and pages.

## Functionalities

- Display posts about front-end development and overall learning/mindset as a programmer.
- Show part of my work, my personal projects.
- Explain a little about my personal life and professional trajectory

## Prerequisites

Before starting, you will need to have the following tools installed on your machine:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [VSCode](https://code.visualstudio.com/) (IDE recommended, it's optional)

## CSS / Less

### Gulp - .css compiler

install `gulp`

`npm install -g gulp`

### Automatically compile Less/CSS

Run in second terminal:

`npm run gulp`

In this project LESS will be used.

All styling must use .less files, which will be converted to CSS via the VS Code plugin.

### Less file structure:

```
components
    Header
        index.js
        styles.less 
pages
    portfolio
        index.js
        styles.less
styles
    globals.less
```

### Import of Less files:

All .less files created must be imported into the global styles file, which is:

*src\styles\globals.less*

which will be converted into *globals.css* by the plugin when saving the .less file

this `globals.css` will be imported in to:

src\pages\_app.js

```js
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

In this way, all .less files will be incorporated into the global CSS and identified by the application when displayed in the browser.

### Styling Patterns:

All components and pages need to be identified by a `class`. For example:

```js
import React from "react";
import Link from "next/link";

const LoginButton = () => {
  return (
    <div className="login-button-component">
      <div className="login-button-button">
        <a>User</a>
      </div>
      <div className="login-button-submenu">
        <li>
          <Link href="#">Meus dados</Link>
        </li>
      </div>
    </div>
  );
};

export default LoginButton;
```
This is the Login component and in it we create a `div` that surrounds the entire component and add a class called `login-button-component`.

A class called **login-button-component** represents exactly what the component is.

If we were choosing a name for the login page, for example, it could be something like this: **login-page**.

These names will make the styles unique, that is, they will "encapsulate" the component's styles, preventing them from "leaking" to other components with conflicting names.

> Note that this applies to single styles, but there are scenarios where it will be necessary to generate global styles, so these will be defined in `globals.less`


The .less file:
```less
.login-button-component {
    .login-button {
        color: blue
    }

    .login-button-submenu {
        display: none;
    }

    &:hover {
        .login-button-submenu {
            display: block;
        }
    }
}
```

The automatic generate .css file:
```css
.login-button-component .login-button {
  color: blue;
}
.login-button-component .login-button-submenu {
  display: none;
}
.login-button-component:hover .login-button-submenu {
  display: block;
}

```

The globals.less:
```css
@import "../components/Login/style.less";
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  ....
```
The globals.css after being compiled:
```css
.login-button-component .login-button {
  color: blue;
}
.login-button-component .login-button-submenu {
  display: none;
}
.login-button-component:hover .login-button-submenu {
  display: block;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```
