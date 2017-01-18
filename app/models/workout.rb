class Workout < ApplicationRecord
  validates :name, :route_id, :user_id, :date, presence: true
  validates :name, uniqueness: {scope: :date}

  belongs_to :user
  belongs_to :hike,
    foreign_key: :route_id,
    class_name: :Hike
  has_many :comments, as: :activity

end
