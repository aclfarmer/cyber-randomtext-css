# React Animation Link

This repository contains a React component (AnimationLink) that adds a hacking-style animation effect to links when hovered. The animation effect is implemented using the AnimationHackEffect component.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Getting Started

Follow these steps to integrate the animated link component into your React project:
Prerequisites

Make sure you have React and React Router installed in your project:

```bash
npm install react react-dom react-router-dom
```
## Installation

Clone this repository:

```bash
git clone https://github.com/aclfarmer/cyber-randomtext-css.git
```

Copy the AnimationLink.js and AnimationHack.js files into your project.
Import the AnimationLink component in your desired React component:

```jsx

import AnimationLink from './path/to/AnimationLink';
```
Use the AnimationLink component in your JSX:

```jsx
<AnimationLink
  targetId={'yourLinkId'}
  to={'/your-route'}
  dataValue={'Click here to experience the animation'}
/>
```
## Example Usage
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
```
```jsx
// App.js
import React from 'react';
import './App.css';
import AnimationLink from './AnimationLink';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AnimationLink
          targetId={'appHackLink'}
          to={''}
          dataValue={'Click here to connect to the cyberspace'}
        />
        <p>Hover over the text to trigger the animation.</p>
      </header>
    </div>
  );
}

export default App;
```
## Components
## AnimationLink
The main component that provides an animated link.
Props.
    
    **targetId:**  The ID of the target element.
    **to:**  The destination URL for the link.
    **dataValue:**  The text to be displayed in the link.
    **icon (optional):**  Icon class for the link.
    **onMouseEnter (optional):**  Callback function triggered on mouse enter.
    **onMouseLeave (optional):**  Callback function triggered on mouse leave.
    **isExternal (optional):**  Boolean indicating whether the link is external.

## AnimationHackEffect
The component responsible for the hacking-style animation effect.
Props
   **targetElementId:** The ID of the target element to be animated.
   **dataValue:**  The original text content of the target element.
   **isAnimating:**  Boolean indicating whether the animation is active.
   **setIsAnimating:**  Function to set the animation state.
