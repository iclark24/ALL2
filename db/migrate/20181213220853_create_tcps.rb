class CreateTcps < ActiveRecord::Migration[5.2]
  def change
    create_table :tcps do |t|
      t.integer :tierone
      t.integer :tiertwo
      t.integer :tierthree
      t.integer :tierfour
      t.belongs_to :character, foreign_key: true

      t.timestamps
    end
  end
end
