## ADDED Requirements

### Requirement: Form submission sends lead to commercial team

The system SHALL accept a contact form submission from the `/contato` page and deliver an email to the StudioDev commercial inbox via Resend containing the submitter's name, company, email, phone (if provided), area of interest, and message.

#### Scenario: Successful submission with all fields

- **WHEN** a visitor submits the form with valid required fields (name, company, email, message) and optional phone
- **THEN** the system sends an internal notification email to `contato@studiodev.com.br`
- **AND** the visitor sees a success toast confirming the request was sent

#### Scenario: Successful submission without phone

- **WHEN** a visitor submits the form with valid required fields and leaves phone empty
- **THEN** the system sends the internal notification email without a phone value
- **AND** the visitor sees a success toast

### Requirement: Client-side validation before submit

The system SHALL validate contact form fields on the client before calling the API, using the same rules as today: required name, company, email, and message; email format check; field length limits; and honeypot rejection.

#### Scenario: Missing required field

- **WHEN** a visitor submits with any required field empty
- **THEN** the system shows an error toast asking to fill required fields
- **AND** no API request is made

#### Scenario: Invalid email format

- **WHEN** a visitor submits with an email that does not match a valid corporate email pattern
- **THEN** the system shows an error toast about invalid email
- **AND** no API request is made

### Requirement: Server-side validation and anti-spam

The API endpoint SHALL re-validate all submitted fields server-side and reject honeypot submissions silently with a generic success response to avoid revealing spam detection.

#### Scenario: Honeypot field filled

- **WHEN** the `website` honeypot field contains any non-empty value
- **THEN** the API returns HTTP 200 with a generic success message
- **AND** no email is sent via Resend

#### Scenario: Invalid payload on server

- **WHEN** the API receives a payload missing required fields or with invalid email format
- **THEN** the API returns HTTP 400 with a generic validation error message
- **AND** no email is sent via Resend

### Requirement: Secure API key handling

The Resend API key SHALL only be stored and used in the serverless function environment. The client application MUST NOT include or expose the API key.

#### Scenario: Client bundle inspection

- **WHEN** the production client bundle is built
- **THEN** no Resend API key or server-only secrets appear in client-side code

### Requirement: User feedback on API errors

The system SHALL show a user-friendly error toast when the API is unreachable or returns a non-success response, without exposing internal error details.

#### Scenario: Resend or server failure

- **WHEN** the API fails to send the email due to a server or Resend error
- **THEN** the visitor sees an error toast asking to try again or use direct email contact
- **AND** the form retains the entered data (does not reset)

#### Scenario: Network failure

- **WHEN** the client cannot reach the API endpoint
- **THEN** the visitor sees an error toast about connection failure
- **AND** the loading state ends

### Requirement: Loading state during submission

The system SHALL disable the submit button and show a processing label while the API request is in flight.

#### Scenario: Submit in progress

- **WHEN** a visitor clicks submit with valid data
- **THEN** the submit button is disabled and shows "Processando..."
- **AND** the button re-enables after the request completes (success or error)

### Requirement: Form reset after success

The system SHALL clear all form fields to their initial state after a successful submission.

#### Scenario: Successful send

- **WHEN** the API returns a success response
- **THEN** all visible form fields are reset to empty/default values
- **AND** the honeypot field is cleared

### Requirement: Verified sender domain

Outbound emails SHALL be sent from an address on a domain verified in Resend (e.g., `contato@studiodev.com.br` or `noreply@studiodev.com.br`).

#### Scenario: Production email delivery

- **WHEN** an email is sent in production
- **THEN** the `from` address uses the verified `studiodev.com.br` domain configured in Resend
- **AND** the email is delivered without domain verification errors
