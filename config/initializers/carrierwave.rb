unless Rails.env.test?
  CarrierWave.configure do |config|
    config.storage = :fog
    config.fog_credentials = {
        :provider               => 'AWS',
        :aws_access_key_id      => ENV['AWS_ACCESS_KEY_ID'],
        :aws_secret_access_key  => ENV['AWS_SECRET_ACCESS_KEY'],
        :region                 => ENV['AWS_REGION'],
        :path_style             => true,
    }

    config.fog_public     = true
    config.fog_attributes = {'Cache-Control' => 'public, max-age=86400'}

    case Rails.env
      when 'production'
        config.fog_directory = 'techcamp-chat-space.com'
        config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/techcamp-chat-space.com'
      when 'staging'
        config.fog_directory = 'stg.techcamp-chat-space.com'
        config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/stg.techcamp-chat-space.com'
      when 'development'
        config.fog_directory = 'dev.techcamp-chat-space.com'
        config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/dev.techcamp-chat-space.com'
    end
  end
else
  CarrierWave.configure do |config|
    config.storage = :file
  end
end