class Character < ApplicationRecord
  belongs_to :user
  has_many :adventures, dependent: :destroy
  has_many :cc_lasses, dependent: :destroy
  has_many :magicitems, dependent: :destroy
  has_one :tcp, dependent: :destroy

  def self.modgold(newgold, c_id)
    Character.find_by_sql(["
      UPDATE characters AS c
      SET gold = ?
      WHERE c.id = ?
    ;", newgold, c_id])
  end

end
