# Deployment Process

### First time deploy (Heroku)
```sh
$ heroku create
$ heroku rename yalevanrental
$ git remote add heroku https://git.heroku.com/salty-wave-92523.git
$ git push heroku master
$ heroku open
```

### Subsequent deploys (Heroku)
```sh
$ git commit -a -m 'some comments'
$ git push heroku master
```

### API Keys
## google https://console.developers.google.com
## facebook https://developers.facebook.com
## Mlab https://mlab.com
