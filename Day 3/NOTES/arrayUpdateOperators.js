//                           Array update Operators
//                           ----------*-----------

// They are special MongoDB update operators used to add,remove,or modify elements inside an array field of a document without replacing the entire array.
//  replacing full array  is slow and risky so, array update operator used.


//                  _________________________________
//                 |            |         |          |            
//                 |            |         |          |            
//                 v            v         v          v                       
//               $push      $addToSet     $pull      $pop            




//  1) $ push:- add new value to array field in a MongoDB document.
//  ---------

//        Eg:- school> db.students.updateMany( { course:'English' }, { $push: { subjects: 'Phonetics-2' } })
//           * subject phonetics-2 added to existing array.

//          output:-  subjects: ['Grammar', 'Literature','Poetry','Phonetics','Phonetics-2']


//  2) $addToSet :- adds a value to array if it doesn't already exist.
//  ------------
//         * prevents duplivate entries.
//         * useful in roles,skills,tags etc.
//            Eg:- db.students.updateOne(
//                    { course: "english" },
//                    { $addToSet: { subjects: "Phonetics" } }
//                 )                      //wont add because phoneticsalready exist.
//                                        // if we add any other subject which doesnt exist in the array,it will add.


//  3) $pull:- removes all matching values from an array.
//  --------
//         * Useful when we want to remove unwanted items from a list
//         * Eg if :-
//                { course: "english",subjects: ["Grammar", "Literature", "Phonetics"]}

//           run:-  db.students.updateOne(
//                { course: "english" },
//                { $pull: { subjects: "Literature" } }
//               )

//           output:-{ course: "english",subjects: ["Grammar", "Phonetics"]}


//   4) $pop:- Removes first or last elements of an array inMongoDB.
//   -------

//         * Use 1 to remove last element and -1 to remove first element..
//         * can't remove specific ele,ent..only can remove first and last.

//       Eg if:-
//          a)  {name: 'Asha',skills: ['HTML', 'CSS', 'JavaScript']}

//              run:- db.students.updateOne(
//                     {name: 'Asha',{$pop:{skills: 1} }     // remove last element by 1
//                     )

//                      output:- {name: 'Asha',skills: ['HTML', 'CSS']}    


//          b)  {name: 'Asha',skills: ['HTML', 'CSS', 'JavaScript']}

//              run:- db.students.updateOne(
//                     {name: 'Asha',{$pop},{skills: -1} }         // remove first element by -1
//                      )

//                      output:- {name: 'Asha',skills: [ 'CSS', 'Javascript']}


//            Operator name	                Purpose
//            ------------                  -------
//              $push               	Add value at end
//              $addToSet	            Add unique value
//              $pull	                Remove value(s)
//              $pop	                Remove first or last element








//                        Helper Array Update Operators
//                        ---------------------------- 

//  They are special MongoDB modifiers used along with array update operators (like $push and $addToSet)
//        to control how elements are inserted, ordered, limited, or positioned inside an array.

//                   _________________________________________
//                  |               |             |           |                 
//                  |               |             |           |            
//                  v               v             v           v            
//                $each         $position       $slice       $sort      



//  1) $each:- Allow to add multiple values to array in a single update.
//   -------
//     syntax:-
//            db.collection.updateOne(
//                 { condition },
//                 {
//                   $push: {
//                   arrayField: {
//                   $each: [value1, value2, value3]
//                 }
//                }
//              }
//            )


//       Eg if:-
//            {name: "Asha",skills: ["HTML", "CSS"]}

//       run:- db.students.updateOne(
//             { name: "Asha" },
//              {
//                 $push: {
//                   skills: {
//                    $each: ["JavaScript", "Node.js", "MongoDB"]
//                  }
//                }
//              }
//            )

//        output will be:- skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"]





// 2) $position:- specifies which index at which new elements are added into an array during a $push operation.
// ------------

//          * Works only with $push and $each.
//          * which strts from index 0.
//        Eg if:- { name: "Asha",skills: ["HTML", "CSS", "JavaScript"]}

//        run:-
//            db.students.updateOne(
//              { name: "Asha" },
//               {
//                $push: {
//                 skills: {
//                  $each: ["React"],
//                  $position: 1
//                 }
//                }
//              }
//            )

//      outpt:- skills: ["HTML", "React", "CSS", "JavaScript"]



//   3) $slice:- Limits number of elements stored in an array after a $push operation.
//   ---------
//         * Used with $push and $each.
//         * can write:-
//              - First 'n' elements --> $slice: n
//              - Last 'n' elements --> $slice: -n


//        Eg if:-
//              { name: "Asha", scores: [60, 70, 80]}


//        run:-   db.students.updateOne(
//                  { name: "Asha" },
//                  {
//                   $push: {
//                    scores: {
//                      $each: [90],
//                      $slice: -3
//                    }
//                   }
//                  }
//                 )
//      
//          Output:- scores: [70, 80, 90]



