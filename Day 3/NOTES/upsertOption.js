//                      Upsert( update + insert)
//                      -----------*-----------

//  It is an option in MongoDB update operations that update documents if it exists , or inserts a new document if doesn't exist

//  In updateOne, updates only existing documents. Nothing happens if there is no document matches the filter.
//   But in upsert it will add new document if there is no document matches the filter.

//  Use case:-
//           * User login records.
//           * Product stock updates.
//           * Daily activity tracking.
//           * Settings or preferences.


//   syntax:-

//        db.collection.updateOne(
//            filter,
//            update,
//            { upsert: true }
//            )


//    Eg:-
//        a) If document already exist:-

//            { name: 'Ayesha', age: 21}

//          when we run:-  
//                   db.students.updateOne(
//                    {name: 'Ayesha'},{$set:{age: 23} },
//                     {upsert: true})

//    output will be:-  { name: 'Ayesha', age: 23}



//     b) if there is no document named 'Deepa' ,will insert a document named 'Deepa' if we write upsert.
 
//       when we run:-

//                db.students.updateOne(
//                 {name:'Deepa'},{$set:{age: 24, course: 'Malayalam'}},
//                 {upsert:true})

//          output will be:-
//                {name: 'Deepa', age:24, course: 'Malayalam'}

//          if we don't give upsert like this,
//                db.students.updateOne(
//                 {name:'Deepa'},{$set:{age: 24, course: 'Malayalam'}},
//                                                           // nothing will happen. Won't insert anything.
//                                                           // if we give upsert, it will insert the new document


//  In simple words Upsert updates a document if it exists; otherwise, it inserts a new document.