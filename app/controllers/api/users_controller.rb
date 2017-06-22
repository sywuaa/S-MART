class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    debugger
    if @user.save
      log_in(@user)
      render json: './api/sessions/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :first_name, :last_name, :country, :city)
    debugger
  end

end
