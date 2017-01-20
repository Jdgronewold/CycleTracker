json.extract! workout, :name, :description, :date, :id, :time

json.username workout.user.username
json.type "workout"

json.routePath workout.hike.routePath
json.elevation workout.hike.elevation

json.comments workout.comments do |comment|
  json.currentUserId current_user.id
  json.body comment.body
  json.user_id comment.user_id
  json.id comment.id
  json.author do
    json.username comment.author.username
    json.picture comment.author.picture
  end
end
