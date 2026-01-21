# Design Specifications

## For Locate-A-Socket

Version 0.1\
Prepared by Joshua Kempster\
Deakin University\
21/01/2026

## Revision History

| Name            | Date       | Reason For Changes | Version |
| --------------- | ---------- | ------------------ | ------- |
| Joshua Kempster | 21/01/2026 | Initial Draft      | 0.1     |

## Roles

- Driver: an end user of the application – to navigate to and use charging sockets
- Socket supplier: a user of the application – to update and maintain the information on their charging network
- Support staff: a professional who assists customers with their enquiries
- Admin: a professional who maintains and configures the platform
- Developer: a professional who develops the platform
- Analyst: a professional who analyses app and user data
- Company executive: a professional who runs and is responsible for company operations

## User Stories

| ID    | Role                 | Story                                                                                                                                                                       |
| ----- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| US.1  | Driver               | As a driver, I want to know where a socket is and if it is available, so that I can decide whether to navigate to it.                                                       |
| US.2  | Driver               | As a driver, I want to know the price of a socket, so that I can compare it to others and decide which best fits my needs.                                                  |
| US.3  | Driver               | As a driver, I want to know the charging speed of a socket, so that I can compare it to others and decide which best fits my needs.                                         |
| US.4  | Socket supplier      | As a socket supplier, I want my branding on the sockets, so that I can build brand recognition and loyalty.                                                                 |
| US.5  | Support staff/Admin  | As support staff, I want to see user interaction data, so that I can help the customer use the application .                                                                |
| US.6  | Product/Data Analyst | As an analyst, I want to see user interaction data, so that I can understand and address pain points.                                                                       |
| US.7  | Driver               | As a driver, I want to easily get support for an issue, so that I can solve my problem and return to using the service quickly.                                             |
| US.8  | Socket supplier      | As a socket supplier, I want to ensure that my socket information is up to date, so that I can provide the correct service to users.                                        |
| US.9  | Driver               | As a driver, I want to easily make and log in to an account, so that I can keep my personal information saved for each transaction or interaction.                          |
| US.10 | Driver               | As a driver, I want an account, so that I can save my favourite charging locations.                                                                                         |
| US.11 | Driver               | As a driver, I want to be assured that my information is kept safe, so that my identity and capital is not threatened                                                       |
| US.12 | Company executive    | As a company executive, I want to ensure there are no security breaches, so that the viability and reputation of the company is not affected                                |
| US.13 | Driver               | As a driver, I want the application to be available whenever I need to charge my vehicle, so that I am not left stranded without a socket.                                  |
| US.14 | Socket supplier      | As a socket supplier, I want the application to be highly available, so that my business is not affected, and I do not waste time trying to resolve customer issues.        |
| US.15 | Support staff        | As an IT or customer support staff, I want the application to be highly available, so that my time is not wasted fixing issues and responding to customer complaints.       |
| US.16 | Driver               | As a driver, I want to easily and reliably make payments online, so that I can interact with a socket entirely from within the app.                                         |
| US.17 | Socket supplier      | As a socket supplier, I want to receive payments, so that I can offer the customer the charging service.                                                                    |
| US.18 | Company executive    | As a company owner/executive, I want to reliably receive payments, so that my company is profitable.                                                                        |
| US.18 | Company executive    | As an IT support staff, I want integration with the payment platform to be seamless and backward compatible, so that the number of errors and missed payments is minimised. |

## Use Cases

### UC.1 – Making an Account

Primary Actor: Driver | Secondary Actor: Signup Backend\
Description: Drivers must sign up to use the application. They can create an account by entering their email and password.\
Basic Flow:

1. Driver clicks the "Sign Up" button
2. System displays the account creation form
3. Driver enters their email address, creates a password, and confirms the password
4. Driver reviews the terms of service and privacy policy, and confirms acceptance
5. Driver submits the form
6. System validates the email format and password strength
7. System checks that the email is not already registered
8. If validation passes, system creates the new account and stores the driver's information securely
9. System sends a confirmation email to the driver's provided email address
10. Driver is prompted to verify their email by clicking a link in the confirmation email
11. System confirms email verification and account is now active

### UC.2 – Logging into an Account

Primary Actor: Driver | Secondary Actor: Account Backend\
Description: Drivers can log in to their already created account.\
Basic Flow:

1. Driver opens the application and clicks the "Log In" button
2. System displays the login form with email and password fields
3. Driver enters their email address and password
4. Driver clicks "Log In"
5. System validates the credentials against the stored account information
6. If credentials are correct, system authenticates the driver and logs them in
7. System displays the main map view, with the driver now logged in

### UC.3 – Logging out of an Account

Primary Actor: Driver | Secondary Actor: Account Backend\
Description: Drivers can log out of their account.\
Basic Flow:

1. Driver clicks the "Log Out" or "Sign Out" button, typically located in a menu or settings area
2. System terminates the driver's session
3. System redirects the driver to the login screen and removes access to features requiring authentication

### UC.4 – Adding Payment Details

