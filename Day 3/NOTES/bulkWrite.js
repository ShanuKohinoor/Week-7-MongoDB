//                              Bulk  write
//                              -----*-----

//   It allows to perform multiple insert,update, and delete operations in a single database call.
//   Use:-
//          * Importing large data
//          * Batch updates


//   Normally:-  insertOne() --> one insert
//               updateOne() --> one update
//               deleteOne() --> one delete

//  When want to add mutiple operations, add bulkwrite:-
//     syntax:-
//            db.collection.bulkwrite([
//              operation1,
//              operation2, 
//              operation3
//            ])     

//  We can use operations(inside bulkwrite) like:- 
//          * insertOne
//          * updateOne
//          * updateMany 
//          * deleteOne
//          * deleteMany
//          * replaceOne



//            Operation	             Purpose
//            ----------             -------

//            insertOne	         Insert document
//            updateOne          Update one document
//            updateMany	     Update many documents
//            deleteOne	         Delete one document
//            deleteMany	     Delete many documents
//            replaceOne	     Replace document





//    Eg:-

//         db.students.bulkWrite([
//          {
//           insertOne: {
//             document: {name: 'Asha',age: 22 }
//           }
//          },
//          {
//           updateOne: {
//            filter: {name: 'Ayesha'},
//            update: {$inc: {age: 1 } } 
//           }
//          },
//          { deleteOne: {
//            filter: {name: 'John' }
//          }
//         }
//        ])



//             Operation name            Required labels
//             -------------             ---------------
//              insertOne	              document
//              updateOne	              filter, update
//              deleteOne	              filter
//              replaceOne	              filter, replacement



//  In simple words:- bulkWrite allows multiple write operations to be executed in a single database call for better performance.