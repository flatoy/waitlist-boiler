# Waitlist Boilerplate

Made to quickly set up a simple landing page and register emails from who ever is interested in your app.

_NOTE:_ Read the setup section before clicking deploy.

## Getting Started

### Installing

Run `npm install --legacy-peer-deps`, we need the flag because of `react-turnstile`. Not optimal but this is just a shortlived waitlist app.

## Setup

First of all rename the `.env.example` to `.env`

### Notion integration

1. Create a new _internal_ integration at https://www.notion.so/profile/integrations
2. Copy the Internal Integration Secret, use it to replace `xxx` behind NOTION_TOKEN in `.env`
3. Create a databse in Notion with the following properties: Email (type Title), Status (type select), Sign Up Date (type Date)
4. Copy the databse id to replace `xxx` behind NOTION_DATABASE_ID in `.env`

![data base url](https://files.readme.io/64967fd-small-62e5027-notion_database_id.png)

## Turnstile integration

1. Go to [Cloudflare Turnstile](https://www.cloudflare.com/application-services/products/turnstile/), create an account if you don't have one.
2. Click `Add widget`
3. Give it a name and add a hostname (ex. mysaas.com), click "Add" to the right of the hostname in the list. Then "Add" on the bottom.
4. Choose "Managed" and "No" on "pre-clearance".
5. Take the site key and secret key and copy them into `.env` after `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` respectively.

If you want to can keep the initial Turnstile keys in the `.env.example` file for local testing.

## Running Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.
