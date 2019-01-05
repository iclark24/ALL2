class AddSpentToAdventures < ActiveRecord::Migration[5.2]
  def change
    add_column :adventures, :spent, :integer
  end
end
