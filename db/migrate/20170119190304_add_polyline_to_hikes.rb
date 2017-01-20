class AddPolylineToHikes < ActiveRecord::Migration[5.0]
  def change
    add_column :hikes, :polylines, :text, array: true, default: []
    add_column :hikes, :polylineColors, :string, array: true, default: []
    add_column :hikes, :elevation, :float
    change_column :hikes, :routePath, :text
  end
end
