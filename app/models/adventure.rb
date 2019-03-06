class Adventure < ApplicationRecord
  belongs_to :character

  def self.paramer(adventure)
    params = {acp:adventure.acp, downtime:adventure.downtime, renown:adventure.renown, spent:adventure.spent}
    return params
  end

end
