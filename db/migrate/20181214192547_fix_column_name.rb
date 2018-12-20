class FixColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :cc_lasses, :name, :cname
    rename_column :adventures, :name, :aname
    rename_column :magicitems, :name, :mname
  end
end
