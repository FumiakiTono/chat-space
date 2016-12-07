# encoding: utf-8

class ImageUploader < CarrierWave::Uploader::Base

  storage :fog
  include CarrierWave::RMagick

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  version :thumb do
    process :resize_to_limit => [300, 300]
  end

end
