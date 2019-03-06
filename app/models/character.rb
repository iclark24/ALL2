class Character < ApplicationRecord
  belongs_to :user
  has_many :adventures, dependent: :destroy
  has_many :cc_lasses, dependent: :destroy
  has_many :magicitems, dependent: :destroy
  has_one :tcp, dependent: :destroy


  def self.updater(character, params, situation)
    if situation == "new"
      newgold = character.gold - params[:spent].to_f
      newxp = character.xp + params[:acp].to_i
      newdt = character.downtime + params[:downtime].to_i
      newrenown = character.renown + params[:renown].to_i
      character.gold = newgold
      character.xp = newxp
      character.downtime = newdt
      character.renown = newrenown
    else      
      newgold = character.gold + params[:spent].to_f
      newxp = character.xp - params[:acp].to_i
      newdt = character.downtime - params[:downtime].to_i
      newrenown = character.renown - params[:renown].to_i
      character.gold = newgold
      character.xp = newxp
      character.downtime = newdt
      character.renown = newrenown
    end
    return character
  end


end
