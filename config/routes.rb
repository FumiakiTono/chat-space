Rails.application.routes.draw do
  devise_for :users
  root "messages#index"
  resources :messages, only: [:index, :create]
  resources :groups, only: [:new, :create, :edit, :update]
end
