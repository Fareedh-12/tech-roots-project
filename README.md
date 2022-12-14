# Description of Laptop loop

Laptop loop gives asylum seekers an opportunity to receive digital support in the form of laptops. We aim to connect people with other people or organisations that are offering to donate laptops, and at the same time ensure that donated laptops will be given to those who are in need. We understand many asylum seekers experience a lot of barriers and hardships and this is our attempt to curb digital poverty in the asylum system. 

Main features of the application are:
- Ability to donate a laptop
- Abilty to donate multiple laptops
- Ability to request a laptop
- Ability for the admin to see requests and donations available
- Automatic assignment of laptops available to requests
- Automatic reassigment of canceled assignments to other requests
- Abitity to reject a specific laptop
- Browser notifications on laptop assignment to the request
- Status changing of the laptop request 

# Context of Laptop loop
We developed Laptop loopw within a period 4 weeks as our Code Your Future final project. We found this project meaningful because we were once asyulum seekers and we have once face the challenge of digital poverty while waiting for our legal right to remain in the UK. The team involed in the development of this product include:

# Linkedin links
1. Fareedh Yawe - https://www.linkedin.com/in/yawe-fareed/
2. Abdalrazaq Altaih - https://www.linkedin.com/in/abdalrazaq94t/
3. Salem Dayfan - https://www.linkedin.com/in/salem-dayfan-0a9399206/

# Github links: 
1. Fareedh Yawe - https://github.com/Fareedh-12
2. Abdalrazaq Altaih - https://github.com/Abdalrazaq94
3. Salem Dayfan - https://github.com/Sslim123



# Starter Kit

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

- [x] Full stack ES8+ with [Babel]
- [x] [Node] LTS support (verified working on 14.x and 16.x LTS releases)
- [x] [Express] server
- [x] Logging with [Winston] and [Morgan]
- [x] [React] client with [Webpack]
- [x] Client-side routing with [React Router]
- [x] Linting with [ESLint] and [Prettier]
- [x] Dev mode (watch modes for client and server, proxy to avoid CORS issues)
- [x] Production build (single deployment artifact, React loaded via CDN)
- [x] [Heroku] deployment
- [x] [Cloud Foundry] deployment
- [x] [Docker] build
- [x] [Postgres] database with [node-postgres]

## Setup

Pick one member of the team to own the repository and pipeline. That person should do the following:

1.  Click the "Use this template" button above (see [GitHub's docs][1]) to create your team repository and name it something appropriate for your project.
2.  In your repo, click the "Deploy to Heroku" button at the top of the README and create a Heroku account when prompted.
3.  Fill in the name of the application, select Europe and then click "Deploy App".
4.  Once it has deployed successfully, click the "Manage app" button to view the application details.
5.  Go to the "Deploy" tab, select "Connect to GitHub" and choose your repo.
6.  Click "Enable automatic deploys".

Whenever you commit to main (or e.g. merge a [pull request]) it will get automatically deployed!

You should now make sure all of the project team are [collaborators] on the repository.

## Scripts

Various scripts are provided in the package file, but many are helpers for other scripts; here are the ones you'll
commonly use:

- `dev`: starts the frontend and backend in dev mode, with file watching (note that the backend runs on port 3100, and
  the frontend is proxied to it).
- `lint`: runs ESLint and Prettier against all the code in the project.
- `serve`: builds and starts the app in production mode locally.

### Debugging

While running the dev mode using `npm run dev`, you can attach the Node debugger to the server process via port 9229.
If you're using VS Code, a debugging configuration is provided for this.

There is also a VS Code debugging configuration for the Chrome debugger, which requires the recommended Chrome
extension, for debugging the client application.

### Security

If the project handles **any kind of** Personally Identifiable Information (PII) then make sure the following
principles are followed:

- Only collect **strictly necessary** PII;
- Access to PII should be as restricted as possible;
- Access to PII should only be possible after authentication. Authentication **must be done** via GitHub. **Ad hoc
  authentication solutions are not allowed**;
- Admins must be able to control who has access to the platform and at which levels using only GitHub groups;
- There must be an audit mechanism in place. It is required by law to know who accessed what and when;
- Code must be reviewed by senior developers before being pushed to production;
- APIs must be secure. Make sure we are not handling security on the frontend.

### Troubleshooting

See the guidance in the [wiki].

[1]: https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template
[babel]: https://babeljs.io/
[cloud foundry]: https://www.cloudfoundry.org/
[collaborators]: https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository
[docker]: https://www.docker.com
[eslint]: https://eslint.org/
[express]: https://expressjs.com/
[heroku]: https://www.heroku.com/
[morgan]: https://github.com/expressjs/morgan
[node]: https://nodejs.org/en/
[node-postgres]: https://node-postgres.com/
[postgres]: https://www.postgresql.org/
[prettier]: https://prettier.io/
[pull request]: https://help.github.com/en/articles/about-pull-requests
[react]: https://reactjs.org/
[react router]: https://reactrouter.com/web
[webpack]: https://webpack.js.org/
[wiki]: https://github.com/textbook/starter-kit/wiki
[winston]: https://github.com/winstonjs/winston
