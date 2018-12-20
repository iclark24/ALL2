class CreateAdventures < ActiveRecord::Migration[5.2]
  def change
    create_table :adventures do |t|
      t.string :name
      t.string :description
      t.integer :acp
      t.integer :tier
      t.integer :downtime
      t.integer :renown
      t.integer :tcpvalue
      t.belongs_to :character, foreign_key: true

      t.timestamps
    end
  end
end
