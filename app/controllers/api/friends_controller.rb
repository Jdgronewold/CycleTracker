class Api::FriendsController < ApplicationController
  def index
    @friends = current_user.friends
  end

  def show
    @friend = User.find(params[:id])
  end

  def create
    @friend_join = Friend.new()
    @friend_join.user_id = current_user.id
    @friend_join.friend_id = params[:friend][:id]
    @friends = User.find(params[:friend][:id])
    debugger
    if @friend_join.save
      render :index
    else
      render json: ["Cannot friend"], status: 404
    end
  end

  def destroy
    friend_join = Friend.where(friend_id: params[:id]).where(user_id: current_user.id).limit(1)
    debugger
    friend_join[0].destroy
    @friend = User.find(params[:id])
    render :show
  end

  def search
    if params[:query].present?
      @friends = User.where("username ~ ?", params[:query])
    else
      @friends = User.none
    end

    render :index
  end

  private

  def friend_params
    params.require(:friend).permit(:friend_id)
  end
end
