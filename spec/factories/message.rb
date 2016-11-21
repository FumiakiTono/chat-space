FactoryGirl.define do

  factory :message do
    body     { Faker::Lorem.sentence }
    image    { Rack::Test::UploadedFile.new("/Download/DSC_0351.JPG", "image/jpeg") }
    group_id "0"
    user_id  "1"
  end

end
