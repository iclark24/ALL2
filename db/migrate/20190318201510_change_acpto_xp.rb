class ChangeAcptoXp < ActiveRecord::Migration[5.2]
  def change
    rename_column :adventures, :acp, :xp
  end
end
