class MessagesController < ApplicationController
  def index
    @messages = Message.all
    @message = Message.new
  end

  def create
    @message = Message.new(create_params)
    @message.save
    redirect_to action: :index
  end

  private
  def create_params
    params.require(:message).permit(:body).merge(user_id: current_user.id )
  end

end
