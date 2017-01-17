class Api::FriendsController < ApplicationController
  def index
    @friends = User.where(id: current_user.out_friends)
    debugger
  end

  def show
    friend_join = Friend.find(params[:id])
    @friend = User.find(friend_join.friend_id)
  end

  def create
    @friend_join = Friend.new(friend_params)
    @friend_join.user_id = current_user.id
    @friends = User.find(@friend_join.friend_id)

    if @friend_join.save
      render :index
    else
      render json: ["Cannot friend"], status: 404
    end
  end

  def delete
    friend_join = Friend.find(params[:id])
    friend_join.delete
    @friend = User.find(friend_join.friend_id)
    render :show
  end

  private

  def friend_params
    params.require(:friend_join).permit(:friend_id)
  end
end
