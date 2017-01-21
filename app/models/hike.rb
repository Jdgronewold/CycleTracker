class Hike < ApplicationRecord
  validates :title, :distance, presence: true

  belongs_to :user, foreign_key: :user_id
  has_many :workouts,
    foreign_key: :route_id,
    class_name: :Workout,
    dependent: :destroy

  has_many :comments, as: :activity
end
