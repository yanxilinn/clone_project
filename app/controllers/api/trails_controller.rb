class Api::TrailsController < ApplicationController
    def show 
        @trail = Trail.find_by(id: params[:id])
        if @trail
            render :show
        else
            render json: ['Trail does not exist'], status: 404
        end
    end

    def index
        # include associations with .includes
        @trails = Trail.all
        render :index
    end

    def trail_params
        params.require(:trail).permit(:t_name, :length, :longitude, :latitude, :difficulty_level, :elevation_gain, :estimated_time, :description, :contry, :city)
    end
end