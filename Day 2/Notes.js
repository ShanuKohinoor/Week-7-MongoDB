//                      CRUD in MongoDB
//                      -------*-------


//  CRUD are basic operations used to manage data in MongoDB collections.
//      which stands for Create,Read,Update and Delete.

//    1. C:- Create(Insert data)/ Insert operation
//         a) insertOne:- Used to insert single document into the collection.
//         b) insertMany:- Used to insert multiple documents into the collection.

//                       Insert                          
//                         |
//                         |
//                _________|__________
//               |                    |
//               v                    v
//           insertOne()        insertMany()



//   2.  R:- Read (Fetch data)
//         a) find():- Used to retrieve multiple documents from the collection.
//         b) findOne():- Used to retrieve one document which matches the condition.

//                        Read                        
//                         |
//                         |
//                _________|__________
//               |                    |
//               v                    v
//              find()          findOne()


//   3.  U:- Update-(Modify data)/ Update operation
//        a) UpdateOne:- Update the first document which matches the condition.
//                     * If multiple documents match, only one is updated.
//               Eg:- db.students.updateOne(
//                    {name  : 'Shan'},
//                    {$set: {postcode: 996655}})   // update only one student.

//        b) UpdateMany:- Updates all documents that match the condition.
//                     *  Used when the same change is needed for many records.
//              Eg:- db.students.updateMany(
//                    {class:4},
//                    {$set: {subject: 'Science}})  // update all students

//                       Update                          
//                         |
//                         |
//                _________|__________
//               |                    |
//               v                    v
//           updateOne()        updateMany()

//  4.  D:- Delete(Remove data)
//        a) DeleteOne:- Delete only one document that matches the condition
//            Eg:- db.students.deleteOne({name: 'Anu'})

//        b) DeleteMany:- Delete all documents that matches the condition.
//            Eg:- db.students.deleteMany({class: 6})   // delete allstudents from class 6

//              * This is permanant and cannot be retrieved once deleted.

//                       Delete                          
//                         |
//                         |
//                _________|__________
//               |                    |
//               v                    v
//           deleteOne()        deleteMany()



//                             Query filters
//                             ------*------

//    It is condition used inside find(),update() or delete() to select specific documents from a collection.
//    Any condition written inside {} of a query, is called query filter.
//      Eg:- db.studentts.find({age: {$gt:12}})     // which helps to findout all students with >12 years age

//  1) Comparison operators
//  2) Logical operators
//  3) Element operators
//  4) Evaluation operators
//  5) Array Query Operators


//  1) Comparison operators:- Used to compare values of a field.
//     --------------------
//     Eg:- db.students.find({age:{$gte:5,$lte:10} })     // find students age b/w 5 and 10


//        Operator	             Meaning	                            Example
//        --------              --------                                -------

//          $eq             	Equal to	                 db.students.find({ age: { $eq: 25 } })    //   find students age = 25
//          $ne	                Not equal to	             db.students.find( { age: { $ne: 25 } })  //   find students age is not equal to 25
//          $gt             	Greater than	             db.students.find( { age: { $gt: 25 } })  //   find students age > 25
//          $gte	            Greater than or equal	     db.students.find( { age: { $gte: 25 } })  //   find students age ≥ 25
//          $lt	                Less than                    db.students.find( { age: { $lt: 30 } } )  //   find students age < 30
//          $lte	            Less than or equal	         db.students.find( { age: { $lte: 30 } })  //   find students age ≤ 30
//          $in	                In array(value must in
//                               the list)	                 db.students.find( { age: { $in: [25,30] }})  //   find students whose age = 25 or 30
//          $nin                In array(value must not
//                              in the list)                db.students.find({age: { $nin: [10, 12, 15] }})  //   find students whose age is not 10,12 or 15



//  2) Logical operators:- Used to combine multiple conditions.
//     -----------------
//         a) $and 
//              * All conditins must be true.
//                 Eg:- db.students.find({
//                      $and: [
//                       {age:{gte:12}}
//                       {class: 5}
//                     ]
//                 })

//        b) $or
//             * Any conditin is true
//                Eg:- db.students.find({
//                     $or [
//                       {class:5},
//                       {age:9}
//                     ]
//                    })

