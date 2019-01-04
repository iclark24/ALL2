class Api::AdventuresController < ApplicationController
  before_action :set_adventure, only: [:show, :update, :destroy]
  before_action :set_character, only: [:create]

# adventure controller
  
  def index
    render json: Adventure.all
  end

  # def show
  #   render json: 
  # end
  
  def create
    adventure = @character.adventures.new(adventure_params)

    if adventure.save
      render json: adventure
    else
      render json: adventure.errors, status: 422
    end
  end

  def update
    if @adventure.update(adventure_params)
      render json: @adventure
    else
      render json: @adventure.errors, status: 422
    end
  end

  def destroy
    @adventure.destroy
  end

  private

    def set_character
      @character = Character.find(params[:character_id])
    end

    def set_adventure
      @adventure = Adventure.find(params[:id])
    end

    def adventure_params
      params.require(:adventure).permit(:a_name, :description, :acp, :tier, :downtime, :renown, :tcpvalue, :character_id)
    end
end