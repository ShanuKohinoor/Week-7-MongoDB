//                    Existence and Type Checks
//                    ------------*------------


//  $exists :- check if a field exists.
//  -------

//         * To find out whether the document have specific field or not have specific field.
//         * If document present,return true. Otherwise(no document present) return false.

//        syntax:-
//                 db.collections.find({fieldName: {$exists: true}})   // to find out specific field exist.
//                 db.collections.find({fieldName:{$exists: false }})  // to find out specific field doesn't exist.


//       Eg:- 
//              db.students.find({age:{$exists:true}})     // returns all student hsave age
//              db.students.find({marks:{$exists: false}})   // returns all students who doesn't have marks field.








//  $type:- Check the data type of a field.

//   syntax:-    db.collections.find({fieldName: {$type: 'typeName'}})

//     Eg:-
//         a)  db.students.find({age: {$type: 'int'}})     // Return documents where age is an integer

//         b)  db.students.find({ marks: {$type: 'array'}})   // Return documents where marks is an array