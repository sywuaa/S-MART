class Api::RewardsController < ApplicationController

  def create
    @reward = Reward.new(reward_params)
    if @reward.save
      render true
    else
      render json @reward.errors.full_messages
    end
  end


  private
  def reward_params
    params.require(:reward).permit(:title, :price, :item, :description)
  end

end
