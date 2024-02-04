Rails.configuration.stripe = {
  publishable_key: Rails.application.credentials.dig(Rails.env.to_sym, :stripe, :publishable_key),
  secret_key: Rails.application.credentials.dig(Rails.env.to_sym, :stripe, :secret_key)
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]
Stripe.api_version = '2023-10-16'
