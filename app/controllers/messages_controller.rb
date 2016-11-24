class MessagesController < ApplicationController
  def index
    @messages = Message.all
    @message = Message.new
  end


  def create
    @message = Message.new(create_params)
    respond_to do |format|
      if @message.save
        # format.html { redirect_to @message }
        format.json {
          render json: {
            name: @message.user.name,
            body: @message.body,
            user_id: @message.user_id,
            created_at: @message.created_at,
            image: @message.image,
            updated_at: @message.updated_at,
            group_id: @message.group_id,
            id: @message.id
          }
        }
      else
        format.html { redirect_to root_path }
        # format.json { render json: @message.errors }
      end
    end
  end

  private
  def create_params
    params.require(:message).permit(:body).merge(user_id: current_user.id )
  end

end
