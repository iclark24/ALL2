class RemoveCharactersFromCharacters < ActiveRecord::Migration[5.2]
  def change
    remove_column :characters, :characters, :string
  end
end
