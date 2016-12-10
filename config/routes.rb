Rails.application.routes.draw do
  root "groups#index"
  devise_for :users
  resources :groups, only: [:new, :create, :edit, :update, :index] do
    resources :messages, only: [:index, :create]
  end
end
