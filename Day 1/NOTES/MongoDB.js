//                                    MongoDB
//                                    ---*---

//  It is open source NoSQL,document-oriented database.
//  It stores data in type of JSON format called BSON.
//  It is schema-less.


//                     Structure of MongoDB
//                     --------------------

//                  Database(Group of collections)
//                            |
//                            |
//                            v
//                  Collection(Group of documents)
//                            |
//                            |
//                            v
//                  Documents(actual data (JSON/BSON)
//                            |
//                            |
//                            v
//                  Field(Key-value pairs inside document)


// Eg:-
//     1.   Database:- school(top level folder containing all data)
//     2.   Collection:- students,teacher etc(separate groups for related data)
//     3.   Document:-

//       {
//         "name": "Ali",                     // 4.Field:- Individual key value pair inside document
//         "grade": "8",
//         "subjects": ["Math", "Science"]
//       }



// Features of MongoDB
// -------------------

//    *1) Document based storage
//        - Stores data as JSON-like documents
//        - Very easy to undestand and use

//    *2) Flexible schema
//        - Easy to add or remove fields anytime

//    *3) High performance
//        - MongoDB is fast for:
//           * insert
//           * update
//           * read
//           * delete
//    *4) Horizontal scalability(Sharding)    // SHARDING:- splitting data across multiple servers
//       - Can handle millions of users by distributing data across servers.
//       - Perfect for large apps.

//    *5) Replication
//       - MongoDB creates copies of data on multiple servers.
//       - So even one server crashes,data will be safe.

//    *6) Powerful querying
//       - It can:-
//           * Filter
//           * Sort
//           * Update only certain fields
//           * For analytics:- Use aggregration
//           * Find by condition
//                Eg:-
//                   db.students.find({grade:"9"})

//    *7) Supports geospatial data
//        - Used for:-
//            * Maps
//            * Uber like apps
//            * Location based queries

//    *8) GridFS
//        -Store large files like:-
//            * Videos
//            * Images
//            * PDF

//    *9) cross platform


//  Advantages of MongoDB 
//  --------------------

//    * Schema-very flexible
//    * JSON-like(easy for JavaScript developers)
//    * Handles BIG DATA beautifully
//    * Scalable (perfect for apps with millions of users)
//    * Faster development
//    * Multiple data types supported
//    * High availability (replication)
//    * Great for real-time apps





//MongoDB:- It is the database software.
//      * which is used to 
//              - store data,
//              - manage collections and documents,
//              - Saves data on disk,
//              - Handles queries (insert, find, update, delete)


// MongoDBshell(Mongosh):-It is command-line tool.
//      * Which is used to 
//              - connect mongoDB,
//              - talk to the database,
//              - run commands,
//              - create databases & collections,
//              - insert,delete,read & update data.  

//       * It is a command-line interface used to interact with MongoDB by executing database commands.










//                Database & Collection basics:
//                ----------------------------

//                        Database:-

// Collection:- Group of documents(like table in SQL)
//            * users collection = user documents
//            * orders collection = order documents
// Real life example:-
//      Office --> Database
//      Files --> Collections
//      Papers --> Documents


// a) <dbName>:- Switches to database. Creates database if it doesnt exist.
//         syntax:- 
//             use Database
//         output:-
//            switched to db Database
//      Eg:- if we write,
//                use hospital
//          Output will be,
//                 switched to db hospital 


// b) show dbs :- Displays all existing databases. If data base has no data, it wont appear.
//       command:-
//            show dbs
//       output:-
//              admin   40.00 KiB
//              config  60.00 KiB
//              local   40.00 KiB

// c) db.createCollection() :-Creates collection explicity
//      syntax:-
//            db.createCollection("users")
//      output:-
//            { "ok" : 1 }
//    Eg:-1) db.createCollection('student')
//        output willbe {'ok' : 1}

//       2) db.createCollection('teacher')
//        output will be {'ok' : 1}

// d) show collections:- To see all collections

//     can see:- 
//       student
//       teacher


// e) db : 





//                          Datatypes in MongoDB
//                          ---------*----------


//   MongoDB stores data in BSON format(Binary JSON).
//   BSON supports more datatypes than JSON.

//  Datatypes decides:-
//         * How data store,
//         * How data compared & sorted,
//         * How queries work.


// MongoDB Datatypes:-
//     1) String:- Used to store text data.
//                * used for name,emails & titles.
//                * which written inside quotes.
//                * Eg:- 
//                    "name" : "Shanu"
//                    "email" : "shanu@gmail.com"

