//                                     Indexing
//                                     ----*---

//   * In MongoDB, indexing is used to improve query performance.
//   * Index helps MongoDB to find out documents faster without scanning the entire collection. 
//               - Without indexes, MongoDB do full collection scan.


//                                     Index
//                                     --*--

//  * It is a special data structure which stores a small portion of data in an easy to search form.
//               - like the index page in a notebook(we can find out content/data inside the book by searching the index page
//                  without reading the whole book)

//  * Without index,MongoDB needs to scan page by page inside the DISK to get a document.This is called collection scan.
//              - This is slow for large collections.


// * To avoid reading unnecessary pages, Index is using.
//       * It improves query performance. Because:-
//               - It reduces the no:of documents MongoDB scanned.
//               - It helps to faster read operations. Because:-
//                           -> Index values are sorted(B-Tree in WiredTiger) 
//                           -> Searching is done with tree traversal.
//                           -> Time complexity is very small when compared to scanning all data
//               - Useful for large collections.

//      * Indexes speed up reads but slow down writes.

// * Index is a separate datastructure(not the actual data).
// * It stores:-
//       a) Indexed field value.
//       b) Pointer to the actual document.It is called RecordId(location of the document on the DISK)

//                Eg:-
//                     age Index          RecordId
//                     ---------          --------
//                        20   --------->    A1
//                        50   --------->    C3
//                        45   --------->    D5
//                        30   --------->    B2

// * Indexes stored on DISK.
// * Size of index is smaller than actual data.

// * Index  is based on query patterns.

//                                 When we run a query       
//                                        |
//                                        |  MongoDB doesnt scan all documents
//                                        V
//                                First check the index
//                                        |
//                                        |
//                                        V
//                               Find matching RecordId
//                                        |
//                                        |
//                                        V
//                  With the help of RecordId,find documents from the DISK
//                                        |
//                                        |
//                                        V
//                           Loads the page into RAM
//                                        |
//                                        |
//                                        V
//                               Return the documents


// * Over-indexing can affect performance.


//  * Use:-
//        - Frequently searched fields.
//        - Fields used in filters, sorting, or joins.
//        - Large collections with heavy read operations.

//  * Cannot use in:-
//        - Small collections.
//        - Fields that change frequently.
//        - Collections with heavy write operations.






//                                 Default _id index
//                                 --------*--------
// * Every MongoDB collections automatically has an index on the _id field.
// * _id index ensures each document is unique.
// * This cannot be removed.





//                              Creating and deleting indexes
//                              --------------*--------------

// Indexes helps MongoDB to findout  documents faster. 

// Creating indexes
// ---------------
// * They are created on one or more fields of a collection.
// * When an Index is created, MongoDB builds a separate data structure 
//          that stores field values in an ordered way.
// * MongoDB automatically creates an index on the _id field.
// * Indexes consume extra disk space.
//     - When data is inserted, updated, or deleted, indexes are also updated .
//     - Too many indexes can slow down write operations.

// *  syntax :-
//         db.collection.createIndex({fieldName:1})   //  Ascending Order 

//         db.collection.createIndex({fieldName:-1})   //  Descending Order 

// Eg of compound Index:-
//        db.students.createIndex({ name:-1, age:1})

    

// Deleting indexes
// ---------------
// * Indexes can also be removed if they are not in use.
//     - Deleting unused/ unnecessary indexes helps to save space and improve write performance.
// * Extra unused indexes will slow down  insert,update and delete operations.

//  syntax:-
//     db.collection.dropIndex(/indexName')          // Delete a specific index
//     db.collection.dropIndexes()                   // Delete all indexes except _id

//   Eg:- 1. db.students.dropIndex( 'age_1')  // delete age index
//        2.  db.students.dropIndex('name_1')   // deletes ascending index on name
//        3.  db.students.dropIndex('name_1_age_-1')          // deletes the compound index
//        4.  db.students.dropIndexes()                   // Delete all indexes except _id


// In simple words:-
//    * Create indexes to make queries fast and
//    * delete indexes when they are not needed to save space and improve writes.






//                                        Types of Indexes
//                                        -------*--------

//        _______________________________________|_____________________________________________________________
//       |                 |            |           |          |           |           |           |           |
//       |                 |            |           |          |           |           |           |           |
//       V                 v            v           v          v           v           V           v           v
//    Single-field      Compound     Multikey     Unique      Text        TTL       Partial      Sparse      Hashed



//  1. Single-field Index
//  ---------------------

//  * Index on only one field of collection.
//  * Used when queries filter or sort by that single field.
//      - which helps to speed up find() and sort() operations on that field.
//  * Eg:- Searching students by age (Single-field index on age).
//  * Easy to create, small size, improves performance on simple queries.

//  2. Compound Index
//  ----------------

//  * Index on multiple fields together.
//  * Field order in compound index matters.
//       - Order of field in index affects query performances.
//  * Used when queries filter or sort using multiple fields together.
//  * Eg:- Searching students by age and course (compound index on {age:1, course:1}).


//  3. Multikey Index
//  ------------------

//  * Used when indexing array fields.
//  * MongoDB automatically creates a multikey index for arrays.
//           - Each element of the array is indexed separately.
//  * Useful for array searches like $in and $all.

