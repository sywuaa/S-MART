class Api::CampaignsController < ApplicationController

  def index
    @campaigns = Campaign.all
    render :index
  end

  def create
    @campaign = Campaign.new(camp_params)
    @campaign.user_id = current_user.id

    if @campaign.save

      reward_errors = []
      params[:campaign][:rewards].each do |key, reward|
        new_reward = Reward.new({
                                title: reward['title'],
                                item: reward['item'],
                                price: reward['price'].to_i,
                                description: reward['description'],
                                campaign_id: @campaign.id
                                })

        if !new_reward.save
          reward_errors.push(new_reward.errors.full_messages)
        end

      end
      
      if reward_errors.empty?
        render :show
      else
        render json ["reward creation error"], status: 500
      end

    else
      render json @campaign.errors.full_messages
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
    params.require(:campaign).permit(:title, :goal, :slogan, :square_image_url, :city, :country, :start_date, :end_date, :vid_url, :vid_olay_image_url, :overview_image_url, :overview, :story)
  end

end
