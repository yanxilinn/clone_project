class CreateTrails < ActiveRecord::Migration[7.0]
  def change
    create_table :trails do |t|
      t.string :t_name, null:false
      t.integer :length, null:false
      t.float :longitude, null:false
      t.float :latitude, null:false
      t.string :difficulty_level, null:false
      t.string :elevation_gain, null:false
      t.string :estimated_time, null:false
      t.text :description
      t.string :contry, null:false
      t.string :city, null:false
      t.integer :park_id, null:false

      t.timestamps
    end
    add_index :trails, :t_name, unique: true
    add_index :trails, :park_id, unique:true
  end
end
