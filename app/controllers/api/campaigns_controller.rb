class Api::CampaignsController < ApplicationController

  def index
    @campaigns = Campaign.all
    render :index
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
    @campaign = Campaign.find(params[:id])
    if @campaign.update_attributes(camp_params)
      render :show
    else
      render json @campaign.errors.full_messages
  end

  def show
    @campaign = Campaign.find(params[:id])
  end

  private
  def camp_params
    params.require(:campaign).permit(:title, :goal_amt, :story, :country)
  end

end
