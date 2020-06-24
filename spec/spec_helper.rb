
if ENV.fetch('COVERAGE', false)
  require 'simplecov'

  
  if ENV['CIRCLE_ARTIFACTS']
    dir = File.join(ENV['CIRCLE_ARTIFACTS'], 'coverage', 'backend')
    SimpleCov.coverage_dir(dir)
  end

  SimpleCov.start 'rails'
end

require 'webmock/rspec'
require 'timecop'

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.syntax = :expect
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.syntax = :expect
    mocks.verify_partial_doubles = true
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups
end

WebMock.disable_net_connect!(allow_localhost: true, allow: [
  'chromedriver.storage.googleapis.com'
  ]
)

# Only allow Timecop with block syntax
Timecop.safe_mode = true