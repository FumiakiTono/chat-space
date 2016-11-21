FactoryGirl.define do

  factory :message do
    body     { Faker::Lorem.sentence }
    image    { Faker::Avatar.image }
    group_id "0"
    user_id  "1"
  end

end
