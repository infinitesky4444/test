<div align="center">
    <h1>Open "Fair-Code" Source ERP / CRM | Node.js React.js</h1>
</div>

`username : admin@demo.com password : admin123`

## Getting started

#### Step 1: Check the program

- In your terminal, navigate to the /backend directory of the project and run the following command to install the backend dependencies:

```bash
npm run server
```

- Check your errors and next to the setp2.

#### Step 2: Create Your MongoDB Account and Database/Cluster

- Create your own MongoDB account by visiting the MongoDB website and signing up for a new account.

- Create a new database or cluster by following the instructions provided in the MongoDB documentation. Remember to note down the "Connect to your application URI" for the database, as you will need it later. Also, make sure to change `<password>` with your own password

- add your current IP address to the MongoDB database's IP whitelist to allow connections (this is needed whenever your ip changes)

#### Step 3: Edit the Environment File

- Check a file named .env in the /backend directory.

  This file will store environment variables for the project to run.

#### Step 4: Update MongoDB URI

In the .env file, find the line that reads:

`DATABASE="your-mongodb-uri"`

Replace "your-mongodb-uri" with the actual URI of your MongoDB database.

#### Step 5: Install Backend Dependencies

In your terminal, navigate to the /backend directory of the project and run the following command to install the backend dependencies:

```bash
npm install
```

This command will install all the required packages specified in the package.json file.

#### Step 6: Run Setup Script

While still in the /backend directory of the project, execute the following command to run the setup script:

```bash
npm run setup
```

This setup script may perform necessary database migrations or any other initialization tasks required for the project.

#### Step 7: Run the Backend Server

In the same terminal, run the following command to start the backend server:

```bash
npm run dev
```

This command will start the backend server, and it will listen for incoming requests.

#### Step 8: Install Frontend Dependencies

Open a new terminal window , and run the following command to install the frontend dependencies:

```bash
cd frontend
```

```bash
npm install
```

#### Step 9: Run the Frontend Server

After installing the frontend dependencies, run the following command in the same terminal to start the frontend server:

```bash
npm run dev
```

This command will start the frontend server, and you'll be able to access the website on localhost:3000 in your web browser.

:exclamation: :warning:` If you encounter an OpenSSL error while running the frontend server, follow these additional steps:`

```bash
npm run start
```

### Website Login Credentials

Once the website is up and running, you can log in using the following credentials:

`username : admin@demo.com - password : admin123`

Now you should be all set to run the project locally on your machine and explore its features.
