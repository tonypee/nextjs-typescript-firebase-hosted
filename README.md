# Next.js / typescript / firebase hosted

Based off the SSR sample in: https://github.com/firebase/functions-samples

Added features are: 
- combined client & server apps to share package.json dependancies
- added typescript precompile step
- simplified folder structure

Host your SSR Next.js app on Cloud Functions with Firebase Hosting rewrite rules. Using a rewrite rule that catches **ALL** routes we can then host our SSR app on our Firebase Hosting URL instead of the Firebase Cloud Function URL.

## How to use

```bash
git clone https://github.com/tonypee/nextjs-typescript-firebase-hosted
cd nextjs-typescript-firebase-hosted
yarn
```

Set up firebase:
- create a project through the [firebase web console](https://console.firebase.google.com/)
- grab the projects ID from the web consoles URL: https://console.firebase.google.com/project/<projectId>
- update the `.firebaserc` default project ID to the newly created project

Install project:

```bash
yarn
```

Run Next.js development:

```bash
yarn dev
```

Deploy it to the cloud with Firebase

```bash
yarn deploy
```