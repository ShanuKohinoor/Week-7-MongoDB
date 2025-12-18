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