//        c) $not
//             * Used to reverse(negate) the condition in query.  
//                    // Like ,sometimes we don't want greater than, matching a pattern etc.
//                   //  Instead of that we want opposite opposite result. Then we use $not.
//                Eg:- Difference between with and without $not
//                    * without $not:-
//                        db.students.find({ age: { $gt: 18 } })  
//                                          // find students with age greater than 18

//                   * with $not:-
//                        db.students.find({age:{$not:{$gt:18 }}})
//                                        // find students whose age is not greater than 18

//        d) $nor
//             * None of the condition matches
//                Eg:- db.students.find({
//                     $nor: [
//                        { age: 10 },
//                        { class: 5 }
//                     ]
//                    })




//  3) Element operators:- Helps to find existence or type of the field.
//     -----------------
//        a) $exists :- 
//            * Check whether field is exists or not.
//            * Only check existence, doesn't check the value.
//             Eg:-  db.students.find({postcode: {$exists: true}})     // find the document which have postcode as field.
//                   db.students.find({phone: { $exists: false }})     // find document in which phone field doesn't exist

//        b) $type:-
//            * Check the dataType of field.
//            Eg:- db.students.find({postcode: {$type:'int'}})     // Finds documents with postcode is an integer.
//                  a) db.students.find( { name: 'Anu', postcode: 560001 })   // matches 
//                  b) db.students.find({ name: 'Shanu'})  //field is missing...(postcode)




//  4) Evaluation operators:- Used to evaluate expression or patterns instead of directly comparing a field to a fixed value.
//     --------------------
//       a)  $regex :- Regular Expression
//           * Matches strings based on a pattern.
//          Eg:-a.1) db.students.find({ name: { $regex: '^A', $options: 'i' } })    // name starting with 'A', case-insensitive 'i'.
//                                                                           { name: "Anu" }
//                                                                           { name: "alex" }
//                                                                           { name: "Arun" }

//              a.2) db.students.find({ name: { $regex: "n$" } })     // name ends with 'n'

//              a.3) db.students.find({name: {$regex: 'ar', $options: 'i' } })   // name contains 'ar'

//          *We can use in cases like,
//                     - Searching names
//                     - Filtering by starting letters
//                     - Case-insensitive searches
//           * $regex is used for pattern matching in string fields, such as finding names that start with or contain specific characters.



//        b) $expr :- Evaluate expressions
//             * Used to compare fields inside the same document.
//          Eg:- db.students.find({ $expr: { $gt: ["$age", "$mark"] } })   // age greater than  mark
//               db.students.find({ $expr: { $eq: ["$age", "$mark"] }})    // age equal to mark
//             * $expr is used to evaluate expressions and compare one field with another field inside the same document.



//  5) Array Query Operators :- Used to query  documents that contain array fields.
//     --------------------

//      * Which helps to 
//             -  Check what values an array contains
//             -  Match specific conditions inside an array
//             -  Check array length


//            Operator            	Meaning                                   	Example
//            --------             --------                                     -------
//            $all	           Match all elements	                  db.students.find(
//                                                                    { tags: { $all: ["js","node"] } })    // Document must contain both 'js' and 'node'
//            $elemMatch	   Match element with condition	         db.students.find(        
//                                                                    { scores: { $elemMatch: { $gt: 80 } }) }   //Matches documents where at least one element in the array satisfies the given condition.
//            $size	           Match array length	                 db.students.find(
//                                                                    { tags: { $size: 3 } }

 //  $size does not support $gt and $lt









//                               Update modifiers/operators
//                               -------*--------*---------
// Update modifiers helps to tell MongoDB how to update fields.

//   1) $set :- Used to add a new field or update an existing field.
//            * It replaces only that specific field, wont change whole docment.


//   2) $inc :- Used to increase or decreasenumeric value.
//            * Used for counters,age,like,quantity etc.


//   3) $unset :- Used to remove a field completely from the document.
//      * Difference between $unset and deleteOne or deleteMany
//          - $unset removes a FIELD from a document
//          - deleteOne() / deleteMany() remove the ENTIRE document

//   4) $rename :- Renamea field.

//   5) $mul :- multiply a numeric value.

//   6) $min :- set a field only newvalue is smaller.

//   7) $max :- set a field only new value is greater.

//   8) $currentDate :- set the field to current date/time






//                                 Projection
//                                 -----*----

