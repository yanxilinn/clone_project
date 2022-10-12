class Api::SessionsController < ApplicationController
  # protect_from_forgery with: :null_session
  def show
    if current_user
      @user = current_user
      render 'api/users/show'
    else 
      render json: {user: nil}
    end 
  end

  # before_action :require_logged_in, only: [:create]
  def create
    # email = params[:email]
    # password = params[:password]
    # debugger
    @user = User.find_by_credentials(params[:email], params[:password])
    if @user
      login!(@user)
      render '/api/users/show'
    else
      render json: {errors:['Login failed. The provided credentials were invalid.']}, 
        status: :unauthorized 
    end
  end

  before_action :require_logged_in, only: [:destroy]
  def destroy
    logout!
    render json: { message: 'Success!'}
  end



end
