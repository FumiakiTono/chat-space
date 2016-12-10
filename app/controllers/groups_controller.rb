class GroupsController < ApplicationController
  before_action :find_group, only: [:edit, :update]
  before_action :authenticate_user!

  def new
    @group = Group.new
    @users = User.all
    respond_to do |format|
      format.html
      format.json { render json: @users }
    end
  end

  def index
    @groups = Group.all
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to group_messages_path(@group), notice: "グループが生成されました"
    else
      render new_group_path
    end
  end

  def edit
  end

  def update
    if @group.update(group_params)
      redirect_to group_messages_path(@group)
    else
      render action: :edit
    end
  end

  private
  def group_params
    params.require(:group).permit(:name, user_ids: [])
  end

  def find_group
    @group = Group.find(params[:id])
  end

end
