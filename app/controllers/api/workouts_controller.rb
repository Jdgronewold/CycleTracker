class Api::WorkoutsController < ApplicationController
  def index
    @workouts = Workout.includes(:hike).where(user_id: current_user.id)
    render :index
  end

  def show
    @workout = Workout.includes(:hike).find(params[:id])
    render :show
  end

  def create
    @workout = Workout.new(workout_params)
    @workout.user_id = current_user.id
    if @workout.save
      render :show
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def update

  end

  def destroy
    workout = Workout.find(params[:id])
    workout.destroy
    render :show
  end

  private

  def workout_params
    params.require(:workout).permit(:user_id, :route_id, :name,
      :date, :notes, :distance, :time, :power)
  end
end
