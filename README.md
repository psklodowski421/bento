<div align="center">
  <br>
  <h1>Bento 🍱</h1>
  <strong>A deliciously modern vanilla Rails stack for your next big idea.</strong>
</div>

<br>

<p align="center">
  <a href="https://www.ruby-lang.org/en/">
    <img src="https://img.shields.io/badge/Ruby-v2.7.1-green.svg" alt="ruby version">
  </a>
  <a href="http://rubyonrails.org/">
    <img src="https://img.shields.io/badge/Rails-v6.0.3-brightgreen.svg" alt="rails version">
  </a>
  <a href="https://circleci.com/gh/darokel/bento">
    <img src="https://circleci.com/gh/darokel/bento.svg?style=svg" alt="circle ci badge">
  </a>
  <a href="https://codeclimate.com/github/darokel/bento/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/f6ac1aa0621397643eb2/maintainability" />
  </a>
  <a href="https://codeclimate.com/github/darokel/bento/test_coverage">
    <img src="https://api.codeclimate.com/v1/badges/f6ac1aa0621397643eb2/test_coverage" />
  </a>
  <img src="https://img.shields.io/github/languages/code-size/darokel/bento" alt="GitHub code size in bytes">
</p>

## What is Bento?

Bento is a modern and vanilla Rails 6 stack which adheres to the [Rails doctrine](https://rubyonrails.org/doctrine/) as much as possible. It's a starter template for building wonderful software products with Rails.

I created this template so you can hit the ground running and focus on your project without wasting time on boilerplate code.

### What's in the box?

Bento is designed to be lean and healthy with all the essentials for a productive and enjoyable development/testing workflow.

It provides a few staples:

- All the major [Rails](https://rubyonrails.org/) 6 defaults (except for Test Unit in favour of Rspec)
- [Yarn](https://yarnpkg.com/) & [Webpacker](https://github.com/rails/webpacker) 5 for modern JavaScript with proper split css bundles. See `app/javascript/packs` for an example
- [Turbolinks](https://github.com/turbolinks/turbolinks) and [Stimulus](https://stimulusjs.org/) for SPA-like JavaScript sprinkles without the SPA complexity.
- [Jest](https://jestjs.io/) for easy JavaScript testing. See `app/javascript/controllers` for an example
- [Sidekiq](https://sidekiq.org/) for background jobs
- [Rspec](https://rspec.info/) for unit and system tests with 
- [Capybara](https://github.com/teamcapybara/capybara) with headless [Selenium](https://www.selenium.dev/documentation/en/) integration tests and a pre-configured [CircleCI](https://circleci.com/) config ready to go. See `spec/system` for an example. 

See [GOALS.md](GOALS.md) for more information on what's inside Bento and what isn't.

## Getting Started

### Prerequisites

- [Ruby](https://www.ruby-lang.org/en/)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [ChromeDriver](https://chromedriver.chromium.org/)

### Installation

Make sure you've installed the dependencies above then:

Fork the repo:

    git clone git@github.com:darokel/bento.git

Set up your machine:

    ./bin/setup

Make sure the tests pass:

    bundle exec rspec

Go and build!

## Deploying

This repo comes with a 1-click deployment option to Heroku. There are also some scripts to enable easy review apps for PRs if needed. 

Alternatively, you're able to deploy this to any platform of your choice. 

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Suspenders](https://github.com/thoughtbot/suspenders)