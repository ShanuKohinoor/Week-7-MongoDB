//                                Data Modelling
//                                -------*------

//  * Data Modelling decides how to store related data in MongoDB.
//  * Deciding how our data should be structured,stored and related inside MongoDB 
//          so that our application is fast,efficient and easy to maintain.
//  * Good data modelling helps to make queries faster, simpler, and scalable.
//  * MongoDB is document-based, not table-based.
//  * Related data can be stored together or separately depending on usage.



// How normally data is stored in a computer?

//              A computer has 2 main tyoes of storage
//            _______________________________|_____________________________
//           |                                                             |
//           |                                                             |
//           V                                                             V
//          RAM                                                           DISK
//     (Temporary Memory)                                          (Permanent Storage)
//                                                                 (HDD,SSD,NVMe)
//    * Called primary memory                                     * Called secondary storage
//    * Without RAM, computer cannot run programs                 * Without Disk, data cannot be saved permanently
//    * Where the computer stores data temporarily                * Stores data permanently           
//        while programs are running
//    * Very fast(nano seconds)                                   * DISK is slower than RAM,
//                                                                      but it stores much more data.
//    * Data is volatile, lost                                    * Non-volatile(Even after shutdown, data stays here)
//       everything when power is off                                     
//    * CPU directly access RAM                                   * Data must be loaded in RAM before processing
//    * Limited in size (8GB, 16GB, 32GB etc.)                    * Large storage capacity
//    * Eg:-                                                      * Eg:-
//        - Open browser tab                                             - OS (Windows, Linux, macOS)
//        - Running VS code                                              - Software
//                                                                       - Documents, images, videos

//                                                                * Access speed depends on type:
//                                                                       - HDD(Hard Disk Drive) --> Slow
//                                                                       - SSD(Solid State Drive) --> Faster
//                                                                       - NVMe --> Very fast (but slower than RAM)


// How RAM and DISK works?

//                            Programs are stored on DISK
//                                        |
//                                        |
//                                        V
//                               When we open a program
//                                        |
//                                        | * It loads from DISK to RAM
//                                        | * CPU(which is like the brain ) processes data from RAM
//                                        |       - CPU cannot  directly access or work with DISK
//                                        |       - CPU only works with data in RAM
//                                        |
//                                        V
//                              When you close the program     
//                                    * RAM cleares the working data
//                                    * Memory space becomes free
//                                    * DISK data remains same



//                               Flow of working a CPU
//                                      DISK (stores)       
//                                        |   * stores programs permanently.
//                                        |
//                                        V
//                                       RAM  (working area)
//                                        |   * temporarily holds programs while running.
//                                        |
//                                        V
//                                       CPU (process)
//                                           * CPU works only with RAM.
//                                           * Execute  instructions


// Storage of Data in MongoDB 
// -------------------------

// MongoDB uses both RAM and DISK.
// Data is  stored  in DISK and
// RAM is used to make queries faster.
// MongoDB saves data permanently on DISK.

// DISK is divided into many small parts called disk pages or extents.
//   - MongoDB stores documents inside these disk pages.
//   - One disk page can store multiple documents.
//   - Large documents can use more than one page.




// * When MongoDB needs some data,it does not read just a single field. Instead it reads the whole page from Disk and loads it into RAM.
//      - since RAM is fast, so data processing becomes faster.

// * If related data is stored in different documents or different collections, MongoDB has to read many disk pages to get all the required information.
//       - Reading many pages causes more disk access, higher memory usage, and slower queries.

// * But when related data is stored together in a single document, MongoDB can get everything by reading fewer disk pages.
//       - Fewer page reads mean less disk work, less memory usage, and faster query performance.

//    Reading fewer pages --> faster queries.
//    Reading many pages --> slower queries.

// * This is why data modeling is important in MongoDB.

// * Data modeling helps us decide whether related data should be embedded in one document or stored separately using references, so that MongoDB can read data efficiently.

// * Good data modeling keeps related data together in one document

// * All reading and writing of data on Disk is managed by MongoDB’s 'Storage Engine' called 'WiredTiger'.






//                              MongoDB can store data in two ways 
//            _______________________________|_____________________________
//           |                                                             |
//           |                                                             |
//           V                                                             V
//       EMBEDDING                                                    REFERENCING         

//                                     EMBEDDING    
//                                     ---------
//   * Storing related data directly inside the parent document using nested objects or arrays.
//     - All related data is stays together in one place and is returned in one query.
//     - No need to search another collection.
//     - Faster performance for read operations.
//            * Embedding focuses on fast reads

//   * Use embedding when :- 
//      - related data is small in size. 
//      - data belongs to only one parent.
//      - usually read data together(parent & child).
//      - when want faster reading rather than frequent updates.
//      - One-to-One or few One-to-Many relationship

   

//                                  REFERENCING
//                                  -----------
// * Storing only the ID of another document instead of embedding full data.

//   * Use referencing when :- 
//      - data is large.
//      - data keeps growing over time. So can't use embedding.
//      - data is shared by many documents.
//      - Many-to-Many relationships. 
//      - child data changes frequently.
//      - child data is not always needed with parent.
//      - better write performance is required


// * Data limit in MongoDB is 16MB. If data exceed this limit,must use referencing.






