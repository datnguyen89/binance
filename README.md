# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Change Between Light and Dark Themes
### Getting AntD Stylesheets
```
// light-theme.less

@import '~antd/lib/style/color/colorPalette.less';
@import '~antd/dist/antd.less';
@import '~antd/lib/style/themes/default.less';

// These are shared variables that can be extracted to their own file
@primary-color: #00adb5;
@border-radius-base: 4px;
```
```
// dark-theme.less

@import '~antd/lib/style/color/colorPalette.less';
@import '~antd/dist/antd.less';
@import '~antd/lib/style/themes/dark.less';

@primary-color: #00adb5;
@border-radius-base: 4px;
```
### Compiling Less Files With Gulp

```
yarn add -D gulp gulp-less gulp-postcss gulp-debug gulp-csso autoprefixer less-plugin-npm-import
```
### Create a gulpfile.js

```
const gulp = require('gulp')
const gulpless = require('gulp-less')
const postcss = require('gulp-postcss')
const debug = require('gulp-debug')
var csso = require('gulp-csso')
const autoprefixer = require('autoprefixer')
const NpmImportPlugin = require('less-plugin-npm-import')

gulp.task('less', function () {
  const plugins = [autoprefixer()]

  return gulp
    .src('src/themes/*-theme.less')
    .pipe(debug({title: 'Less files:'}))
    .pipe(
      gulpless({
        javascriptEnabled: true,
        plugins: [new NpmImportPlugin({prefix: '~'})],
      }),
    )
    .pipe(postcss(plugins))
    .pipe(
      csso({
        debug: true,
      }),
    )
    .pipe(gulp.dest('./public'))
})
```
### Run `npx gulp less`
### Changing Between Themes
```
yarn add react-css-theme-switcher
```
```
// index.js
import React from "react";

import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcherProvider themeMap={themes} defaultTheme="light">
      <App />
    </ThemeSwitcherProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```
### Use it
```
import React from "react";
import "./App.css";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Switch, Input } from "antd";

export default function App() {
  const [isDarkState, setIsDarkMode] = React.useState();
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  // Avoid theme change flicker
  if (status === "loading") {
    return null;
  }

  return (
    <div className="main fade-in">
      <h1>The current theme is: {currentTheme}</h1>
      <Switch checked={isDarkState} onChange={toggleTheme} />

      <Input
        style={{ width: 300, marginTop: 30 }}
        placeholder="I will change with the theme!"
      />
    </div>
  );
}
```
### CSS Injection Order
```angular2html
// index.html
<!DOCTYPE html>
<html lang="en">
    <head>    
            ...
        <title>React App</title>
        <!--styles-insertion-point-->
    </head>
    <body>
    ...
    </body>
</html>
```
### Finally, on the provider
```angular2html
// index.js

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcherProvider
      themeMap={themes}
      defaultTheme="light"
      insertionPoint="styles-insertion-point"
    >
      <App />
    </ThemeSwitcherProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```