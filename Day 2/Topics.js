    // • CRUD in MongoDB:
    // • C – Create → insertOne(), insertMany() (review)
    // • R – Read → find(), findOne()
    // • U – Update → updateOne(), updateMany(), $set, $inc, $unset
    // • D – Delete → deleteOne(), deleteMany()
    // • Query Filters:
    // • Comparison operators: $gt, $lt, $gte, $lte, $eq, $ne, $in, $nin
    // • Logical operators: $and, $or, $not
    // • Projection – show only selected fields.
    // • Sorting and Limiting results: sort(), limit()
    // • Understanding update modifiers: $set, $inc, $unset.
    // • Cursors: using forEach() to loop through query results.
    // • Regex queries: pattern matching using /pattern/ or $regex.




    //                                    Tasks:
    
    // 1 Use the same school database and students collection created on Day 1.
    // 2 Update a student’s marks or course using $set.
    // 3 Increase marks of all passed students by 5 using $inc.
    // 4 Remove the remarks field from all documents using $unset.
    // 5 Delete one student whose course is "Math".
    // 6 Show only name, course, and marks for all students.
    // 7 Find students with marks > 80 and course = "Science".
    // 8 Sort results by marks (highest first) and limit to 3 results.
    // 9 Use a regex query to find students whose name starts with ‘A’.
    // 10 Loop through all documents using forEach() and print student names.
