class MessagesController < ApplicationController
  def index
    @message = Message.new
    @messages = Message.all
    array = Array.new
    @messages.each do |message|
      mes = message.create_hash(message)
      array << mes
    end
    respond_to do |format|
      format.html {}
      format.json { render json: array }
    end
  end

  def create
    @message = Message.new(create_params)
    respond_to do |format|
      if @message.save
        format.html
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
