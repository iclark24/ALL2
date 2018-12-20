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

ActiveRecord::Schema.define(version: 2018_12_14_204748) do

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
    t.string "name"
    t.integer "xp"
    t.string "race"
    t.integer "downtime"
    t.integer "renown"
    t.integer "gold"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image"
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

  add_foreign_key "adventures", "characters"
  add_foreign_key "cc_lasses", "characters"
  add_foreign_key "magicitems", "characters"
  add_foreign_key "tcps", "characters"
end
