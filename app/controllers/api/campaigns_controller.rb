class Api::CampaignsController < ApplicationController

  def index
    @campaigns = Campaign.all
    render :index
  end

  def create

    params[:campaign][:rewards_attributes] = JSON.parse(params[:campaign][:rewards_attributes])
    @campaign = Campaign.new(camp_params)
    @campaign.user_id = current_user.id
    if @campaign.save
      render :show
    else
      render json: @campaign.errors.full_messages, status: 422
    end

  end

  def edit
    @campaign = Campaign.find(params[:id])
    if @campaign.update_attributes(camp_params)
      render :show
    else
      render json @campaign.errors.full_messages
    end
  end

  def show
    @campaign = Campaign.find(params[:id])
  end

  private
  def camp_params
    params.require(:campaign).permit(:title, :goal, :slogan, :square_image, :city, :country, :start_date, :end_date, :vid_url, :vid_olay_image, :overview_image, :overview, :story, rewards_attributes: [:title, :description, :price, :item])
  end

end
