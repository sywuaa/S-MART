class Api::CampaignsController < ApplicationController

  def index
  end

  def create
    @campaign = Campaign.new(camp_params)
    if @campaign.save
      render :show
    else
      render @campaign.errors.full_messages
    end
  end

  def edit
  end

  def show
  end

  private
  def camp_params
    params.require(:campaign).permit(:title, :goal_amt, :story, :country)
  end

end
