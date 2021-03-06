# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170119190304) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text     "body"
    t.string   "activity_type"
    t.integer  "activity_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "user_id"
    t.index ["activity_type", "activity_id"], name: "index_comments_on_activity_type_and_activity_id", using: :btree
  end

  create_table "friends", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "friend_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["friend_id"], name: "index_friends_on_friend_id", using: :btree
    t.index ["user_id"], name: "index_friends_on_user_id", using: :btree
  end

  create_table "hikes", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "title"
    t.text     "description"
    t.json     "mapPoints"
    t.float    "distance"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.text     "routePath"
    t.text     "polylines",      default: [],              array: true
    t.string   "polylineColors", default: [],              array: true
    t.float    "elevation"
    t.index ["user_id"], name: "index_hikes_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "email",           null: false
    t.string   "picture"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.json     "zipcode"
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

  create_table "workouts", force: :cascade do |t|
    t.string   "name",        null: false
    t.integer  "route_id",    null: false
    t.integer  "user_id",     null: false
    t.date     "date"
    t.text     "notes"
    t.float    "distance"
    t.float    "power"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.text     "description"
    t.string   "time"
    t.index ["route_id"], name: "index_workouts_on_route_id", using: :btree
    t.index ["user_id"], name: "index_workouts_on_user_id", using: :btree
  end

end
