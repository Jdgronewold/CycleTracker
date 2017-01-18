class ChangeZipcodeType < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :zipcode
    add_column :users, :zipcode, :json
  end
end
