class Dna < ActiveRecord::Base
  validates :sequence, presence: true
end
