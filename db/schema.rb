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

ActiveRecord::Schema.define(version: 2019_03_12_220532) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "adventures", force: :cascade do |t|
    t.string "a_name"
    t.string "description"
    t.integer "acp"
    t.integer "tier"
    t.integer "downtime"
    t.integer "renown"
    t.integer "tcpvalue"
    t.bigint "character_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "spent"
    t.index ["character_id"], name: "index_adventures_on_character_id"
  end

  create_table "cc_lasses", force: :cascade do |t|
    t.string "c_name"
    t.integer "level"
    t.bigint "character_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_cc_lasses_on_character_id"
  end

  create_table "characters", force: :cascade do |t|
    t.integer "level"
    t.string "cname"
    t.integer "xp"
    t.string "race"
    t.integer "downtime"
    t.integer "renown"
    t.integer "gold"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image"
    t.bigint "user_id"
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "magicitems", force: :cascade do |t|
    t.string "m_name"
    t.string "description"
    t.integer "tcpvalue"
    t.bigint "character_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_magicitems_on_character_id"
  end

  create_table "tcps", force: :cascade do |t|
    t.integer "tierone"
    t.integer "tiertwo"
    t.integer "tierthree"
    t.integer "tierfour"
    t.bigint "character_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_tcps_on_character_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "dci"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "adventures", "characters"
  add_foreign_key "cc_lasses", "characters"
  add_foreign_key "characters", "users"
  add_foreign_key "magicitems", "characters"
  add_foreign_key "tcps", "characters"
end
