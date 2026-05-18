# 3b_CRUD

## How to Run

1. Open a terminal in this folder.
2. Install dependencies:
```bash
npm install
```
3. Start the server:
```bash
node server.js
```

## Test the API with Postman

### CREATE (POST) Request

1. Open Postman and create a new **POST** request to `http://localhost:3000/api/users`.
2. In the "**Body**" tab, select **raw** and set the format to **JSON**.
3. Paste the following data:
```json
{ 
    "name": "abc Singh", 
    "email": "abc@ait.edu" 
}
```
4. Click **Send**. You should see the user returned with an `_id` confirming it was saved in your database.

### READ (GET) Request
1. Create a new **GET** request to `http://localhost:3000/api/users`.
2. Click **Send**. You should see a list of all users in the response.
3. *Note: You can also append a specific user ID to the URL (e.g., `http://localhost:3000/api/users/<user_id>`) to get a single user.*

###  UPDATE (PUT) Request
1. Create a new **PUT** request to `http://localhost:3000/api/users/<user_id>`.
2. In the "**Body**" tab, select **raw** and set the format to **JSON**.
3. Paste the updated data:
```json
{ 
    "name": "abc Singh Updated", 
    "email": "new_abc@ait.edu" 
}
```
4. Click **Send**. You should see the updated user details.

### DELETE Request
1. Create a new **DELETE** request to `http://localhost:3000/api/users/<user_id>`.
2. Click **Send**. You should get a success message confirming the user was deleted.

