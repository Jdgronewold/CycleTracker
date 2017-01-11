class EditUsersTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :home_lat
    remove_column :users, :home_long
    add_column :users, :zipcode, :integer
  end
end
