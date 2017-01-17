class ChangeTimetoString < ActiveRecord::Migration[5.0]
  def change
    remove_column :workouts, :time
    add_column :workouts, :time, :string
  end
end
