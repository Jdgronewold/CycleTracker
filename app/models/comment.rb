class Comment < ApplicationRecord
  belongs_to :activity, polymorphic: true
  belongs_to :author, foreign_key: :user_id, class_name: :User
end
