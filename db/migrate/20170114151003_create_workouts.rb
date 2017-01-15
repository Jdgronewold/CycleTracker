class CreateWorkouts < ActiveRecord::Migration[5.0]
  def change
    create_table :workouts do |t|
      t.string :name, null: false
      t.integer :route_id, null: false
      t.integer :user_id, null: false
      t.date :date
      t.text :notes
      t.float :distance
      t.time :time
      t.float :power

      t.timestamps
    end
    add_index :workouts, :route_id
    add_index :workouts, :user_id
  end
end
