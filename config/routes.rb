Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :show, :destroy]
    resources :campaigns, only: [:index, :show, :create, :edit]
    resources :carousels, only: [:index]
    resources :contributions, only: [:create]
    resources :about, only: [:index]
  end

end
