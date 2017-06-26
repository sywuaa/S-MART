class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save!
      log_in(@user)
      render 'api/sessions/show'
    else
      debugger
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :first_name, :last_name, :country, :city)
  end

end
