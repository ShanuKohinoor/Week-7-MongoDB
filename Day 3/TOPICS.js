

// Day 3 


//     • Field Update Operators:
// $set, $unset, $inc, $rename, $mul, $min, $max, $currentDate
//     • Array Update Operators:
// $push, $addToSet, $pull, $pop, $each, $position, $slice, $sort
//     • Upsert Option:
// updateOne({...}, {$set: ...}, {upsert: true})
//     • Bulk Write:
// bulkWrite() – multiple insert/update/delete in one operation
//     • Replace and Find-Modify Methods:
// replaceOne(), findOneAndUpdate(), findOneAndReplace()
//     • Array Filters and Positional Operators:
// Update only matching elements inside an array using $[elem] and $
//     • Existence and Type Checks:
// $exists, $type for conditional updates


//                                   Tasks:

//     • Use the same school database and students collection.
//     • Add a new field attendance: 90 for all students using $set.
//     • Rename field marks → totalMarks using $rename.
//     • Increase attendance by 5 using $inc.
//     • Add a new array field activities and push values like “Sports”, “Music”.
//     • Add “Art” to all activities using $addToSet.
//     • Remove “Music” from activities using $pull.
//     • Limit activities to 3 items using $push with $slice.
//     • Add a lastUpdated field using $currentDate.
//     • Update only a specific array element using arrayFilters.
//     • Upsert a student named Neha if not already present.
//     • Use findOneAndUpdate() to modify one student and return the updated document.
//     • Perform a bulkWrite with three operations:
//     • Update one student’s attendance.
//     • Insert a new student.
//     • Delete one student whose course = "History".
//     • Show the final updated data using find().pretty().

