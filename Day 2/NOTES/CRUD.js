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






