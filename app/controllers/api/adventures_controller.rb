class Api::AdventuresController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  before_action :set_adventure, only: [:show, :update, :destroy]
  before_action :set_character, only: [:create, :destroy]

# adventure controller
  
  def index
    render json: Adventure.all
  end

  # def show
  #   render json: 
  # end
  
  def create
    character = @character
    character = Character.updater(character, params, "new")
    adventure = @character.adventures.new(adventure_params)

    if adventure.save && character.save
      render json: adventure
    else
      render json: adventure.errors, status: 422
    end
  end

  # def update
  #   if @adventure.update(adventure_params)
  #     render json: @adventure
  #   else
  #     render json: @adventure.errors, status: 422
  #   end
  # end

  def destroy
    adventure = @adventure
    params = Adventure.paramer(adventure)
    character = @character
    character = Character.updater(character, params, "delete")

    if character.save
      @adventure.destroy
    end
  end

  private

    def set_character
      @character = Character.find(params[:character_id])
    end

    def set_adventure
      @adventure = Adventure.find(params[:id])
    end

    def adventure_params
      params.require(:adventure).permit(:a_name, :description, :xp, :tier, :downtime, :renown, :tcpvalue, :spent, :character_id)
    end
end