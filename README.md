## Rate Repository App

# Description
Mobile application for rating GitHub repositories.

# Development
This is native Android and iOS mobile applications with JavaScript and React built using the React Native framework.
[Expo](https://docs.expo.dev/) is used for the development of this application.  

The [rate-repository-api](https://github.com/fullstack-hy2020/rate-repository-api) server provides an endpoint for returning a paginated list of reviewed repositories. It provides a GraphQL API which is implemented with Apollo Server.

## 🚀 Getting started

To make this app work you first need to set up the server side: [rate-repository-api](https://github.com/fullstack-hy2020/rate-repository-api).  
- Ensure that server is set up correctly and then proceed with the next steps:
1. Clone this repository and run `npm install` in the `rate-repository-app` directory.
2. Create a file `.env` in the `rate-repository-app` directory and add 2 enviroment variables: `ENV=development` and `APOLLO_URI` which is uri to the Apollo GraphQL server.
3. Run `npm start` and you application should be up and running.

## How the app works from a user perspective?

When you open up the app first you see the list of the repositories, option to Sign Up or to Sing In if you already have an account.  
Even if you are not signed in you can see the list of the GitHub repositories and some information about them, search for the repositories in the list or sort them.  
If you click on any of the repositories you can open that repo in the browser and see the list of the already existing reviews in the app.  

If you create an account or Sign In with an existing one you'll have options to create a review for any of the repositories and to see the list of reviews that you've already created.  

![List of the repositories](/assets/repositories.png "List of the respositories")
![View of the single repository](/assets/single_repo.png "Single repository view")
![Sign In form](/assets/signin.png "Sign In form")
![Create a review](/assets/create.png "Create review form")
