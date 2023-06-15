module Mutations
  class CreateUser < BaseMutation
    # TODO: define return fields
    field :user, Types::UserType, null: true
    field :errors, [Types::ErrorType] , null: true

    # TODO: define arguments
    argument :email, String, required: true
    argument :first_name, String, required: true
    argument :last_name, String, required: true
    argument :age, Integer, required: true


    def resolve(**params)
      user = User.new(params)
      if user.valid?
        user.save!
        return {
          user: user,
          errors: [],
        }
      else
        p user.errors.details
        errors = user.errors.details.map do |attribute, details|
          details.map do |error_detail|
            {
              field: attribute.to_s,
              message: user.errors.full_message(attribute, error_detail[:error])
            }
          end
        end.flatten
        return {
          user: nil,
          errors: errors,
        }
      end
    end
  end
end
