# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_13_180227) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "trails", force: :cascade do |t|
    t.string "t_name", null: false
    t.integer "length", null: false
    t.float "longitude", null: false
    t.float "latitude", null: false
    t.string "difficulty_level", null: false
    t.string "elevation_gain", null: false
    t.string "estimated_time", null: false
    t.text "description"
    t.string "contry", null: false
    t.string "city", null: false
    t.integer "park_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["park_id"], name: "index_trails_on_park_id", unique: true
    t.index ["t_name"], name: "index_trails_on_t_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.text "bio"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email", "session_token"], name: "index_users_on_email_and_session_token", unique: true
  end

end
