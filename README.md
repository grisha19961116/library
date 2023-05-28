// https://github.com/grisha19961116/library.git
// git clone or download zip

// open directory with powershell
// npm i 
// npm run start
// http://localhost:3000

// open again directory in new powershell window
// npx json-server --watch db.json --port 3030
// http://localhost:3030
// books are on http://localhost:3030/books

// in db.json you will be able to modify to adjust fake API
// file db.json lying directly in Project near packages

// types example in book {
      "title": string,
      "author": string,
      "category": string,
      "ISBN": number,
      "createdAt": number,
      "editedAt": number | "--",
      "status": "active" | "deactivated",
      "id": number
    }
