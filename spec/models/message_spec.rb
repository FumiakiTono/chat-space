require "rails_helper"
describe Message do
  describe "#create" do
    it "is invalid with a body" do
      message = build(:message)
      expect(message).to be_valid
    end

    it "is invalid without a body" do
      message = build(:message, body: nil)
      message.valid?
      expect(message.errors[:body]).to include("を入力してください")
    end
  end
end
