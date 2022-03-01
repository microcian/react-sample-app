import validation from 'validate.js'

export default function validateWrapper(fieldName, value) {
	var constraints = {

		full_name: {
			presence: true,
			length: {
				minimum: 2,
				message: 'should contain at least 2 characters',
			}
		},
		email: {
			presence: true,
			format: {
				pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				message: 'is invalid',
			}
		},
		password: {
			presence: true,
			length: {
				minimum: 8,
				message: 'should contain at least 8 characters',
			}
		},
		confirmPassword: {
			presence: true,
			equality: 'password'
		},
		phoneNo: {
			presence: true,
			format: {
				pattern: "^[0-9]{10}$",
				message: 'Invalid phone number',
			},
		},
	};

	var formValues = {}
	formValues[fieldName] = value

	var formFields = {}
	formFields[fieldName] = constraints[fieldName]


	const result = validation(formValues, formFields)

	if (result && value != '') {
		return result[fieldName][0]
	}
	return null
}