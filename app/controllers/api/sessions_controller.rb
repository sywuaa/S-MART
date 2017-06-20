class Api::SessionsController < ApplicationController


  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      session[:session_token] = @user.reset_session_token
      render :show
    else
      render json: ['Invalid Username or Password'], status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def destroy
    @user = User.find(params[:id])
    if @user
      log_out(@user)
      render :show
    else
      render json: ['You were not logged in'], status: 404
  end

end
