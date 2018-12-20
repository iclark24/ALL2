class CreateMagicitems < ActiveRecord::Migration[5.2]
  def change
    create_table :magicitems do |t|
      t.string :name
      t.string :description
      t.integer :tcpvalue
      t.belongs_to :character, foreign_key: true

      t.timestamps
    end
  end
end
