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






