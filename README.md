# NextJS Starter for Genui Resliance Team

## In this project

- NextJS
- Redux/toolkit
- Typescript
- FluentUI
- Bootstrap
- Plop

### Install dependies

```bash
yarn
```

### Run locally

```bash
yarn dev
```

### Using Templates

This project uses Plop templating to generate

```bash
yarn dev
```

### Build production static deployment

```bash
yarn export
```

### Build and serve production static deployment

```bash
yarn export-and-serve
```

## Absolute paths

Root level, and commonly accessed directories have an alias created in `tsconfig.json` for easy access and maintainability. `(e.g. '~types', '~store', '~slices', '~components')`

`~` was used over `@` to avoid conflicts with `@types` which is used by typescript node modules.

## Component Layout

Components are organized for resuability. Reusable and extend components are grouped together in folders to be easily found.

Each folder has a typescript path created for easy root level access `(e.g. '~layouts/ContainerLayout', '~forms/SignUpForm', '~ui/ActionBar')`

```bash
/ components
	/ layouts - contains layouts for page components
	/ forms - contains forms
	/ modals - contains modals
	/ ui - contains singular components used throughout the app
```

## Component Folders

Components are organized into folders in order to maintain a cleaner code base while leveraging modular Scss.

```bash
/ components
	/ forms
		/ SignUpForm
			index.tsx
			index.modular.scss
```

The above `SignUpForm` component can now be imported as

```js
import SignUpForm from '~forms/SignUpForm'
```

## Templates and Plop generators

Due to the complexity of the component folder structure this project uses Plop templating to
make creating new components and reducers simpler.

```bash
# default command
yarn plop [generator_name] [first_prompt_value] [...prompt_values]

# create a page
# Creates a react component in the ./pages/ directory
yarn plop page page-name

# create a component
# Creates a react component and style.module.scss in a folder with the component name
# Inside of the the ./components/ui/ directory.
# Currently this only creates a component in the ./components/ui/ directory
yarn plop component component-name

# create a reducer
# Creates a react component and style.module.scss in a folder with the component name
# Currently this only creates a file and a reference still needs to be added to ./store/index.ts
yarn plop slice sliceName
```

## NO SERVER SIDE NEXT.js FEATURES

Due to this project likely requiring azure hosting which does not support Next.js microservice api architecture it we will be avoiding any server side rendering logic in the code. (e.g. getServerSideProps)

---

### Next-js-example used for this project base

```bash
https://github.com/thierryc/Next-gh-page-example/

https://thierryc.github.io/Next-gh-page-example/
```

---

### TODO:

- Clean up deployment environments (remove vercel, ensure gh-pages deploy)
- Clean up bootstrap
- Determine if azure docker deployment can support nextjs