//    2) Number:- Used for age,quatity & price
//         a) Integer
//               Eg:-  
//                  "age" : 35
//         b) Double
//               Eg:-  
//                 "price" : 77.88

//    3) Boolean:- Stores true or false values
//              Eg:- 
//                  "isStudent": true
//                  "isAdmin": false

//    4) Date: Used for created time,updated time & Login time
//            * To store date and time in standard format.
//             Eg:-
//                  "createdAt": new Date()
//             * MongoDB stores date in ISODate format internally.

//    5) Array:- Stores multiple values in single fields
//            * Array can store:-
//                - Strings,
//                - Objects,
//                - Numbers, 
//                - Mixed types
//            Eg:- 
//               "Skills": ["Reading", "Cooking", "Gardening"]

//   6) Object(Embedded documents):- hich is a powerful feature of MongoDB
//            * Stores nested data (object inside object).
//            Eg:-
//               "Address": {
//                 "city": "London",
//                 "Post code": "B338TD"   
//                }


//  7) Null :- Empty or unknown value
//            * Used when value is present but used not known yet.
//           Eg:- 
//              "MiddleName" : null 

//   8) ObjectId:- Automatically created unique ID for each document.
//            * Used as a unique identifier for documents.
//            * If we dont provide id, MongoDB automatically create id.
//           Eg:-
//             "_id": ObjectId("65a9f8c123abc456def78901")

//   9) Decimal123:-
//            * Used for high precision numbers
//            * For accuracy
//            * Usedd for banking, Financial calculations, money etc
//           Eg:-
//            "amount": NumberDecimal("12345.67")





//                                 JSON vs BSON

//                  JSON                                           BSON
//    * It is a text based data format.                       * Binary JSON
//           * Used to exchange data b/w systems.             * MongoDB uses BSON internally to store data
//           * It is plain text                               * It is binary format(not plain text)
//           * Easy to write and understand                   * Faster to read and write.
//           * Stores only basic datatypes                    * Supports more datatypes
//           Eg:-                                             Eg:-
//              {                                             {
//               "name": "Shanu",                                 "name": "Shanu",
//               "age": 25,                                       "age": 25,
//               "isActive": true                                 "createdAt": ISODate("2025-01-01"),
//              }                                                 "_id": ObjectId("65a9f8c123abc456def78901")
//                                                            }



//                  Why  MongoDB uses BSON internally??
//                  --------*-------------*----------
//    MongoDB uses BSON internally because databases need speed,accuracy, and efficiency, 
//         not human readability(Database deals with millions of operations .so speed is important than readability).
//   1. Faster Read & Write Performance

//           * BSON is a binary format
//           * Binary data is processed faster than text (JSON)

//           *  MongoDB can:
//              - Read data quickly
//              - Write data quickly
//              - Execute queries faster

//  2. Supports More Data Types 

//         BSON supports advanced types that JSON cannot:
//              * Date
//              * ObjectId
//              * Decimal128
//              * Binary data
//              * Null
//              * Embedded documents

// 3.Fast performance
//             * Faster to parse
//             * Faster queries
//             * Faster indexing

// 4. Accurate date representation
//             * BSON keeps
//               - Real dates as Date type
//               - Numbers as numbers
//               - ObjectId as unique identifier

// 5. Efficient Indexing
//             * BSON stores type information

//             *MongoDB knows:
//               - What type each field is
//               - How much memory it takes
//                  which helps:-
//                   * Index creation faster
//                   * Index searching faster
//                   * Queries more efficient

// 6. Better Storage 

//        - BSON Stores:-
//             * length of field 
//             * type info
//            - So MongoDB knows datatypes quickly and finds data faster. 
//        - Reduces parsing overhead

//        - JSON:- Needs full text parsing every time

// 7. Designed for Large-Scale Systems

// 8. Don't Need to write BSON sepaartely
//      * if we write JSON-like objects,MongoDB automatically converts:-

//          JSON --> BSON       // Converts JSON  to BSON internally and stores BSON on disk

//          BSON --> JSON      // Converts back to JSON when sending data

//  So BSON is internal, JSON is external.

// In simple sentence,MongoDB uses BSON internally because BSON is a binary format that is faster to read and write,
//       supports more data types, preserves accurate data types, enables efficient indexing, optimizes
//       storage, and is suitable for large-scale and high-performance applications.




//                         Insert operations in MongoDB
//                         ------*--------------*------
// It is the operations added new data into the MongoDB collections.

//                    Database----> Contains Collections
//                    Collections -----> Contains Documents
//                        ^
//                        |
//                        |(adds documents into collection)
//         Insert---------|                          
//            |
//            |
//   _________|__________
//  |                    |
//  v                    v
// insertOne()        insertMany()