//  4. Unique Index
//  ---------------

//  * Ensures no duplicate values in indexed field.
//  * Commonly used for emails, usernames, phone numbers.
//  * Trying to insert a duplicate value will throw an error.
//  * Can be combined with compound indexes to ensure uniqueness across multiple fields.
//  * Helps maintain data integrity.

//   5. Text Index
//   -------------

//  * Used for text-based search.
//  * Supports word searching instead of exact match.
//  * Can search for words, phrases, or substrings in string fields.
//  * Supports language-specific rules, stemming, and stop words.
//  * Can create compound text indexes on multiple string fields.
//  * Eg:- Searching blog posts containing "MongoDB" or "Indexing".


//   6. TTL (Time-To-Live) Index
//   ----------------------------

//  * Automatically deletes documents after a certain time.
//  * Useful for logs, sessions, temporary data,cache.
//  * Works with a date field and a time duration.
//  * Eg:- { createdAt: ISODate("...") } with TTL 3600 (deleted after 1 hour).

//  * Reduces manual cleanup tasks.

//  7. Partial Index 
//  ----------------
//  * Indexes only documents that match a condition.
//  * Reduces index size and improves performance for specific queries.
//  * Eg:- Index only completed users ( {status: 'completed'}).

//    Orders collection:
//         { orderId: 1, status: 'completed'}
//         { orderId: 2, status: 'pending' }
//         { orderId: 3, status: 'completed' }

//   Index stores only :-
//           1 --> recordId A1
//           3 --> recordId C3       //because the condition is status = "completed"



//  8. Sparse Index 
//  ---------------
//  * Indexes only documents that contain the indexed field.
//  * MongoDB scans documents
//       - If field exists --> add entry  the index
//       - If field is missing --> ignore document
//          So index becomes smaller,more tahgeted and faster.

//  * Improves query performance for selective queries.
//              Users collection:
//                  { name: "Asha", phone: "9999" }
//                  { name: "Ravi" }
//                  { name: "Neha", phone: "8888" }

// Index store only:-
//             phone index:
//               9999 --> recordId A1
//               8888 --> recordId C3   //  * Document without phone is skipped


// Hashed Index
// ------------
// * It is a special type of index where:-
//       - MongoDB doesn't store the actual field value.
//       - It stores a hashed(converted) value of the field
//               * like MongoDB scrambles the value and stores the scrambled version in the index
//  Eg:-
//            "Alice"     -->  9834#@!
//            "Alice123"  -->  7@!k2#

//    if we store like this:-
//           {
//               patientId: "PAT10001",          // this is without hashed index
//               name: "Aisha"
//          }
//          {
//               patientId: "PAT10002",
//               name: "Sara"
//          }
//        store with normal index, stored close together and there is a chance to cluster the data


//  if we store with hashed index like this,
//              PAT10001 --> x8@2!
//              PAT10002 --> !K9#1
//              PAT10003 --> 4@Q!7

//                    * It will avoid data clustering
//                    * Improve performance in large collections
//                    * Help in sharding

// syntax:-
//         db.patients.createIndex({patientId: 'hashed'})

//                           MongoDB takes patientId 
//                                        |
//                                        |
//                                        V
//                             converts it into hash
//                                        |
//                                        |
//                                        V
//                             stores hash in the index

// we cant see hash.
// MongoDB will handle it.




//  * Difference from partial: sparse indexes include all documents that have the field, no filter condition.





//  _________________________________________________________________________________________________________
// | Index Type                           | Key Points                                                      |
// |______________________________________|_________________________________________________________________|
// | Single-field Index                   | * Index on only one field                                      |
// |                                      | * Used for simple filter or sort queries                       |
// |                                      | * Small size, easy to maintain                                 |
// |______________________________________|_________________________________________________________________|
// | Compound Index                       | * Index on multiple fields together                            |
// |                                      | * Field order matters                                          |
// |                                      | * Used when queries use more than one field                    |
// |______________________________________|_________________________________________________________________|
// | Multikey Index                       | * Used for array fields                                        |
// |                                      | * Each array element is indexed                                |
// |                                      | * Created automatically by MongoDB                             |
// |______________________________________|_________________________________________________________________|
// | Unique Index                         | * Does not allow duplicate values                              |
// |                                      | * Maintains data uniqueness                                     |
// |                                      | * Used for email, username, phone number                       |
// |______________________________________|_________________________________________________________________|
// | Text Index                           | * Used for word-based searching                                |
// |                                      | * Not exact match search                                       |
// |                                      | * Useful for text-heavy data                                   |
// |______________________________________|_________________________________________________________________|
// | TTL Index                            | * Automatically deletes old documents                          |
// |                                      | * Works with date fields                                       |
// |                                      | * Used for logs, sessions, temporary data                      |
// |______________________________________|_________________________________________________________________|
// | Partial Index                        | * Indexes only documents matching a condition                  |
// |                                      | * Reduces index size                                           |
// |                                      | * Improves performance for specific queries                    |
// |______________________________________|_________________________________________________________________|
// | Sparse Index                         | * Indexes only documents that have the field                   |
// |                                      | * Skips documents where field is missing                       |
// |                                      | * Useful for optional fields                                   |
// |______________________________________|_________________________________________________________________|
