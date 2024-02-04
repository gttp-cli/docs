# GTTP Documentation

[![Build Status](https://github.com/gttp-cli/docs/actions/workflows/deploy.yml/badge.svg)](https://docs.gttp.dev)


> [!IMPORTANT]  
> The docs are automatically synced with the [main repository](https://github.com/gttp-cli/gttp).  
> Please edit the `docs` folder there, if you want to contribute to the documentation.
>
> You only need to contribute to this repository if you want to contribute to the documentation build process.

## Local Development

The docs are generated using [Docusaurus](https://docusaurus.io/).  
To run the documentation locally, you need to have [Node.js](https://nodejs.org/en/download/) and [pnpm](https://pnpm.io/) installed.

To run the documentation locally, run the following command:

```bash
pnpm install # only needed on first run
pnpm start
```

This will start a local server and open the documentation in your default browser.  
You can now edit the documentation and see the changes live.

## Deployment

The documentation is automatically deployed to GitHub Pages using GitHub Actions.
