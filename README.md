# personalvue

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Run your unit tests

```
yarn run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Deploying your site to Netlify (free plan)

## Steps

1. Create a free account in [Netlify](netlify.com)
2. Install netlify CLI npm install `netlify-cli -g`
3. Login to netlify from your terminal `netlify login`
4. Connect your github account.
5. In `netlify.toml` specify the build command and distribution directory.
6. Once you push your project to git, Netlify will build from master branch by default.
7. Your site will be deployed on the subdomain of your choosing by default.
8. You can also specify your custom domain.
9. Netlify will also install LetsEncrypt certs for you.
