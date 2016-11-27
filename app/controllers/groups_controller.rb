class GroupsController < ApplicationController
  before_action :find_group, only: [:edit, :update]

  def new
    @group = Group.new
    @user = User.where("name LIKE(?)", "%#{params[:name]}%")
    @instance = @user[0]
    member = @instance.name
    # binding.pry
    data = { name: member }
    respond_to do |format|
      format.html
      format.json { render json: data }
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

  # def search_params
  #   params.require(:group).permit(:user_ids)
  # end

end
