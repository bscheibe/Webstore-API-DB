README FOR API AND DATABASE CALLS.

// 1. Run database
cd to udel-server subdirectory
npm i
mongod

// 2. Then, run api
cd to udel-server in a second terminal
node index.js

// 3. Open postman and run this get request
localhost:3000/api/test

// In case you run into angular issues.
npm install -g npm-check-updates
ncu -u
ng update @angular/cli
npm install


// Registering a new user request
http://localhost:3000/api/auth/register
POST
Headers:
Content-Type application/json
Body:
{
	"email": "email@email.com",
	"firstName": "greg",
	"lastName": "silver",
	"password": "password1",
	"clientid": 1
}

// Logging in as an existing user
localhost:3000/api/auth/login
POST
Headers:
Content-Type application/json
Body:
{
	"email": "email@email.com",
	"password": "password1"
}

// Request a catagory of products
// Returns a JSON array
localhost:3000/api/[clothing or accessories or supplies]
GET
Headers:
Content-Type application/json
Body:

// Add a new product to our database
localhost:3000/api/import
POST
Headers:
Content-Type application/json
Body:
{
		"catagory": "supplies",
    	"price": 1,
    	"quantity": 1000,
		"productName": "Pen",
    	"description": "A nice pen.",
    	"image": "someurl"
}


// Check if our token is valid
// The 'Bearer eyJ....." is just an example, 
// we just put our login token here.
GET /api/auth/authorize HTTP/1.1
Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzA4MDUzNzUyYjUyOTI0Mjk3OGQ0YjMiLCJmaXJzdE5hbWUiOiJiaWxsIiwibGFzdE5hbWUiOiJyb2JlcnRzIiwiZW1haWwiOiJiaWxsQGVtYWlsLmNvbSIsImlhdCI6MTU0NDAzNjQwMCwiZXhwIjoxNTQ0MDQ2NDgwfQ.3pPj50tW3_m8hmS2pfXcTNiI-d-aGhf4hqEQOv4lXC8


// Checkout request
// We give a token and a 'cost' as a put request
PUT /api/auth/transaction HTTP/1.1
Host: localhost:3000
Authorization: Bearer ......token here......
{
	"cost": 500
}