//  InsertOne()
//  ----*-----
// Add one document into a collection

//  Syntax:- db.collectionName.insertOne({key:value})
//  Eg:-  
//          db.students.insertOne({
//              name: "shanu",
//              age : "35",
//              course: "MongoDB"  
//          })

// MongoDB creates collection automatically when we insert a data, if it doesnot exist and automatically add an _id.
//     
//     Document stored here as BSON.
// Output:-
//     {
//       acknowledged: true,               // Insert success
//       insertedId: ObjectId("...")       // Auto generated unique ID
//     }




//  InsertMany()
//  ----*-----
// Inserts multiple documents at once

// Syntax:- db.collectionName.insertMany([ {},{},{},{},{} ])
// Eg:-
//         db.students.insertMany([
//         {name:"Shan", age:"35"},
//         {name:"Shahanas, age:"34"}])

// Output:-
//       {
//          acknowledged: true,
//          insertedIds: {                    // Each documents gets its own ID.
//            "0": ObjectId("..."),
//            "1": ObjectId("..."),
//            "2": ObjectId("...")
//         }
//       }


//              Ordered vs Unordered Inserts (insertMany)
//              --------*-----------*----------*---------
// ordered: true :- MongoDB stops insertion at the first error.
//         db.users.insertMany(
//            [{ _id: 1 },              // insert data
//             { _id: 1 },              // duplicate key(so error). Stops inserting.
//             { _id: 2 }],             // not inserted. 
//            { ordered: true }
//         )                           // Finally inserted documents is 1. Operation stop in first error


// ordered: false :- allows MongoDB to continue inserting remaining documents even if one document fails.
//         db.users.insertMany(
//            [{ _id: 1 },              // insert data
//             { _id: 1 },              // duplicate key(so error). But skipped  this because of 'ordered:false'.
//             { _id: 2 }],             // inserted. 
//            { ordered: false }
//         )                            // Finally error skipped and inserted documents are 2. 


// In MongoDB, ordered: true inserts documents sequentially and stops on the first error, whereas ordered: false 
//        allows MongoDB to continue inserting remaining documents even if some fail.




//                                 Retrieving Data
//                                 -------*-------
// It is reading data fromm the database by using find() method.

//                                              |
//                                              |
//                       _______________________|_____________________
//                      |                                             |
//                      |                                             |
//                      v                                             v
//                    find()                                    find().pretty()
//           *fetches documents from a collection  
//           * return a cursor   
//           Eg:- db.users.find()                               Eg:-db.users.find().pretty()
//    Output:-
//        { "_id": 1, "name": "Ali", "age": 20 }                {
//       { "_id": 2, "name": "Aisha", "age": 22 }                 "_id" : 1,
//                                                                "name" : "Ali",
//                                                                "age" : 20
//                                                                }
//                                                               {
//                                                                "_id" : 2,
//                                                                "name" : "Aisha",
//                                                                "age" : 22
//                                                                }

//  * Can retrieve specific documents using a query
//     - db.users.find({ age: 22 })                       * db.users.find({ name: "Ali" }).pretty()
//        * find users whose age is 22





// findOne():- Returns one document. Doesnt return a cursor.
//          db.users.findOne({ age: 22 })


// In MongoDB, find() returns a cursor(that points to the result set and fetches documents in batches) because it can retrieve multiple documents, 
//      whereas findOne() directly returns one document and therefore does not return a cursor.




//                                  _id and ObjectId 
//                                  ---*-------*----

// _id :-
//  * It is a unique identifier for every document.
//  * MongoDB automatically creates it if we don't provide one.
//  * It acts like a primary 

// ObjectId:-
//  If we don't give id,MongoDB automatically created an id. That is objectId
//  * A special MongoDB data type
//  * 12 bytes (96 bits) long
//   * Generated automatically by MongoDB

//       Part	             Bytes	               Meaning
//      ------              -------               ---------
1//    Timestamp         	4 bytes	           Time of creation
//     Machine ID         	3 bytes      	   Machine info
//     Process ID	        2 bytes	           Process
//      Counter	            3 bytes	           Auto-increment

// Extracting timestamp: 
//          * which means getting the document creation date and time from the ObjectId.
//             - db.users.findOne()._id.getTimestamp()
//         * To know when data was inserted
//         * To sort documents by creation time
//         * To  debug old or new records


// In MongoDB, _id is a unique identifier for each document, 
//    and the creation time can be extracted from its ObjectId using the getTimestamp() method.



