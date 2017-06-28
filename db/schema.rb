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

ActiveRecord::Schema.define(version: 20170628181157) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campaigns", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "title"
    t.integer  "goal"
    t.string   "slogan"
    t.string   "city"
    t.string   "country"
    t.date     "start_date"
    t.date     "end_date"
    t.string   "vid_url"
    t.string   "overview"
    t.string   "story"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.string   "square_image_file_name"
    t.string   "square_image_content_type"
    t.integer  "square_image_file_size"
    t.datetime "square_image_updated_at"
    t.string   "overview_image_file_name"
    t.string   "overview_image_content_type"
    t.integer  "overview_image_file_size"
    t.datetime "overview_image_updated_at"
  end

  create_table "contributions", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "reward_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rewards", force: :cascade do |t|
    t.string  "title"
    t.string  "description"
    t.integer "campaign_id"
    t.integer "price"
    t.string  "item"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                        null: false
    t.string   "password_digest",                 null: false
    t.string   "session_token",                   null: false
    t.string   "first_name",                      null: false
    t.string   "last_name",                       null: false
    t.string   "email",                           null: false
    t.integer  "total_contributions", default: 0
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end

end
