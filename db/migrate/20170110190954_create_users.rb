class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :email, null: false
      t.float :home_lat, null: false
      t.float :home_long, null: false
      t.string :picture

      t.timestamps
    end
    add_index :users, :username
  end
end

# user = {username: "Jeff", password: "password",
#   email: "smile@hotmail.com", home_lat: 37.7936627, home_long: -122.3957437}
