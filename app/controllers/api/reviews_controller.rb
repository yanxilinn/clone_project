class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy, :update]
    wrap_parameters include: Review.attribute_names + [:trailId, :userId]

    def index
        # debugger
        trail = Trail.find_by(id: params[:trail_id])
        @reviews = trail.reviews
        # @reviews = Review.where(trail_id: params[:trail_id])
        render :index
    end

    def create
        @review = Review.new(review_params)
        @review.rating = 5
        @review.date = Date.today
        if @review.save!
            render :show
        else
            render json: 'Invalid review', status: 401
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review && @review.delete
            render json: {success: ["Successfully Deleted Review"]}
        else
            render json: {error: ["Failed to Delete"]}
        end
    end

    def update
        @review = Review.find_by(id: params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: ['Can not update'], status: 401
        end
    end

    def show
        @review = Review.find_by(id: params[:id])
        render :show
    end

    private
    
    def review_params
        params.require(:review).permit(:id, :user_id, :trail_id, :rating, :body, :date)
    end
end