class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :trail_id, null: false
      t.integer :rating, null: false
      t.text :review
      t.date :date, null: false

      t.timestamps
    end

    add_index :reviews, :user_id
    add_index :reviews, :trail_id 
    # add_index :reviews, [:user_id, :trail_id], unique: true
  end
end