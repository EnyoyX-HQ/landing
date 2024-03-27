<h1 align="center">
  EnvoyX Platform
</h1>
<p align="center">
  <img width="400" alt="EnvoyX" src="assets/envoyx-white.png" />
</p>
<p align="center">
  <a href="https://github.com/metaplex-foundation/mpl-bubblegum/actions/workflows/main.yml"><img src="https://img.shields.io/github/actions/workflow/status/metaplex-foundation/mpl-bubblegum/main.yml?logo=GitHub" /></a>
  <a href="https://www.npmjs.com/package/@metaplex-foundation/mpl-bubblegum"><img src="https://img.shields.io/npm/v/%40metaplex-foundation%2Fmpl-bubblegum?logo=npm&color=377CC0" /></a>
  <a href="https://crates.io/crates/mpl-bubblegum"><img src="https://img.shields.io/crates/v/mpl-bubblegum?logo=rust" /></a>
</p>
<p align="center">
  Unlock financial potential and propel your business operations
</p>


- [Getting Started](#getting-started)
  - [Website URL Patterns](#website-url-patterns)
  - [Website Templates](#website-templates)
  - [Next JS App Router](#next-js-app-router)
  - [Push Actions](#push-actions)
- [Pull Requests](#pull-requests)
- [Github Workflows](#github-workflows)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)
   

## Getting Started
First, clone the repository to your desired location: 
```bash
git clone https://github.com/EnvoyX-Org/envoyx-platform.git
```
Point to or checkout the qa/testing branch (<b>envoyx-qa</b>)
```bash
git checkout -b envoyx-qa
```
run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Website URL Patterns
1. <b>Landing Page</b>: `https://tryenvoyx.com`
2. <b>Sign Up Auth URL</b>: `https://auth.tryenvoyx.com/signup?redirectUrl=https%3A%2F%2Fdashboard.tryenvoyx.com%2Fsignup%2F`
3. <b>Sign In Auth URL</b> to redirect users to signin <b>dashboard</b>: `https://auth.tryenvoyx.com/?redirectUrl=https%3A%2F%2Fdashboard.tryenvoyx.com%2Fsignup%2F`
4. <b>Dashboard URL</b>: `https://dashboard.tryenvoyx.com`


Follow the templates down below to build the envoyx-platform:

### Website Templates
1. Rebuild Main Website - [EnvoyX](#https://tryenvoyx.com/)
2. Rebuild Dashboard Auth - [EnvoyX Login / SignUp](#https://envoyx.vercel.app/)
3. Rebuild Dashboard View - [EnvoyX Dashboard](#https://envoyx.vercel.app/dashboard)
4. CSS Template - [Alaffiahealth](#https://www.alaffiahealth.com/)

### Next JS App Router
This repo uses the Next.js App Router, which introduces a new model for building applications using React's latest features such as Server Components, Streaming with Suspense, and Server Actions.

To learn more visit [Next.js App Router Docs](https://nextjs.org/docs/app)

### Push Actions
When modifications are completed follow these steps to commit your changes to the envoyx-qa branch
```bash
git add .
git commit -am "message for commit"
git push origin envoyx-qa
```

   
## Pull Requests
All pull requests must be reviewed and checks completed before the code is pushed/merged from the envoyx-qa branch to the master branch to be deployed to the website.

<b>NOTE: DO NOT ATTEMPT TO DELETE</b> the envoyx-qa branch after the pull request has been merged successfully

## Github Workflows
This is where automated testing and deployment happens and can be found in this [path](./.github/workflows/lint.yml). 

The project utilizes GitHub Actions for Continuous Integration and Deployment (CI/CD) each time a change is pushed to the <b>envoyx-qa</b> and <b>master</b> branches.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
