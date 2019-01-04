Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :characters do
      resources :cc_lasses
      resources :adventures
    end
  end
  get '*other', to: 'static#index'
end