class DnasController < ApplicationController
  before_action :set_dna, only: [:show, :update, :destroy]

  # GET /dnas
  # GET /dnas.json
  def index
    @dnas = Dna.all

    render json: @dnas
  end

  # GET /dnas/1
  # GET /dnas/1.json
  def show
    render json: @dna
  end

  # POST /dnas
  # POST /dnas.json
  def create
    @dna = Dna.new(dna_params)

    if @dna.save
      render json: @dna, status: :created, location: @dna
    else
      render json: @dna.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /dnas/1
  # PATCH/PUT /dnas/1.json
  def update
    @dna = Dna.find(params[:id])

    if @dna.update(dna_params)
      head :no_content
    else
      render json: @dna.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dnas/1
  # DELETE /dnas/1.json
  def destroy
    @dna.destroy

    head :no_content
  end

  private

    def set_dna
      @dna = Dna.find(params[:id])
    end

    def dna_params
      params.require(:dna).permit(:name, :sequence)
    end
end