//    4) $sort :- sorts the elements of an array while updating it using $push.
//    --------

//          * Must be used with $push and $each
//          * Can sort:- number,string,object(by specific key)
//          *   1 --> ascending
//          *  -1 --> descending


//        Eg if:-
//           a)  {name: "Asha",scores: [60, 70, 80]}

//            run:- 
//             db.students.updateOne(
//                { name: "Asha" },
//                 {
//                  $push: {
//                   scores: {
//                     $each: [75],
//                    $sort: 1                       // sort by ascending
//                   }
//                 }
//                }
//            )


//         output:- scores: [60, 70, 75, 80]



//           b)  {name: "Asha",scores: [60, 70, 80]}

//            run:- 
//             db.students.updateOne(
//                { name: "Asha" },
//                 {
//                  $push: {
//                   scores: {
//                     $each: [85,95],
//                    $sort: -1                       // sort by descending
//                   }
//                 }
//                }
//            )


//         output:-  scores: [95, 85, 80, 75, 70, 60]





//         Helper Operator name	                Purpose
//         --------------------                 -------

//              $each	                   Add multiple values
//              $position	               Insert at specific index
//              $slice	                   Limit array size
//              $sort                	   Sort array during push









//                Array Filters and Positional Operators
//                ---------*----------------*-----------
//  Update only matching elements inside an array using $[elem] and $  

// Normally, if we want to update one element inside an Array, we need to know the index of that element.
//   * It is impossible in large Array to find index for each element. Index method only possible in small Arrays.
//   * For updating each element, we have to write manually each element.
//   * To overcome that issue, we can use positional Operators and Array Filters.



//                      1) Positional Operator ($) 
//                      ------------*-------------

//  It is used in update queries to modify the first element in an array that matches a condition.
//    * No need to know index of the element. MongoDB automatically finds it.

//   syntax:- 
//                 db.collection.updateOne(
//                   {'arrayField.someKey': condition},                      // Find document
//                   {$set: {'arrayField.$.keyToUpdate': newValue}}          //  Update matching array element
//                )


//   Eg:-
//          If we have an array like:-
//           {
//             name: 'Shanu',
//             age: 25,
//             marks: [
//                 { subject: 'Mathematics', score: 70},
//                 { subject: 'Malayalam', score:90},
//                 {subject: 'English', score: 80}
//             ]
//           }

//       If i want to increase score of Mathematics from 70 to 85, we can use update operation and run like:-
//                 db.students.updateOne(
//                    { marks.subject: 'Mathematics' },
//                    { $set:{ 'marks.$.score': 85}}
//                 )


//      Output will be:- 
//           {
//             name: 'Shanu',
//             age: 25,
//             marks: [
//                 { subject: 'Mathematics', score: 85},
//                 { subject: 'Malayalam', score:90},
//                 {subject: 'English', score: 80}
//             ]
//           }


// Use:- 
//            * Update only first matching element.
//            * When we know condition,can use in small and  medium sized array.
//            * Can use with $set,$inc,$max,$min etc.




//                       2) Array Filters ($[elem])
//                        ------------*------------

//  It is used to update multiple array elements that matches the condition.
//  We can use filter variable(elem or any name) to represent matching elements.

//   syntax:-
//           db.collections.updateOne(
//             {FilterForDocument},
//             {$updateOperator:  { 'arrayField.$[elem].keyToUpdate' : newValue}},
//             { arrayFilters: [{ 'elem.conditionKey': condition}]}
//           )


//    Eg :-
//    If we have an array like this and we want to update to add 10 marks to all emlements  which is less than 65.

//          {
//            name: 'Kavitha',
//            age:  '25',
//            marks: [
//               { subject: 'Mathematics',  score: 62},
//               { subject: 'English', score: 75},
//               { subject: 'Malayalam', score: 64},
//               { subject: 'Social', score: 60},
//               { subject: 'IT', score: 80}
//           ]
//         }

//     so, we can run:- 
//               db.students.updateOne(
//                 { name: 'Kavitha'},
//                 {$inc: {'marks.$[elem].score': 10}},
//                 { arrayFilters: [{ 'elem.score': {$lt: 65}}]}
//               )


//   output will be:-
//          {
//            name: 'Kavitha',
//            age:  '25',
//            marks: [
//               { subject: 'Mathematics',  score: 72},        // Update with increase 10
//               { subject: 'English', score: 75},            
//               { subject: 'Malayalam', score: 74},           // Update with increase 10
//               { subject: 'Social', score: 70},              // Update with increase 10
//               { subject: 'IT', score: 80}
//           ]
//         }


//   Use:- 
//      * Can update multiple elements with one.
//      * Can use with $mul, $set, $inc etc.
//      * Requires ArrayFilters to matching the condition.
//      * Very useful for large arrays where multiple elements need updates.

   


//             Operator	                  Updates                         	Use case
//             --------                  --------                           --------
//               $	                First matching element	        Medium array, single match
//             $[elem]	            All matching elements	        Large array, multiple match







