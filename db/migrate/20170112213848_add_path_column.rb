class AddPathColumn < ActiveRecord::Migration[5.0]
  def change
    add_column :hikes, :routePath, :string
  end
end