// It is the way to select only specific fields of a document instead of fetching whole documents.
//     * which helps to include or exclude certain fields.

// syntax:-
//        db.collection.find(query,projection)
//            * query - filter for documents(like usual find)
//            *projection - specifies which fields to include(1) or exclude(0)

//               1= show field
//               0= hide field

//    we  can't mix inclusion & exclusion(1 & 0) together except in _id




//                                  Cursor
//                                  --*--

//  It is an object returned by MongoDB, when a find() query is executed, which points to the result set
//      and allows documents to be fetched and processed one by one instead of loading all documents once.

//    * Cursor is an object means it is not an actual data, it is created by MongoDB internally.
//    * it is not a data. It is a pointer.

//    * Whenever we run find(), return cursor.
//        Eg:-  db.students.find()       // instead of return documents directly,here return cursor.

//    * Cursor knows where the matching documents are and it acts like a pointer to query result.

//    * Instead of loading all documents together,with the help of cursr, fetch documents step by step(one by one).
//           - prvents loading all documents helps to save memory.
//           - improves performance for large dataset.       


//                                        Cursor methods  
//                ____________________________________________________________
//               |                   |                   |                    |      
//               |                   |                   |                    |    
//               v                   v                   v                    v
//             sort()              limit()             skip()             forEach()





//         1. Sort()
//         ----*----
//     It is used to arrange documents in either ascending or descending order.
 //    Ascending:-   
//       syntax:-   db.collection.find().sort({ field: 1 })      //  will arrange in ascending order

//             Eg:- db.school.find().sort({ age: 1 })        //  will arrange age in ascending order

//     Descending:-
//       syntax:-   db.collection.find().sort({ field: -1 })      //  will arrange in descending order
//             Eg:- db.school.find().sort({ age: -1 })        //  will arrange age in descending order


//    Sort by multiplr fields:-
//       db.students.find().sort({ class: 1, age: -1 })     //  sort by class first then age inside the class.

// how cursor and sort connected?

//             when we run  db.students.find().sort({ age: 1 })

//                          find() 
//                            |
//                            |
//                            v
//                    creates a cursor
//                            |
//                            |
//                            v
//                         sort()
//                            |
//                            |
//                            v
//             tells the cursor how to order(ascending or descending) 
//                      the documents
//                            |
//                            |
//                            v
//                 cursor return documents in sorted order

//    sort() arranges the order,where cursor return the document.






//        2. Limit()
//         ----*----

//  limit() restricts the number of documents returned by a query.
//     syntax:- db.collection.find().limit(number)

//    Eg:- db.students.find().limit(5)      // returns only 5 documents.

// how cursor and limit connected?

//             when we run  db.students.find().limit(3)

//                          find() 
//                            |
//                            |
//                            v
//                    creates a cursor
//                            |
//                            |
//                            v
//                         limit()
//                            |
//                            |
//                            v
//             tells the cursor to stop after 3 documents
//                            |
//                            |
//                            v
//                 cursor return only first 3 documents 


//       Sort() & Limit()  together:-
//       ------------------------

//          db.students.find().sort({ age: 1 }).limit(10)          // first sort by age, then returns only first 10 documents


//      3. skip()
//      ----*----
//     * It is used to ignore specific number of documents from the start of result set.
//     * Doesn't delete documents
//     syntax:-  db.students.find(query).skip(n)
//        Eg;-a) db.students.find().skip(4)    //  cursor skip first 3 documents from the collecion and
                                             //    start returning documents from 4th. 

 //          b) db.students.find().skip(5).limit(5)   //  skip 5 documents. Then return next 5 documents (from 6th)
                                            
  
 //    4. forEach()
 //    -----*------
 // It is a method used on a cursor (returned by find()) to iterate through each document 
 //    in the result set one by one. It allows  to perform operations on every document
 //      individually without loading all documents into memory at once.

 //    Eg:-
 //         a)   db.students.find().forEach(function(doc) {
 //              print(doc.name);
 //            });                         // Output will be return all names:-   Shanu
 //                                                                               Anu
 //                                                                               Alex

 //        b) db.students.find().forEach(function(doc) {
//               db.students.updateOne(
//                  { _id: doc._id },
//                  { $inc: { age: 1 } }
//               );
//            });                                 // All students age increase by 1









