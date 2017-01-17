class Api::FriendsController < ApplicationController
  def index
    @friends = current_user.friends
  end

  def show
    @friend = User.find(params[:id])
    @workouts = @friend.workouts
    @routes = @friend.routes
  end

  def create
    @friend_join = Friend.new()
    @friend_join.user_id = current_user.id
    @friend_join.friend_id = params[:friend][:id]
    @friends = [User.find(params[:friend][:id])]
    if @friend_join.save
      render :index
    else
      render json: ["Cannot friend"], status: 404
    end
  end

  def destroy
    friend_join = Friend.where(friend_id: params[:id]).where(user_id: current_user.id).limit(1)
    friend_join[0].destroy
    @friend = User.find(params[:id])
    render :show
  end

  def search
    if params[:query].present?
      if params[:query] == "all"
        @friends = User.all
      else
        @friends = User.where("username ~ ?", params[:query]).where.not(id: current_user.id)
      end
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
