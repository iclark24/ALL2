class Api::CcLassesController < ApplicationController
  before_action :set_cc_lass, only: [:show, :update, :destroy]
  before_action :set_character, only: [:create]

# classes controller
  
  def index
    render json: Cc_lass.all
  end

  # def show
  #   render json: 
  # end
  
  def create
    cc_lass = @character.cc_lasses.new(cc_lass_params)

    if cc_lass.save
      render json: cc_lass
    else
      render json: cc_lass.errors, status: 422
    end
  end

  def update
    if @cc_lass.update(cc_lass_params)
      render json: @cc_lass
    else
      render json: @cc_lass.errors, status: 422
    end
  end

  def destroy
    @cc_lass.destroy
  end

  private

    def set_character
      @character = Character.find(params[:character_id])
    end

    def set_cc_lass
      @cc_lass = Cc_lass.find(params[:id])
    end

    def cc_lass_params
      params.require(:cc_lass).permit(:c_name, :level, :character_id)
    end
end
