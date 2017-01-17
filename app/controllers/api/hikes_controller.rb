class Api::HikesController < ApplicationController
  def index
    @hikes = Hike.where(user_id: current_user.id)
  end

  def show
    @hike = Hike.find(params[:id])
  end

  def create
    @hike = Hike.new(hike_params)
    @hike.user_id = current_user.id

    if @hike.save
      render :show
    else
      render json: ["Invalid route"], status: 422
    end

  end

  def update
    @hike = Hike.find(params[:id])

    if @hike.update(hike_params)
      render :show
    else
      render json: ["Invalid route"], status: 404
    end

  end

  def destroy
    @hike = Hike.find(params[:id])
    @hike.destroy
    render :show
  end

  # def feed
  #   # Look up to to make a SQL request where multiple IDs are passed in
  #   hikes = Hike.where(user_id: currentUser plus friend ids)
  #   workoutes = Workout.where(user_id: currentUser plus friend ids)
  #
  #   @sorted_activities = sort(compare(hikes, workouts))
  # end

  private

  def hike_params
    params.require(:hike).permit(:title, :description,
      :distance, :user_id, :mapPoints, :routePath)
  end
end
