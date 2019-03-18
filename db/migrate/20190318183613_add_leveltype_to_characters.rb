class AddLeveltypeToCharacters < ActiveRecord::Migration[5.2]
  def change
    add_column :characters, :characters, :string
    add_column :characters, :leveltype, :string
  end
end
