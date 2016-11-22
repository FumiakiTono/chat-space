require "rails_helper"

describe MessagesController, type: :controller do
  # ダミーメッセージ生成の前にダミーのユーザー情報でログイン、ログアウト
  before do
    @user = create(:user)
    sign_in @user
  end

  after do
    sign_out @user
  end

  describe "GET #index" do
    it "assigns the requested contact @messages" do
      messages = create_list(:message, 3)
      get :index
      expect(assigns(:messages)).to match(messages)
    end

    it "renders the :index template" do
      get :index
      expect(response).to render_template :index
    end
  end

  describe "POST #create" do
    it "save success" do
      expect {
        post :create, message: attributes_for(:message)
      }.to change(Message, :count).by(1)
    end

    it "save failure" do
      expect {
        post :create, message: attributes_for(:message)
      }.to change(Message, :count)
    end

    it "redirect to :index" do
      post :create, message: attributes_for(:message)
      expect(response).to redirect_to root_path(assigns[:messages])
    end

    it "redirect to :index" do
      post :create, message: attributes_for(:message, body: nil)
      expect(response).to redirect_to root_path
    end

  end

end
