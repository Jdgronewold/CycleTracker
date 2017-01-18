json.extract! hike, :id, :title, :routePath, :distance

json.username hike.user.username
json.type "hike"

json.comments hike.comments do |comment|
  json.body comment.body

  json.author do
    json.username comment.author.username
    json.picture comment.author.picture
  end
end
