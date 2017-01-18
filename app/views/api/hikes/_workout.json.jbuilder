json.extract! workout, :name, :description, :date, :id

json.username workout.user.username
json.type "workout"

json.comments workout.comments do |comment|
  json.body comment.body
  json.id comment.id
  json.author do
    json.username comment.author.username
    json.picture comment.author.picture
  end
end
