class Api::SessionsController < ApplicationController

  def create
    @user = User.find_user_by_credentials(
      params[:user][:username],
      params[:user][:password]
      )
    if @user
      login(@user)
      render :show
    else
      render json: ["Invalid credentials"], status: 422
    end
  end

  def destroy
    if logout
      render json: {}
    else
      render json: ["Not logged in"], status: 404
    end
  end

end
