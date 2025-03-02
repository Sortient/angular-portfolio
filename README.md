# Portfolio

This is my personal portfolio site,  built using Angular, combined with Bootstrap and Angular Material to create a responsive, modern UI. 

It presents my work, including some personal projects and professional experience. It highlights both my front-end capabilities and my approach to integrating modern development workflows.

## Technologies: 
- Angular 19 
- Bootstrap 5
- Angular Material
- Jest 
- Docker
- A full CI/CD pipeline powered by GitHub Actions
- Deployment on Vercel

## Setup and Installation
Clone the Repository:

```git clone https://github.com/Sortient/angular-portfolio.git```

Install Dependencies:

```npm install```

Run Locally:

```ng serve```

Run Tests:

```npm run test```

## CI/CD Pipeline
This project integrates a fully automated CI/CD pipeline:

### Building and Testing
On creating a pull request, the app is built and unit tests are run with Jest.

### Release
If the checks pass and a new version tag is created, a new release is automatically created and an up to date Docker image is pushed to my Docker hub repo.

### Vercel Deployment
Following a successful build on a pull request, the app is deployed automatically to a preview build on Vercel. Once a pull request has been merged into master, the app is deployed to the live production version.