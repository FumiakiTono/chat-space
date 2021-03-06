FactoryGirl.define do

  factory :message do
    body     { Faker::Lorem.sentence }
    image    { Rack::Test::UploadedFile.new("/Users/macuser/Downloads/DSC_0351.JPG", "image/jpeg") }
    group_id "0"
    user_id  "1"
  end
  #ダミーのログインユーザーを生成
  factory :user do
    name  { Faker::Name.name }
    email { Faker::Internet.email }
    password "AAAAAAAA"
  end

end
