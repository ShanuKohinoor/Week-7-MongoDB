//                                 Projection
//                                 -----*----

// It is the way to select only specific fields of a document instead of fetching whole documents.
//     * which helps to include or exclude certain fields.

// syntax:-
//        db.collection.find(query,projection)
//            * query - filter for documents(like usual find)
//            *projection - specifies which fields to include(1) or exclude(0)

//               1= show field
//               0= hide field

//    we  can't mix inclusion & exclusion(1 & 0) together except in _id

