class Character < ApplicationRecord
  has_many :adventures, dependent: :destroy
  has_many :cc_lasses, dependent: :destroy
  has_many :magicitems, dependent: :destroy
  has_one :tcp, dependent: :destroy
end
