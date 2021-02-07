# Goals

Bento is a modern and vanilla Rails 6 stack which adheres to the [Rails doctrine](https://rubyonrails.org/doctrine/) as much as possible.

It contains best practices and techniques for setting up a solid development/testing workflow based on my own experiences of working with numerous engineering teams. 

It's a lot of more difficult to encourage code quality and standards later than it is at the beginning of a project. Bento aims to enforce a clear and enjoyable workflow for writing, testing and pushing code in Rails apps for solo devs or teams with multiple engineers.

## Gems

Bento contains a minimal amount of non-development/testing dependencies. Here's what in the Gemfile:

```ruby
gem 'bootsnap'
gem 'image_processing'
gem 'inline_svg'
gem 'oj'
gem 'pg'
gem 'puma'
gem 'rack-attack'
gem 'rack-canonical-host'
gem 'rails'
gem 'recipient_interceptor'
gem 'redis'
gem 'redis-namespace'
gem 'redis-rack-cache'
gem 'sass-rails'
gem 'sidekiq'
gem 'turbolinks'
gem 'tzinfo-data'
gem 'webpacker'
```

The production group only contains:

```ruby
gem 'cloudflare-rails'
gem 'rack-timeout'
gem 'rails_12factor'
```

All other gems have been added to aid in development and testing. You're free to remove as you see fit.

## Frontend

### HTML / CSS

Bento does not enforce any UI framework, leaving you with the choice to choose your own.

### JavaScript

As Bento aims to adhere to the Rails doctrine, it adopts the [Hotwire](https://hotwire.dev/) stack for SPA-like JavaScript sprinkles without the SPA complexity. 

## Other Goodies

- `./bin/setup` convention for new devs
- `./bin/deploy` for easy deployments to Heroku
- `./bin/review-app` script for easily seeding db data into Heroku review apps
- An automatically-created SECRET_KEY_BASE environment variable in all environments
- Pre-configured CircleCI for continuous integration tests
- Pre-configured CodeClimate for code quality
- One easy [script](https://github.com/darokel/bento/blob/master/Rakefile) for pre-commit build checks
- Webpacker 5 for modern JavaScript with proper split css bundles. See `app/javascript/packs` for an example
- Jest for easy JavaScript testing. See `app/javascript/controllers` for an example
- Headless or Remote browser [Selenium](https://www.selenium.dev/documentation/en/) integration tests pre-configured for [CircleCI](https://circleci.com/). See `spec/system` for an example. 
- More