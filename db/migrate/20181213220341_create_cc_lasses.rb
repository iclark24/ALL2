class CreateCcLasses < ActiveRecord::Migration[5.2]
  def change
    create_table :cc_lasses do |t|
      t.string :name
      t.integer :level
      t.belongs_to :character, foreign_key: true

      t.timestamps
    end
  end
end
