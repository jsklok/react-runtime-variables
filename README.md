## React - Docker - NGINX - Enviroment Variables

By default, within React you can use the .env files to use variables in different environments (development and production).
When you want to build a docker container for production, these values ​​can no longer be changed because values are embedded.
Normally you build a container for multiple environments in which you set the settings by environment variables.

This solution ensures that you can use environment variables within a production build container.


### .env files
We have two files .env.development and .env.production for normal react functionality.
See <a href="https://create-react-app.dev/docs/adding-custom-environment-variables/">https://create-react-app.dev/docs/adding-custom-environment-variables/</a>

Declare a variable in both files. One to use during the developments (npm start) and and the other to use as default in your docker container (production)


### Overriding container variabels (after production)
By overriding the docker-entrypoint.sh from nginx we can inject all environment variables with a prefix REACT_APP into <b>window._env_</b>
This variables can be uses before the default process.env variabels.

Example
```
const REACT_APP_ENV = window._env_?.REACT_APP_ENV ?? process.env.REACT_APP_ENV;
```