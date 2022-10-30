## AWS Amplify

AWS Amplify enables web developers to build and deploy React application quickly. You just need to connect your GitHub branch to AWS Amplify service, and you are good to go. Now whenever you will push anything to your connected branch, AWS Amplify will take care of the deployment process. You will find a running instance of the application over <a href="https://live.d3knmnietsgia5.amplifyapp.com/" target="_blank">here</a>. If you see below image then you are at the right place.

![Create React Saga](./assets/home.png)

### Build Settings

You don't need to do much on AWS Amplify after you connect your branch. However, you might want to check your amplify.yml file, while you deploy your application for the first time. It should look like this.

```
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    # IMPORTANT - Please verify your build output directory
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## Netlify

Create React Saga's boilerplate is optimized for netlify and you don't have to do any manual build settings to deploy it properly. Just tag the right repository to it and netlify will do the rest. You can find the live demo of the running boilerplate over <a href="https://create-react-saga.netlify.app/" target="_blank">here</a>.

## Vercel

Vercel is also compatible with Create React Saga. You can easily deploy it on their platform as well.
