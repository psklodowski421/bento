web: bundle exec puma -p $PORT -C ./config/puma.rb
worker: bundle exec sidekiq -C config/sidekiq.yml
release: bundle exec rails heroku:release