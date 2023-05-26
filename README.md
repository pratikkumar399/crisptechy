### This is a documentation website built uisng docusaurus and deployed on Github pages.

This repo is built to document my learnings and put them together at a place so that I can take refrence from them when needed.
Others are welcome to learn and contribute their learning to this repo.

---

# Contributing Guidelines

Thank you for considering contributing to our project! We appreciate your effort in making it better. To ensure a smooth and collaborative contribution process, please follow these guidelines.

## Table of Contents

- [Getting Started](#getting-started)
  - [Fork the Repository](#fork-the-repository)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
- [Local Development](#local-development)
- [Building the Project](#building-the-project)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)

## Getting Started

### Fork the Repository

Click on the "Fork" button at the top-right corner of the repository page to create a copy of the repository in your GitHub account.

### Clone the Repository

Clone the forked repository to your local machine using the following command:

```
git clone https://github.com/your-username/repository.git
```

### Install Dependencies

Navigate to the project directory and install the required dependencies:

```
cd repository
npm install
```

## Local Development

To start a local development server and preview the changes, run the following command:

```
npm run start
```

This command will start a local development server and automatically open a browser window. Most changes you make will be reflected live without having to restart the server.

## Building the Project

To generate the static content for the project, use the following command:

```
npm run build
```

This command will generate the static content into the `build` directory. The built project can be served using any static content hosting service or by opening the `index.html` file locally.

## Deployment

The deployment process depends on the hosting service you are using. Here are two common deployment methods:

### Using SSH

If you are using SSH to deploy the project, run the following command:

```
USE_SSH=true npm run deploy
```

### Not Using SSH

If you are not using SSH, provide your GitHub username and run the following command:

```
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push it to the `gh-pages` branch.

## Contributing

1. Fork the repository.
2. Create a new branch for your contributions.
3. Make your changes, following the project's guidelines.
4. Commit your changes with a descriptive commit message.
5. Push your branch to your forked repository.
6. Open a pull request in the original repository, describing your changes.

## Code of Conduct

Please note that by participating in this project, you are expected to adhere to the [Code of Conduct](link-to-code-of-conduct). Ensure respectful and inclusive communication throughout the contribution process.

---

