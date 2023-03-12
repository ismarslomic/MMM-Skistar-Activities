# Magic Mirror module: Skistar Activities

[![CodeQL](https://github.com/ismarslomic/MMM-Skistar-Activities/actions/workflows/codeql.yml/badge.svg)](https://github.com/ismarslomic/MMM-Skistar-Activities/actions/workflows/codeql.yml)
[![ESLint](https://github.com/ismarslomic/MMM-Skistar-Activities/actions/workflows/eslint.yml/badge.svg)](https://github.com/ismarslomic/MMM-Skistar-Activities/actions/workflows/eslint.yml)
[![ESLint](https://github.com/ismarslomic/MMM-Skistar-Activities/actions/workflows/build.yml/badge.svg)](https://github.com/ismarslomic/MMM-Skistar-Activities/actions/workflows/build.yml)
[![E2E tests](https://github.com/ismarslomic/MMM-Skistar-Activities/actions/workflows/e2e-tests.yml/badge.svg)](https://github.com/ismarslomic/MMM-Skistar-Activities/actions/workflows/e2e-tests.yml)
[![Unit tests](https://codecov.io/gh/ismarslomic/MMM-Skistar-Activities/branch/main/graph/badge.svg?token=MQPHY294KB)](https://codecov.io/gh/ismarslomic/MMM-Skistar-Activities)

> Module for Magic Mirror displaying upcoming activities at Skistar destinations similar to what is displayed
> at [Activities in Hemsedal](https://www.skistar.com/en/ski-destinations/hemsedal/winter-in-hemsedal/events/) on
> Skistar website.

## Example screenshot

![Screenshot](screenshot.png)

## Installing the module

1. Navigate to the `MagicMirror/modules` directory and execute the following command

   ```sh
   git clone https://github.com/ismarslomic/MMM-Skistar-Activities.git
   ```

2. Change into the `MMM-Skistar-Activities` module folder and install runtime dependencies with
   ```sh
   cd MMM-Skistar-Activities
   npm run install:dep
   ```

## Using the module

To use this module, add the following configuration block to the modules array in
the `config/config.js` file:

```js
var config = {
  modules: [
    {
      module: 'MMM-Skistar-Activities',
      position: 'top_left',
      config: {
        text: 'Hello world Ismar!',
      },
    },
  ],
}
```

## Development

1. Clone the repository
2. Install the dependencies with `npm install`
3. Automatically recompile the _TypeScript_ files when they are changed with `npm run dev:watch` or run
   explicitly with `npm run build`

Note! `pre-commit` hook is configured to run _eslint_, _prettier_ and _build_ before committing the changes to git,
see [lint-staged](lint-staged.config.mjs) and [husky pre-commit](.husky/pre-commit) configuration files.

### Linting and formatting

```bash
npm run lint
npm run prettier
```

### Run unit tests locally

```bash
npm run test:unit
```

### Run e2e tests locally

Make sure Magic Mirror server is running on http://localhost:8080 with config enabling this module before running the
E2E tests!

```bash
npm run test:e2e
```

### Codecov integration in Github actions

Add **Repository secret** in your Github repository with name `CODECOV_TOKEN` and a
secret value from your [codecov.io](https://app.codecov.io/gh) account.
