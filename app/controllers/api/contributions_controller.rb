class Api::ContributionsController < ApplicationController

  def create
    @contribution = Contribution.new(contribution_params)
    @contribution.user_id = current_user.id
    if @contribution.save
      @campaign = Campaign.find(@contribution.campaign_id)
      render 'api/campaigns/show'
    else
      render json: @contribution.errors.full_messages
    end

  end


  private
  def contribution_params
    params.require(:contribution).permit(:campaign_id, :amount, :reward)
  end


end
