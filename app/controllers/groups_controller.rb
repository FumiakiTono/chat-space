class GroupsController < ApplicationController
  before_action :find_group, only: [:edit, :update]

  def new
    @group = Group.new
    @users = User.all
    array = []
    @users.each do |user|
      array << user.name
    end
    respond_to do |format|
      format.html
      format.json { render json: array }
    end
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to controller: :messages, action: :index
    else
      render action: :new
    end
  end

  def edit
  end

  def update
    if @group.update(group_params)
      redirect_to controller: :messages, action: :index
    else
      render action: :edit
    end
  end

  private
  def group_params
    params.require(:group).permit(:name)
  end

  def find_group
    @group = Group.find(params[:id])
  end

end