//  _____________________________________________________________________________________________________________________
// |                                                   |                                                                 |
// |             EMBEDDING                             |                          REFERENCING                            |
// |___________________________________________________|_________________________________________________________________|
// |                                                   |                                                                 |
// | * Store related data in same document.            |  * Store related data in different collections.                 |        
// |                                                   |                                                                 |
// | * Uses nested arrays or objects.                  |  * Uses _id reference to connect documents.                     |
// |                                                   |                                                                 |
// | * Eg:-                                            |  * Eg:-                                                         |
// |     {                                             |     - User Collection                                           |
// |        'name': 'Sara',                            |          {                                                      |
// |        'email': sara@email.com,                   |            'name': 'Sara',                                      |
// |        'address': {                               |            'addressId': 10                                      |
// |           'city': 'Birmingham',                   |          }                                                      |
// |           'pincode': 'B338TD'                     |                                                                 |
// |        }                                          |    - Address Collection                                         |
// |     }                                             |          {                                                      |
// |                                                   |            '_id'; 10,                                           |                                                                   
// |                                                   |            'city': 'Birmingham',                                |
// |                                                   |            'pincode': 'B338TD'                                  |
// |                                                   |          }                                                      |
// |                                                   |                                                                 |
// | * All data stays in one place.                    |  * Data stays in separate but linked.                           |
// |                                                   |                                                                 |
// | * Faster reads:-                                  |  * Requires lookup or extra query.                             |
// |      - return everything in single query          |                                                                 |
// |          without looking up other collections.    |                                                                 |
// |                                                   |                                                                 |
// | * Simple structure.                               |  * More flexible structure.                                     |
// |                                                   |                                                                 |
// | * Best for small and fixed data.                  |  * Best for large or growing data.                              |
// |                                                   |                                                                 |
// | * Limited by 16 MB document size.                 |  * No document size risk.                                       |
// |                                                   |                                                                 |
// | * Parent and child update together.               |  * Child can be updated independently.                          |
// |                                                   |                                                                 |
// |___________________________________________________|_________________________________________________________________|











//                                RELATIONSHIP TYPE
//                                -------*---------

//  * A relationship type defines how many documents in one collection is related to documents in another collection.
//  * It helps us to decide whether embedding or referencing is the best storage approach.

//            ______________________________|_______________________________
//           |                              |                               |
//           |                              |                               |
//           V                              v                               V
//      One-to-One(1:1)              One-to-Many(1:N)                  Many-to-Many(M:N)    


//   One-to-One (1:1):-
//   -----------------
//         * One document is related to exactly one other document.
//         * Eg:- In a hospital, each patient has one doctor.
//                     here parent --> patient (main document we usually work with)
//                          child  --> doctor (related document we linked to the parent)

//         * User <---> Profile
//         * User <---> Settings
//         * Employee <---> Company ID


//         * can give ID either in parent or child.

// * How to store the child (doctor) in relation to the parent (patient)?

//       - Use Embedding, if doctor info is small and always read together with patient.
//           * In this case child document(doctor), inside parent document(patient)
//       - Use Referencing, if doctor info is large or shared with many patients.
//           * In this case, parent(patient) stores only the reference to the child(doctor)



// One-to-Many (1:M)
// ----------------

//        * One parent--> many children
//        * Eg:-
//              A doctor has many patients.
//     - Parent --> doctor
//     - Child  --> patients (many)

//      * Can give ID in child document is best method


//         * User ---> Certificates
//         * User ---> Orders
//         * Post ---> Comments
//         * Product ---> Reviews
//         * Course ---> Sessions
//         * Chat ----> Messages

//
// * How to store the relationship?
//     - Each child document (patient) stores a reference to the parent (doctorId).
//     - This avoids putting all patient info inside the doctor document, which could get very large.
//
// * Why use references in child documents?
//     - Keeps parent document (doctor) small and manageable.
//     - Makes it easy to add or remove children (patients) without updating the entire parent.




// Many-to-Many (M:M)
// ------------------
// * Many parents --> many children and vice versa
// * Eg:-
//     - Parent --> students
//     - Child  --> courses
//     - Each student can enroll in many courses
//     - Each course can have many students
//


//         * Students <---> Courses
//         * Posts <---> Tags
//         * Products <---> Categories
//         * Users <---> Followers


//      * Can give ID of parent and child in separate collection named 'linking collection' is best method.

// * How to store the relationship?
//     - Create a separate junction/relationship collection to store references of both parents and children.
//     - Eg:- enrollment document stores studentId and courseId
//
// * Why use a separate collection?
//     - Avoids duplicating large arrays in student or course documents.
//     - Makes it easy to add/remove relationships without updating multiple documents.



//  _____________________________________________________________________________________________________________________
// | TYPE    |         MEANING                |        COMMON EXAMPLE        |          STORAGE RULE                     |
// |_________|________________________________|______________________________|___________________________________________|
// |         |                                |                              |                                           |        
// |  1:1    |    one entity --> one entity   |        User-Profile          |    Embed if small,Reference if large      |
// |         |                                |                              |                                           |        
// |         |                                |                              |                                           |        
// |  1:M    |    one --> many                |        Post-Comments         |    Embed small,Reference large            |
// |         |                                |                              |                                           |        
// |         |                                |                              |                                           |        
// |   M:M   |    many <---->  many           |       Students-Courses       |     Always Reference                      |                                        |
// |         |                                |                              |                                           |        
// |_________|________________________________|______________________________|___________________________________________|





//  When to embed and when to reference?
// * First decide relationship type
// * Then choose embed or reference based on size, sharing, and access pattern




//                           FRAGMENTATION
//                           -------------

// * MongoDB stores data inside disk pages on DISK.
// * When documents are updated, deleted, or keep growing in size, sometimes there is not enough free space in the same disk page.

// * When there is no space in the current page, MongoDB (WiredTiger) moves the document or part of it to another page.

// * The old page is left with small empty gaps. These empty gaps are called fragmentation.

// * If growing data is embedded inside the same document, there is a higher chance of fragmentation.
//         - bad data modeling increases fragmentation.

// * If growing data is stored using references, there is less chance of fragmentation.
//         - good data modeling reduces fragmentation.
