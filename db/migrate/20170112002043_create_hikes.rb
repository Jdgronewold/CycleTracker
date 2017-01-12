class CreateHikes < ActiveRecord::Migration[5.0]
  def change
    create_table :hikes do |t|
      t.integer :user_id
      t.string :title
      t.text :description
      t.json :mapPoints
      t.float :distance

      t.timestamps
    end
    add_index :hikes, :user_id
  end
end
