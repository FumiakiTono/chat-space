class MessagesController < ApplicationController
  def index
    @messages = Message.all
    @message = Message.new
  end

  def create
    @message = Message.new(create_params)
    respond_to do |format|
      if @message.save
        format.json {
          render json: @message.create_hash(@message)
        }
      else
        format.json { redirect_to root_path, alert: "メッセージを入力してください。" }
      end
    end
  end

  private
  def create_params
    params.require(:message).permit(:body, :image).merge(user_id: current_user.id)
  end

end
