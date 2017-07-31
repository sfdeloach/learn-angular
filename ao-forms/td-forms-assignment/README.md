# Template Driven Form Exercise

Add a form with the following inputs (and validators):

 - Email address (should not be empty, should be in a valid email address format)
 - A dropdown which allows the user to select one of three different subscriptions: 'Basic', 'Advanced', 'Professional'. Set 'Advanced' as the default
 - A password field (should not be empty)
 - A submit button

Display a warning message if the form is invalid AND was touched. Display a warning message below each input if it's invalid.

Upon submitting the form, you should simply print the value of the form to the console.

Optionally, display the form data as a component.

# App Blueprint

Features:

 - Components: home (assignment instructions), form, form-confirm, form-submit
 - Routing:
 - Service: form-data
 - Model: form
