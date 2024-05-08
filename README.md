# Next 14 Web Template

Contains generic, unstyled components.

As well as utils and util components for common dev patterns we run into all the time.

Intended as both a starting point for Web projects as well as a reference project for examples on how to use common components.

For use with openapi by default.

## Getting Started

1. Add the relevant `.env` file for this project.
2. Run `npm install`.
3. Run `npm run sync-backend` (if using openapi).
4. Run `npm run dev`. Once compiled, you can access the local webpage at <http://localhost:3000>.
5. That's all! :)

## Development

| Command                | Description                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------ |
| `npm run dev`          | Start dev server. Reads PORT from `.env`.                                            |
| `npx tsc --noEmit`     | Run a type check over the project                                                    |
| `npm run lint`         | Check for Next errors and warnings (useful to build errors that `tsc` doesn't catch) |
| `npm run sync-backend` | Updates your types to match the latest backend schema (if using fetcher)             |
| `npm run test`         | Run project Jest tests                                                               |

## Docs

### Project Doc

Link the relevant Moonward Project doc here

### Frontend Dev Docs

Link the general Moonward frontend dev docs here

## File Structure

- `.vscode`
  - `extensions.json` - Recommended VSCode extensions for this project.
  - `react.code-snippets` - Code snippets for saving time on common workflows.
  - `settings.json` - VSCode settings specific for this project.
- `bin` - Executables e.g. prebuild, openapi
- `public`
  - `assets` - Public assets here such as images.
- `src` - All project source code goes here.

  - `app` - App router folder. Avoid putting non-next files here - use for routing and layouts.
  - `components` - General components used across the apps here
    - …
    - `utilities` -
  - `constants`
  - `features`
    - `<feature-name>` - Major features are abstracted into their own folders.
      - Components, utils, hooks, specific to the feature go into their own folders here. Code per function should not be imported by other features (use general if it is reused).
      - `types.ts` Types specific for this feature. We use 1 type file per feature unless it’s getting bloated.
  - `hooks` - Common utility hooks for the project.
  - `providers` Context providers
  - `services` - Reusable code that interacts with external systems/APIs.
  - `stores` - State management logic here (global state etc.)
  - `styles`
    - Only globals css?
  - `tests`
    - `e2e`
    - `unit`
  - `types` - For globally used types. Feature-specific types go in their respective folders.
  - `utils` - General helper functions used across the codebase to format or transform data.

- `.env.example` - .env file with annotations and empty values.
- `.eslintrc.json`
- `.gitignore`
- `.prettierrc.json`
- `cspell-dict.txt` - Add words for cspell to ignore here. Be liberal with adding new words.
- `cspell.json`
- `jest.config.js`
- `next.config.js`
- `package-lock.json` - Do not edit this manually. However, please do commit the changes here if you install new packages.
- `package.json`
- `postcss.config.json`
- `README.md`
- `tailwind.config.js` - Tailwind config. The project’s custom style classes are defined here.
- `tsconfig.json`
