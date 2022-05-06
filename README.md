![React Logo](https://github.com/vercel/vercel/blob/master/packages/frameworks/logos/react.svg)
<!-- Replace with Motekso logo -->
# Motekso - Front End

Written in: React

## Deployment and Hosting

The Dockerfile is built into and image when the main branch is push, this is deployed to Docker Hub. Once we are ready to deploy a build live we Maully perform a docker-compose pull/down/up to rebuild with the latest image; this could be replaced with a daily (specified) time schedule script in cron.daily/cron.hourly etc on the AWS EC2.
<!-- 
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/create-react-app-functions&template=create-react-app) -->

_Live Example: https://create-react-app.now-examples.now.sh/_

### Docker-Compose
To get started with React, along with 
<!-- [Serverless Functions](https://vercel.com/docs/v2/serverless-functions/introduction), with Vercel, you can use the [Create-React-App CLI](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) to initialize the project:

```shell
$ npx create-react-app my-app
``` -->
