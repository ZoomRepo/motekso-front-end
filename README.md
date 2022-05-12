![Motekso Blog Logo](https://motekso.co.uk/static/media/Motekso%20-%20Blog%20Logo%202.d109d01ce0834fa900a8.png)
<!-- Replace with Motekso logo -->
# Motekso - Front End

Written in: React

## Deployment and Hosting

The Dockerfile is built into and image when the main branch is push, this is deployed to Docker Hub. Once we are ready to deploy a build live we Maully perform a docker-compose pull/down/up to rebuild with the latest image; this could be replaced with a daily (specified) time schedule script in cron.daily/cron.hourly etc on the AWS EC2.
<!-- 
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/create-react-app-functions&template=create-react-app) -->

_Live Example: https://motekso.co.uk

### Notice
There will be more infromation regarding how you can get involved in the project here soon.
