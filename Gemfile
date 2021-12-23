# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.2'

gem 'bootsnap', require: false
gem 'cssbundling-rails'
gem 'image_processing'
gem 'inline_svg'
gem 'jsbundling-rails'
gem 'oj'
gem 'pg'
gem 'puma'
gem 'rack-attack'
gem 'rack-canonical-host'
gem 'rails', '~> 7.0.0'
gem 'recipient_interceptor'
gem 'redis'
gem 'sidekiq'
gem 'sprockets-rails'
gem 'stimulus-rails'
gem 'turbo-rails'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

group :development do
  gem 'letter_opener'
  gem 'listen'
  gem 'rack-mini-profiler', require: false
  # gem 'web-console'
end

group :development, :test do
  gem 'bullet'
  gem 'bundler-audit', require: false
  gem 'dotenv-rails'
  gem 'factory_bot_rails'
  gem 'i18n-tasks'
  gem 'pry-rails'
  # rails-i18n added here as a temp fix until https://github.com/svenfuchs/rails-i18n/pull/957 is merged
  gem 'rails-i18n', git: 'https://github.com/f6p/rails-i18n.git', branch: 'rails7-hotfix'
  gem 'rspec_junit_formatter'
  gem 'rspec-rails'
  gem 'rubocop'
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
  gem 'rubocop-rspec', require: false
end

group :test do
  gem 'capybara'
  gem 'launchy'
  gem 'selenium-webdriver'
  gem 'shoulda-matchers'
  gem 'simplecov', require: false
  gem 'site_prism'
  gem 'timecop'
  gem 'vcr'
  gem 'webdrivers'
  gem 'webmock'
end

group :production do
  gem 'cloudflare-rails'
  gem 'rack-timeout'
  gem 'rails_12factor'
end
