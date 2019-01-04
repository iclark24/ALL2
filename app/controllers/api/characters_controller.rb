class Api::CharactersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_character, only: [:show, :update, :destroy]
  before_action :set_params, only: [:create]
  before_action :set_user, only: [:index, :create]


  def index
    render json: [@user.characters.all, @user]
  end
  
  def show
    render json: [@character, @character.cc_lasses, @character.adventures, @character.magicitems]
  end
  
  def create
    character = @user.characters.new(character_params)

    if character.save
      render json: character
    else
      render json: character.errors, status: 422
    end
  end

  def update
    if @character.update(character_params)
      render json: @character
    else
      render json: @character.errors, status: 422
    end
  end

  def destroy
    @character.destroy
  end

  private
    def set_character
      @character = Character.find(params[:id])
    end

    def set_params
      @params = params
    end

    def character_params
      @params.require(:character).permit(:name, :level, :xp, :race, :downtime, :renown, :gold, :image,)
    end

    def set_user
      @user = current_user
    end

end
