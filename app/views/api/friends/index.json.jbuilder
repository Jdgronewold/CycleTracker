@friends.each do |friend|
  json.set! friend.id do
    json.partial! "friend.json.jbuilder", friend: friend
  end
end
