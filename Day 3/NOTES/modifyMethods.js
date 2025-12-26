//                        Replace and Find modify method
//                        --------------*---------------

// These methods are used to update or replace documents in MongoDB, sometimes returning the modified document in one operation.

//  1) replaceOne() :- Replaces the entire document, except for the _id.
//  --------------

//       * Here instead of updating specific field, updates whole document.
//       * _id remain same(unchanged automatically).
//       *  Doesn't return the modified document unless we query again.

//    Eg:-
//      {name:'Anu', age:18, course: 'Music'}

//   When we run:-
//         db.students.replaceOne(
//          {name: 'Anu'},                            
//          {name: 'Anu', age: 20 })

//    output will be:-  {name:'Anu', age:20}     // course removed




//  Differences b/w updateOne and replaceOne :- 
//     * updateOne modifies selected fields using update operators, 
//        whereas replaceOne replaces the entire document except for _id.






//  2) findOneAndUpdate() :- find one document, updates it using update operators, and return either the original or updated document.
//  --------------------


//   its like find + update(with update operators like $set, $ins, $push) + return

//             Eg:- {name: 'Shanu',age:25}

//      when we run:- 
//              db.students.findOneAndUpdate(
//                {name: 'Shanu'},
//                {$inc: {age: 2} },
//                {returnDocument: 'after' }      
//              )

//    output will be:- 
//               {name: 'Shanu', age:27}              // return the updated document


//     if we want original document instead of new document we can write like:-
//             db.students.findOneAndUpdate(
//              {name:'Shanu'},
//              {$inc: {age: 2}},
//              {newDocument: 'before'})

//    output will be:- {name: 'Shanu', age;25}        // updation done but return original document



//  3) findOneAndReplace() :- finds a single document that matches a filter,replaces it entirely with a new document, and can return either the original or the replaced document.
//  ---------------------

//        * It works like replaceOne(), but return a document (either original or new document).

//  syntax:-
//            db.collection.findOneAndReplace(
//              { filter },
//              { replacementDocument },
//              { returnDocument: "before" | "after", upsert: true/false }
//            )

//    Eg:- 
//     a)  { name: 'Shanu', age: 25, city: 'London'}

//      when we run:- 
//             db.students.findOneAndReplace(
//               {name:'Shanu'},
//               {name: 'Shanu' , age: 27},
//               {returnDocument: 'after'})    

//     output will be:-  { name: 'Shanu', age: 27}            // return document after replacement


//    b)   { name: 'Shanu', age: 25, city: 'London'}

//     when we run:-
//             db.students.findOneAndReplace(
//               {name: 'Shanu'},
//               {name: 'Shanu Shahanas', age: 29, course: 'Mathematics'},
//               {returnDocument: 'before' })             
// 
//    output will be:-  
//          { name: 'Shanu', age: 25, city: 'London'}          // return document before replacement
    
// replacement done but return original document 
//        return this:-     { name: 'Shanu', age: 25, city: 'London'}       
//        replace to this:-   { name: 'Shanu Shahanas', age: 29, course:'Mathematics'}  
//                           // here name changed,
//                                   age updated, 
//                                   city removed,
//                                   course added


       

