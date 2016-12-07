CarrierWave.configure do |config|
  config.fog_credentials = {
      :provider               => 'AWS',
      :aws_access_key_id      => ENV['AWS_ACCESS_KEY_ID'],
      :aws_secret_access_key  => ENV['AWS_SECRET_ACCESS_KEY'],
      :region                 => "us-west-2",
      :path_style             => true
  }

  config.fog_public     = false

  case Rails.env
    when 'production'
      config.storage = :fog
      config.fog_directory = 'expert-chat-space'
      config.asset_host = 'https://s3-us-west-2.amazonaws.com/expert-chat-space'
    when 'staging'
      config.storage = :fog
      config.fog_directory = 'expert-chat-space'
      config.asset_host = 'https://s3-us-west-2.amazonaws.com/stg.expert-chat-space'
    when 'development'
      # config.storage = :file
      config.storage = :fog
      config.fog_directory = 'expert-chat-space'
      config.asset_host = 'https://s3-us-west-2.amazonaws.com/dev.expert-chat-space'
    when "test"
      config.storage = :file
  end
end
