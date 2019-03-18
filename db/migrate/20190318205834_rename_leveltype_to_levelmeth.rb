class RenameLeveltypeToLevelmeth < ActiveRecord::Migration[5.2]
  def change
    rename_column :characters, :leveltype, :levelmeth
  end
end
