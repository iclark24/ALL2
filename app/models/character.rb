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


  def self.grab(cid)
    select('u.name username, characters.id, level, characters.cname, xp, race, downtime, renown, gold, characters.image image, user_id')
    .joins('INNER JOIN users u ON u.id = characters.user_id')
    .where(id: cid )
  end

  def self.random()
    ids = Character.order("RANDOM()").limit(4).pluck(:id)

    one = Character.grab(ids[0])
    two = Character.grab(ids[1])
    three = Character.grab(ids[2])
    four = Character.grab(ids[3])

    characterlist = [one, two, three, four]

    return characterlist

  end


end
