json.extract! hike, :id, :title, :routePath, :distance

json.username hike.user.username
json.type "hike"


json.comments hike.comments do |comment|
  json.currentUserId current_user.id
  json.body comment.body
  json.user_id comment.user_id
  json.id comment.id
  json.author do
    json.username comment.author.username
    json.picture comment.author.picture
  end
end