Primary Actor: Driver | Secondary Actor: Data Backend\
Description: Drivers need to pay to use a socket, so they must be able to add and remove payment details.\
Basic Flow:

1. Driver navigates to the payment settings section within their account
2. Driver selects "Add Payment Method"
3. Driver enters payment details (card number, expiry date, CVV, cardholder name, billing address)
4. System validates the payment information
5. System securely stores the payment details
6. System displays confirmation message to the driver
7. Driver can now use this payment method to pay for sockets

Alternative Flow:

2. Driver clicks "Remove Payment Method" next to the relevant payment method they want to remove
3. System removes specified payment method
4. System displays a confirmation message to the driver.

### UC.5 – Browsing Sockets

Primary Actor: Driver | Secondary Actor: Data Backend\
Description: Drivers can use the map interface to browse the sockets near them (or anywhere on the map). Nice to have: toggle for a list interface; search function by name or address.\
Basic Flow:

1. Driver opens the application and navigates to the browse sockets section
2. System retrieves the driver's current location (or allows them to specify a location)
3. System displays sockets on a map interface with pins/markers indicating socket locations
4. Driver can zoom, pan, and interact with the map to view socket information
5. Driver can click on a socket marker to view detailed information (price, charging speed, availability, branding, number of available sockets)
6. Driver can filter sockets by price, charging speed, availability, or supplier

### UC.6 – Navigating to a Socket

Primary Actor: Driver | Secondary Actor: Map Integration\
Description: Drivers can use the in-app map functionality to navigate to a socket, or be redirected to the map app of their choice. Nice to have: they should be able to find sockets that are conveniently located along their current route, based on the current charge of their vehicle.\
Basic Flow:

1. Driver selects a socket from the map or list view
2. Driver clicks the "Navigate" or "Get Directions" button
3. System offers options: use in-app navigation, open in Google Maps, Apple Maps, or Waze
4. Driver selects their preferred navigation app
5. System either displays turn-by-turn directions within the app, or redirects to the external map application with the socket location as the destination

### UC.7 – Using a Socket

Primary Actor: Driver | Secondary Actor: Socket\
Description: Drivers can unlock and pay for a socket that they are next to using the app. This may be using a QR code or unique alphanumeric code on the charging station, or location-based.\
Basic Flow:

1. Driver arrives at the physical socket location
2. Driver opens the application and navigates to the socket they wish to use
3. System detects the driver's proximity to the socket (location-based) or driver scans the QR code on the charging station
4. Driver is presented with socket details including price per unit, charging speed, and current charge level needed
5. Driver confirms they want to use the socket and initiates the charging session
6. System makes a hold on the driver's payment method on file
7. System sends an unlock signal to the physical socket
8. Socket is unlocked and becomes available for the driver to connect their vehicle
9. System displays confirmation and begins logging the charging session
10. Driver can monitor the charging progress within the app
11. Driver ends the charging session
12. Socket sends amount to system
13. Driver's payment method is charged the appropriate amount
14. Receipt is sent to driver's email (if this setting is enabled)

Alternative Flow:

- Driver can manually enter the alphanumeric code displayed on the charging station instead of scanning QR code or relying on location-based detection

### UC.8 – Contacting Support

Primary Actor: Driver | Secondary Actor: Support staff\
Description: Drivers can contact support directly from the app, using chat or phone function. This provides the support staff with information about their current and recent activity within the application.\
Basic Flow:

1. Driver encounters an issue and clicks the support or help button within the application
2. System displays support options: live chat or phone call
3. Driver selects their preferred support method
4. If chat is selected: System initiates a chat session and provides support staff with driver's account information, current location, and recent activity

Alternative Flow:

4. If phone is selected: System provides a phone number to call or initiates a call, and notifies support staff of the incoming contact with driver information

### UC.9 – Viewing Transactions

Primary Actor: Driver | Secondary Actor: Data backend\
Description: Drivers can view details about their recent transactions including location and receipts.\
Basic Flow:

1. Driver navigates to their account or transaction history section
2. System displays a list of recent transactions sorted by date (most recent first)
3. Driver can view transaction details including: date, time, location/socket name, charging duration, amount charged, payment method used
4. Driver can click on a specific transaction to view full details and receipt

### UC.10 – Updating Socket Information

Primary Actor: Socket supplier | Secondary Actor: Socket backend\
Description: Socket suppliers can manually update their socket information including branding, location, prices and technical specs of the socket via an interface solely for socket suppliers.\
Basic Flow:

1. Socket supplier logs into the supplier-only dashboard
2. System authenticates the supplier and displays their managed sockets
3. Supplier selects a socket they wish to update
4. System displays the socket's current information (location, price, charging speed, availability, branding details)
5. Supplier submits updates to the information fields as needed (e.g., change price per unit, update charging speed, add promotional branding)
6. System validates the updated information
7. System saves the changes and updates the socket information in the driver-facing application
8. System displays confirmation that the socket information has been successfully updated
9. Updates are reflected in the driver application in real-time

## Sequence Diagrams

## Interface

## References

See accompanying SRS document – 2.1P.
