<div>
  <h1 align="center"><a href="https://www.newline.co/courses/build-a-complete-company-design-system">Building a company design system 🎨</a></h1>
  
  <div align="center">
    <strong>
      Learn the foundational concepts necessary for building
      a complete engineering design system from scratch
    </strong>
  </div>

  <div>

  <div>

</div>

<hr />

## Quick start

Assuming that you will run in a local development environment, follow the instructions below:

#### 1. Install `yarn`

This repository uses `yarn` v3 (berry).

#### 2. Install the packages

Run `yarn` to install the node packages

### 3. Build the packages

Some packages need to be built before consuming them, like the `foundation`, which will distribute the design tokens to the rest of the packages. To build the packages execute:

```bash
yarn workspace @newline-ds/foundation build # Build the foundation package
yarn workspace @newline-ds/react build # Build the react package
```

## System Requirements

- git
- NodeJS `>=10.13.0` to work with Storybook
- yarn v3

## Run Storybook

You can run Storybook and instantly start experimenting with the components' code running the command:

```bash
yarn workspace @newline-ds/storybook storybook
```

A compiled storybook can be found also [here](https://design-system-newline.surge.sh/).

## Prerequisites

- Knowledge of JavaScript
- Basic knowledge of TypeScript would be helpful
- This repository uses React, but you can swap it with your own framework of choice

## Code Feedback

If you spotted a bug 🐛 or an incompatibility with newer versions please feel free to open an issue or a pull request.
