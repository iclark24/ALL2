class Adventure < ApplicationRecord
  belongs_to :character

  def self.paramer(adventure)
    params = {xp:adventure.xp, downtime:adventure.downtime, renown:adventure.renown, spent:adventure.spent}
    return params
  end

end
