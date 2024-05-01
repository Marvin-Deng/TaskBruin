# TaskBruin
TaskBruin is a web application for UCLA students that serves as a centralized hub where a service is listed in exchange for meal swipes. Possible services that can be uploaded include laundry services, arrangements for carpooling or sharing transportation, and food delivery from dining halls. Users are able to create and delete their own tasks, accept and un-accept tasks that other users have created, and view a list of tasks they have created and accepted.

<img width="1413" alt="image" src="https://github.com/Marvin-Deng/TaskBruin/assets/52214624/4d14619c-268c-4d49-ad7d-d3591f261dee">

<img width="1437" alt="image" src="https://github.com/Marvin-Deng/TaskBruin/assets/52214624/6bc4ade8-d399-482e-9ae6-1c7a5254c6bd">

<img width="1337" alt="image" src="https://github.com/Marvin-Deng/TaskBruin/assets/52214624/9acd386b-8576-4458-857d-9c577255a5d3">

<img width="849" alt="image" src="https://github.com/Marvin-Deng/TaskBruin/assets/52214624/5aff162c-63be-46b0-be34-ddc69cc84b2e">

## Setup

Clone this repository:

```
git clone https://github.com/xalbd/taskbruin
cd taskbruin
```

Install [Node.js](https://nodejs.org/en/download) LTS (at the time of writing, 20.9.0). With Homebrew:

```
brew install node@20
```

Create a [Postgres](https://www.postgresql.org/download/) database with our selected database provider, [Neon](https://neon.tech/docs/introduction). Note that this project does not support locally hosted instances, as there are serverless database interactions that are tied to Neon.

Set up your environment variables:

```
cp .env.TEMPLATE .env
```

[Drizzle](https://orm.drizzle.team/docs/overviews) is used to interface with the database, so fill in `DATABASE_URL` with a connection string. Note that the connection string should include a password and should be pooled. Refer to [this document ](/docs/database.md) for more information on connecting to the database through Neon.

We support authentication through [Github OAuth](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps). Create an OAuth app by following the instructions in [this document](/docs/auth.md) and fill in the environment variables listed (`NEXTAUTH_SECRET`, `GITHUB_ID`, and `GITHUB_SECRET`).

Finally, we store images on [AWS S3](https://aws.amazon.com/s3/). Create a bucket, and fill in the access key, secret access key, and region in the corresponding fields in the .env file, `AWS_S3_ACCESS_KEY`, `AWS_S3_SECRET_ACCESS_KEY`, and `AWS_S3_REGION`.

## Run Locally

```
./start.sh
```

This shell script fast forwards your project based on the upstream Git repository (if any exists), kills currently running Node processes, updates your npm packages based on package.json, updates the Neon repository you're connected to according to your schema file, and then finally starts a development server, located at `localhost:3000`.

## Deployment

The project runs on [Next.js](https://nextjs.org/docs), meaning Vercel takes care of deployment!
