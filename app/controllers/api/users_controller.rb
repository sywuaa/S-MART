class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render 'api/sessions/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if log_in? && current_user.id == params[:id].to_i
      render :show
    else
      @user = User.find(params[:id])
      render 'api/users/show_min'
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :first_name, :last_name)
  end

end
