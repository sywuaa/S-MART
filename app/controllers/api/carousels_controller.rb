class Api::CarouselsController < ApplicationController

  def index
    @carousels = Campaign.all
  end

end
