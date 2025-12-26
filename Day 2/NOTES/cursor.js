//                                  Cursor
//                                  --*--

//  It is an object returned by MongoDB, when a find() query is executed, which points to the result set
//      and allows documents to be fetched and processed one by one instead of loading all documents once.

//    * Cursor is an object means it is not an actual data, it is created by MongoDB internally.
//    * it is not a data. It is a pointer.

// Definition:- Cursor is a pointer that references the documents of collection returned by the find method
//          * It allows to iterate over the documents in the result set.
//          * By default the cursor iterates automatically,but it can iterate manually too by the user.


//    * Whenever we run find(), return cursor.
//        Eg:-  db.students.find()       // instead of return documents directly,here return cursor.

//    * Cursor knows where the matching documents are and it acts like a pointer to query result.

//    * Instead of loading all documents together,with the help of cursr, fetch documents step by step(one by one).
//           - prvents loading all documents helps to save memory.
//           - improves performance for large dataset.       


//                                        Cursor methods  
//    _________________________________________________________________________________________
//   |              |              |              |             |            |                |        
//   |              |              |              |             |            |                |
//   v              v              v              v             v            v                v
// sort()        limit()         skip()       forEach()     toArray()     pretty()      countDocuments()





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



//   5) toArray()
//   -----*------
//    It is a cursor method that converts all documents referenced by cursor into a javascript array.
//        *  If we dont use toArray, MongoDB doesn't fetch all documents at once.

//  syntax:- db.students.find().toArray

//       Output will be like:-
            // [
            // {
            //     _id: ObjectId('693fa595c5d7f5eb8b1e2621'),
            //     name: 'Shanu',
            //     course: '8'
            // },
            // {
            //     _id: ObjectId('693ffa7501d39878251e2621'),
            //     name: 'Shan Pullani',
            //     course: 'English',
            //     marks: 99,
            //     isPassed: true,
            //     dob: ISODate('2015-08-02T00:00:00.000Z'),
            //     joiningDate: ISODate('2018-04-01T00:00:00.000Z'),
            //     subjects: [ 'Grammar', 'Literature', 'Poetry' ],
            //     address: { houseName: 'Pullaniyil', pincode: 668899 }
            // },
            // {
            //     _id: ObjectId('693ffbaa01d39878251e2623'),
            //     name: 'Faraza Pullani',
            //     course: 'English',
            //     marks: 98,
            //     isPassed: true,
            //     dob: ISODate('2017-05-14T00:00:00.000Z'),
            //     joiningDate: ISODate('2021-06-01T00:00:00.000Z'),
            //     subjects: [ 'Grammar', 'Creative Writing', 'Literature' ],
            //     address: { houseName: 'Pullaniyil', pincode: 668899 }
            // },
            // {
            //     _id: ObjectId('693ffbaa01d39878251e2624'),
            //     name: 'Filza Pullani',
            //     course: 'Mathematics',
            //     marks: 93,
            //     isPassed: true,
            //     dob: ISODate('2018-03-22T00:00:00.000Z'),
            //     joiningDate: ISODate('2022-06-01T00:00:00.000Z'),
            //     subjects: [ 'Algebra', 'Statistics', 'Geometry' ],
            //     address: { houseName: 'Pullaniyil', pincode: 668899 }
            // },
            // {
            //     _id: ObjectId('693ffbaa01d39878251e2625'),
            //     name: 'Fenza Pullani',
            //     course: 'Science',
            //     marks: 85,
            //     isPassed: true,
            //     dob: ISODate('2019-01-10T00:00:00.000Z'),
            //     joiningDate: ISODate('2023-06-01T00:00:00.000Z'),
            //     subjects: [ 'Physics', 'Chemistry', 'Biology' ],
            //     address: { houseName: 'Pullaniyil', pincode: 668899 }
            // },
            // {
            //     _id: ObjectId('6943f36a9dbe626e2b1e2621'),
            //     name: 'Ayath',
            //     course: 'Malayalam',
            //     marks: 97,
            //     isPassed: true
            // }
            // ]




//   6) countDocuments()

//  It is used to count how many documents match a given condition in a collection.
//     *It doesn't return a document. Instead it return a number(how many documents matches the condition)

//  syntax:- db.students.countDocuments(query)
//           * if query doesnt mentioned,it return all documents count. Like, if have 10 documents. results will be 10.
//           * if we mentioned query,like isPassed:true,
//           *       db.students.countDocuments({isPassed:true})
//           *          -will return only isPassed students count. Like, if only 5 students passed. Output will be 5.









