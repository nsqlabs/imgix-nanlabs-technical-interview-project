# Table of contents

- [Introduction](#introduction)
  - [The challenge](#the-challenge)
  - [Project purpose](#project-purpose)
  - [Scope](#scope)
    - [Functionalities solution should include.](#functionalities-solution-should-include)
    - [Functionalities solution could include.](#functionalities-solution-could-include)
- [The tech stack](#the-tech-stack)
  - [React as FrontEnd](#react-as-frontend)
  - [Vite as module bundler](#vite-as-module-bundler)
  - [Eslint/Prettier to enforce code-styling](#eslint-prettier-to-enforce-code-styling)
  - [Tailwinds as CSS framework](#tailwinds-as-css-framework)
  - [Redux as state-management tool](#redux-as-state-management-tool)
  - [Redux-toolkit as a helper](#redux-toolkit-as-a-helper)
  - [Typescript as language server](#typescript-as-language-server)
  - [Main challenges](#main-challenges)
- [Getting Started](#getting-started)
  - [Installation guide](#installation-guide)
  - [How to run it](#how-to-run-it)

# Introduction

## The challenge

<center><img src="https://c.tenor.com/fMMUO2HnmCUAAAAd/muscle-muscle-gain.gif"></center>

Imgix is ​​an image processing service and CDN that has an easy-to-use API via querystring. it exposes many important transformations and features to make it easy to have variations on a base image or to be able to apply different types of optimizations to images.

In addition, it has a sandbox, where we can test each of the features that its api has, which is a powerful tool because we are generating the final image through parameters in real time 🔥, but with the disadvantage that it is difficult to edit when we have many transformations applied

## Project purpose

The idea of ​​this exercise is to improve the user experience of this sandbox, creating a new UI that allows us to test some of the imgix transformations in a more user-friendly way and to be able to generate the final url with all the applied changes. Apart from this, it is also expected that the new UI includes the history feature (or undo and redo) so that the user can easily navigate to a previous state on the image that is currently being processed.

The list of test images can be consumed by the following [endpoint](https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json) and optionally it is expected to have an input in the UI that allows editing an image that is outside of this list (note the image has to be uploaded or linked to the imgix service)

The new user interface is minimally expected to include rotation and adjustment options. Any other options are also welcome 😉. The User interface it’s up to you, feel free to choose any style guide that best suits you or you feel comfortable. We attached a reference block frame below as a reference. The ui should have a minimum degree of responsiveness and it is optional to take it to create something more complex.

## Scope

### Functionalities solution should include.

- [x] As user I must be able of seeing a list of sample images loaded by default from [this endpoint](https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json)
- [x] As user I must be able of adding a new image to the list from an URL and show the image along with the sample ones.
- [x] As user I must be able of selecting an image and seeing it in the "editor".
- [x] As user I must be able of seeing the URL of the image I'm editing and applying transformations to.
- [x] As user I must be able of applying rotation properties to the selected image and see those changes reflected on the image editor.
- [x] As user I must be able of applying adjustment properties to the selected image and see those changes reflected on the image editor.
- [x] As user I must be able of undoing the last change (per click) based on the previous operations applied to the selected image and see those changes reflected on the image editor.
- [x] As user I must be able of redoing the last change before undoing (per click) based on the previous operations applied to the selected image and see those changes reflected on the image editor.
- [ ] As user I must be able of using the application both in desktop and mobile without compromising usability.

### Functionalities solution could include.

- [x] As user I could get feedback/validation when introducing an invalid value for a specified field.
- [x] As user I could be able of copying the edited image's url with changes applied to my clipboard.
- [x] As user I could be able of seeing the original image before applying changes.
- [ ] As user I could be able of deleting an uploaded image or removing from list a sample one.
- [ ] As user I could be able of seeing a history of all changes applied to image.
- [x] As user I could see a warning before changing image alerting that current changes won't be saved.
- [x] As user I could get the list of images cached so I don't need to fetch them on each reload.
- [ ] As user I could see a tooltip with a bried explanation for each image's property I can change.

# The tech stack

## React as FrontEnd

React is a JavaScript library for building user interfaces. It lets you create reusable components so that your code is easy to read and maintain. When a user interaction happens, React updates the component automatically. This makes your app more responsive and fast.

React is popular because it makes building web applications simpler and faster. It abstracts away the details of the DOM so you can focus on the essentials, and it also uses a virtual DOM, which makes updates faster. In addition, React has a large community and many resources available.

## Vite as module bundler

> Bundlers take multiple JavaScript files and combine them into a single file that can run in the browser.

Vite is a frontend tool that allows for instant server start, fast module replacement, optimized build, universal plugins and much more. It was developed by the creator of Vue and it supports all the main frameworks.

It starts the server right away after which it takes the dependencies that do not change often and pre-bundles them using esbuild. Esbuild is written in Golang, which makes it up to 100 times faster than JavaScript-based bundlers. Vite uses route-based code splitting to understand which parts of the code actually need to be loaded. Because of that, it does not have to re-bundle everything. Vite also delivers the code using native ES module support in modern browsers, which lets the browser take the job of bundling in development. As for production, Vite uses Rollup to bundle and implement various performance optimizations.

## Eslint/Prettier to enforce code-styling

ESLint is a JavaScript linter that helps you identify and fix issues in your code. It can also be used to enforce coding conventions, such as the Airbnb style guide.

Prettier is a code formatter that can be used to automatically format your code. It can also be used to fix common coding style issues, such as excessive white space.

## Tailwinds as CSS framework

Tailwind is a utility-first CSS framework that offers a low-level layer of design features that can be composed into more complex designs. Tailwind provides a large set of utility classes that cover a broad range of common design needs, from typography and colors to spacing and layout.

Tailwind is different from traditional CSS frameworks like Bootstrap or Foundation in that it does not provide pre-built components or UI "widgets". Instead, it provides a low-level layer of design features that can be composed into more complex designs. This approach gives you more flexibility and control over the look and feel of your site, while still providing a wide range of options for quickly building common UI patterns.

## Redux as state-management tool

Redux is a state management tool that helps JavaScript developers manage the state of their applications. It is a simple, centralized store that holds the state of an application, making it easy to access and update. The benefits of using Redux include:

- Simplifies state management
- Makes it easy to share state between different parts of an application
- Provides a central place to log changes to the state
- Makes it easy to track the history of state changes

## Redux-toolkit as a helper

Redux-toolkit is a library that provides a set of helper functions to make working with Redux easier. It includes utilities for creating, updating, and managing Redux store, as well as for handling common Redux tasks such as undo/redo, state persistence, and more.

There are many benefits to using redux-toolkit. First, it can help reduce the boilerplate code needed to set up a Redux store. Second, it includes a number of powerful utilities that can make working with Redux easier, such as the ability to create middleware and enhancers with a simple configuration object, and the ability to persist and rehydrate the store on page refresh or hot reloading. Finally, redux-toolkit can help improve the performance of Redux applications by minimizing store updates

## Typescript as language server

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It gives you optional static type-checking along with the ability to downlevel your code to JavaScript that runs on any browser or any host. You can use TypeScript’s optional type system to get insights into your code, catch errors early, and communicate your intentions more clearly to other developers. TypeScript’s tooling support and language service providers let you have an amazing development experience no matter what editor or IDE you use, including features like statement completion, parameter info, linting, and code refactoring.

## Main challenges

<center><img src="https://c.tenor.com/ilPf7Nnj5CAAAAAC/computer-drinking.gif"></center>

One of the main challenges was dealing with state changes in a complex application and managing those changes across multiple components. This can be especially difficult if different parts of the codebase need to be aware of different state changes. At the beginning I thought that using redux from scratch was a bit overkill and that managing the whole state into a parent component would be easier but when I started to design the app I noticed that actually redux is perfect for solving those kind of problems.

Another challenge I faced was that I proposed myself try a few layout using Grids with ended up being a more than satisfactory test that leaded me to discover a [visual tool](https://grid.layoutit.com/) (I'm a visual learner XD) for making the process easier so this also was a learning experience in that sense.

When coding the last details, I found a lot of inconsistencies across state types generated by Redux-Toolkit and the real Ones I needed, along with some not so clear APIs from libraries I used. This lead me to use more `any` than expected but in a "enterprise" project, I would start with the models, types and interfaces instead of the layout. Some changes occured during development and I decided to prioritize functionality over an explicit API for each component.

Finally, I struggled to make the application responsive, **leaving that part out of scope** in order to meet the committed deadline. In the end, I started applying kinds of tailwinds' viewport classes that resulted in the need to redesign the whole app's styles from scratch. If I had to start over, I would definitely start designing mobile first instead of the other way around, but it's something I'm not used to.

# Getting Started

## Installation guide

1. Clone the repository
2. Create the `.env.local` file in the root foolder by following the template in the `.env.local.example` template (🤫 this is the [endpoint](https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json) 🤫)
3. Inside the project-folder run `npm install`

## How to run it

Once you completed the installation guide you can run it by executing the command `npm run dev` within the project folder. It will open the app in the url `http://127.0.0.1:5173` by default.
