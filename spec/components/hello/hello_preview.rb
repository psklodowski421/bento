# frozen_string_literal: true

module Hello
  class Preview < ViewComponent::Preview
    def default_state
      page_hits = 5
      render_component(Hello::Component.new(page_hits))
    end
  end
end
