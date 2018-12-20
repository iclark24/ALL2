class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.integer :level
      t.string :name
      t.integer :xp
      t.string :race
      t.integer :downtime
      t.integer :renown
      t.integer :gold

      t.timestamps
    end
  end
end
