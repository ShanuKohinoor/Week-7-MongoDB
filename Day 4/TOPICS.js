// Objective: Understand how data relationships are modeled in MongoDB, learn how to create and manage different types of indexes, and analyze query performance using explain().

//  Data Modeling Approaches
//     • Embedding vs Referencing
//         ◦ Embedding: Store related data in a single document (faster reads).
//         ◦ Referencing: Store references (_id) to related documents (reduces duplication).
//     • Relationship types:
//         ◦ One-to-one
//         ◦ One-to-many
//         ◦ Many-to-many
//     • When to embed and when to reference.
// Indexing
//     • What is an index and how it improves query performance.
//     • Default _id index in every collection.
//     • Creating and deleting indexes (concept only).
//     • Types of Indexes:
//         ◦ Single-field
//         ◦ Compound (multiple fields)
//         ◦ Multikey (for arrays)
//         ◦ Unique (no duplicates)
//         ◦ Text (word-based search)
//         ◦ TTL (Time-To-Live, auto-delete old data)
//         ◦ Partial and Sparse indexes (optional, for specific cases)
// Capped Collections
//     • What they are — fixed-size collections that overwrite old documents.
//     • When to use them (e.g., logs, live streams).
// Performance and Query Analysis
//     • Query execution stages — COLLSCAN vs IXSCAN.
//     • Using explain("executionStats") to analyze queries.
//     • Understanding covered queries and winning plans.
//     • Using limit() and projections for efficiency.
//     • When to use or avoid indexes (read-heavy vs write-heavy).
//     • 







//                                  Tasks:
//     • Use the same school database.
//     • Data Modeling:
//     • Create two collections, students and courses.
//     • Show one example of embedding (store course details inside a student).
//     • Show one example of referencing (store only courseId in the student).
//     • Indexing:
//     • Create a single-field index on course.
//     • Create a compound index on { course: 1, totalMarks: -1 }.
//     • Create a text index on subjects and search for “Math”.
//     • Performance:
//     •    Run one query with and without index; compare the result using explain("executionStats").