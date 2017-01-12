class Hike < ApplicationRecord
  validates :title, :description, :distance, presence: true

  belongs_to :user, foreign_key: :user_id
end
