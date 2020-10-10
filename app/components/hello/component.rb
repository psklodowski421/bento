# frozen_string_literal: true

module Hello
  # The hello world view component
  class Component < ViewComponent::Base
    def initialize(page_hits)
      @page_hits = page_hits
    end
  end
end
