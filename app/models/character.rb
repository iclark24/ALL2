class Character < ApplicationRecord
  belongs_to :user
  has_many :adventures, dependent: :destroy
  has_many :cc_lasses, dependent: :destroy
  has_many :magicitems, dependent: :destroy
  has_one :tcp, dependent: :destroy


  def self.updater(character, params, situation)
    if situation == "new"
      newgold = character.gold + params[:spent].to_f
      newxp = character.xp + params[:xp].to_i
      newdt = character.downtime + params[:downtime].to_i
      newrenown = character.renown + params[:renown].to_i
      character.gold = newgold
      character.xp = newxp
      character.downtime = newdt
      character.renown = newrenown
    else      
      newgold = character.gold - params[:spent].to_f
      newxp = character.xp - params[:xp].to_i
      newdt = character.downtime - params[:downtime].to_i
      newrenown = character.renown - params[:renown].to_i
      character.gold = newgold
      character.xp = newxp
      character.downtime = newdt
      character.renown = newrenown
    end
    Character.levelup(character)
    return character
  end
  
  def self.levelup(character)
    if character.levelmeth === "EXP"
      case character.xp
        when 0..299
          character.level = 1
        when 300..899
          character.level = 2
        when 900..2699
          character.level = 3
        when 2700..6499
          character.level = 4
        when 6500..13999
          character.level = 5
        when 14000..22999
          character.level = 6
        when 23000..33999
          character.level = 7
        when 34000..47999
          character.level = 8
        when 48000..63999
          character.level = 9
        when 64000..84999
          character.level = 10
        when 85000..99999
          character.level = 11
        when 100000..119999
          character.level = 12
        when 120000..139999
          character.level = 13
        when 140000..164999
          character.level = 14
        when 165000..194999
          character.level = 15
        when 195000..224999
          character.level = 16
        when 225000..264999
          character.level = 17
        when 265000..304999
          character.level = 18
        when 305000..354999
          character.level = 19
        else
          character.level = 20
      end
    else
      case character.xp
        when 0..3
          character.level = 1
        when 4..7
          character.level = 2
        when 8..11
          character.level = 3
        when 12..15
          character.level = 4
        when 16..23
          character.level = 5
        when 24..31
          character.level = 6
        when 32..39
          character.level = 7
        when 40..47
          character.level = 8
        when 48..55
          character.level = 9
        when 56..63
          character.level = 10
        when 64..71
          character.level = 11
        when 72..79
          character.level = 12
        when 80..87
          character.level = 13
        when 88..95
          character.level = 14
        when 96..103
          character.level = 15
        when 104..111
          character.level = 16
        when 112..119
          character.level = 17
        when 120..127
          character.level = 18
        when 128..135
          character.level = 19
        else
          character.level = 20
      end
    end
      
    return character

  end

  def self.grab(cid)
    select('u.name username, characters.id, level, characters.cname, xp, race, downtime, renown, gold, levelmeth,characters.image image, user_id')
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
