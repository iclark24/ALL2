class FixColumnName2 < ActiveRecord::Migration[5.2]
  def change
    rename_column :cc_lasses, :cname, :c_name
    rename_column :adventures, :aname, :a_name
    rename_column :magicitems, :mname, :m_name
  end
end
