import * as databaseArchitecture from "../../data/visualisation/bdd/databaseArchitecture.json";
import * as databaseModels from "../../data/visualisation/bdd/databaseModels.json";
import * as erDiagram from "../../data/visualisation/bdd/er_diagram.json";
import * as dependencyDiagram from "../../data/visualisation/bdd/dependencyFunction.json";
import {
  VisualisationComponent,
  InfoCard,
} from "../../components/global/Visualisation/index";

export const bdd = {
  id: 25,
  title: "Databases",
  description:
"This course focuses on the principles and practices of database systems. You will learn about relational databases, SQL, normalization, and database design. The course also covers advanced topics such as transaction management, concurrency control, and distributed databases. By the end of the course, you will have a solid understanding of how to design, implement, and manage robust and efficient database systems that meet organizational needs.",
  comingSoon: false,
  isNew: true,
  chaptersTitles:["Presentation of databases","Database design & Relational model","Constraints & Normalization","Relational algebra"],

  chapters: [
    {
      chapterId: 1,
      title: "Presentation of databases",
      chapterDescription: <p>Initial concepts and terminology </p>,
      subChapter: [
        {
          title: "1) Concept of files",
          subChapterContent: (
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-secondary">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold ">
                    Base
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold ">
                    DBMS
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold ">
                    Flat File System
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-transparent">
                  <td className="border border-gray-200 px-4 py-2 font-medium ">
                    Definition
                  </td>
                  <td className="border border-gray-200 px-4 py-2 ">
                    DBMS is a collection of interrelated data and software
                    programs to access those data.
                  </td>
                  <td className="border border-gray-200 px-4 py-2 ">
                    Flat file system stores data in a plain text file. Here, the
                    records are specified in a single line.
                  </td>
                </tr>
                <tr className="bg-transparent">
                  <td className="border border-gray-200 px-4 py-2 font-medium ">
                    Data Redundancy
                  </td>
                  <td className="border border-gray-200 px-4 py-2 ">
                    There is no problem of data redundancy.
                  </td>
                  <td className="border border-gray-200 px-4 py-2 ">
                    There is a main problem of data redundancy.
                  </td>
                </tr>
                <tr className="bg-transparent">
                  <td className="border border-gray-200 px-4 py-2 font-medium ">
                    Cost
                  </td>
                  <td className="border border-gray-200 px-4 py-2 ">
                    DBMS software is very costly and regular updates make it
                    costly.
                  </td>
                  <td className="border border-gray-200 px-4 py-2 ">
                    Flat file are cost effective.
                  </td>
                </tr>
                <tr className="bg-transparent">
                  <td className="border border-gray-200 px-4 py-2 font-medium ">
                    Use
                  </td>
                  <td className="border border-gray-200 px-4 py-2 ">
                    Mostly, large organizations use DBMS who can afford it and
                    have a large number of clients and employees to be managed.
                  </td>
                  <td className="border border-gray-200 px-4 py-2 ">
                    Small organizations use it as it is cost effective and who
                    have to deal with a small number of clients and employees.
                  </td>
                </tr>
                <tr className="bg-transparent">
                  <td className="border border-gray-200 px-4 py-2 font-medium ">
                    Views
                  </td>
                  <td className="border border-gray-200 px-4 py-2 ">
                    Views are created and employees can’t see all information
                    available, hence there is security.
                  </td>
                  <td className="border border-gray-200 px-4 py-2 ">
                    Any information can be seen by anyone, hence there is no
                    security.
                  </td>
                </tr>
              </tbody>
            </table>
          ),
          subChapterVisualisation: null,
        },
        {
          title: "2) Introduction to databases",
          subChapterContent: (
            <div>
              <p>
                A database is an organized collection of data that is stored and
                accessed electronically. It is designed to efficiently manage,
                retrieve, and store data, allowing users to perform operations
                such as querying, updating, and administration. Databases are
                managed by Database Management Systems (DBMS), which provide
                tools for data manipulation, security, and integrity. They are
                used in a variety of applications, ranging from simple
                record-keeping to complex data analysis and transaction
                processing in large-scale enterprise environments.
              </p>
            </div>
          ),
          subChapterVisualisation: null,
        },
        {
          title: "3) Database management systems",
          subChapterContent: (
            <div>
              <h1 class="text-2xl font-bold mb-4">
                What is a database system?
              </h1>
              <p class="mb-4">
                A Database Management System (DBMS) is system software used to
                manage the organization by storage, access, modification and
                integrity of data in a structured database.
              </p>
              <p class="mb-4">
                A DBMS makes it possible for end users to create, read, update
                and delete data in a database systematically.
              </p>
              <p class="mb-4">
                The DBMS essentially serves as an interface between the database
                and end users, ensuring that data is consistently organized and
                remains easily accessible.
              </p>

              <h1 class="text-2xl font-bold mb-4">Why do we need DBMS?</h1>

              <div class="mb-4">
                <h2 class="text-xl font-semibold mb-2">
                  Manages big amounts of data
                </h2>
                <p>
                  A database stores and manages a large amount of data on a
                  daily basis. This would not be possible using any other tool
                  such as a spreadsheet as they would simply not work.
                </p>
              </div>

              <div class="mb-4">
                <h2 class="text-xl font-semibold mb-2">
                  Improved Data Sharing and Data Security
                </h2>
                <p>
                  Proper database management systems help increase
                  organizational accessibility to data, which in turn helps the
                  end users share the data quickly and effectively across the
                  organization.
                </p>
              </div>

              <div class="mb-4">
                <h2 class="text-xl font-semibold mb-2">Accurate</h2>
                <p>
                  A database is pretty accurate as it has all sorts of built-in
                  constraints, checks etc. This means that the information
                  available in a database is guaranteed to be correct in most
                  cases.
                </p>
              </div>

              <div class="mb-4">
                <h2 class="text-xl font-semibold mb-2">Easy to update data</h2>
                <p>
                  In a database, it is easy to update data using various Data
                  Manipulation languages (DML) available. One of these languages
                  is SQL.
                </p>
              </div>

              <div class="mb-4">
                <h2 class="text-xl font-semibold mb-2">
                  Effective Data Integration
                </h2>
                <p>
                  Implementing a data management system promotes an integrated
                  picture of an organization’s operations. It becomes easy to
                  see how processes in one segment of the organization affect
                  other segments.
                </p>
              </div>

              <div class="mb-4">
                <h2 class="text-xl font-semibold mb-2">
                  Easy to research data
                </h2>
                <p>
                  It is very easy to access and research data in a database.
                  This is done using Data Query Languages (DQL) which allow
                  searching of any data in the database and performing
                  computations on it.
                </p>
              </div>
              <div class="mb-6">
                <h1 class="text-2xl font-bold mb-4">INSTANCE</h1>
                <p class="mb-4">
                  The data stored in a database at a particular moment of time
                  is called an instance of the database. Database schema defines
                  the variable declarations in tables that belong to a
                  particular database; the value of these variables at a moment
                  of time is called the instance of that database.
                </p>
                <p class="mb-4">
                  For example, let's say we have a single table student in the
                  database, today the table has 100 records, so today the
                  instance of the database has 100 records. Let's say we are
                  going to add another 100 records in this table by tomorrow so
                  the instance of the database tomorrow will have 200 records in
                  the table.
                </p>
              </div>

              <div class="mb-6">
                <h1 class="text-2xl font-bold mb-4">SCHEMA</h1>
                <p class="mb-4">
                  Design of a database is called the schema. Schema is of three
                  types: Physical schema, logical schema and view schema.
                </p>
              </div>

              <div class="mb-6">
                <h1 class="text-2xl font-bold mb-4">SUBSCHEMA</h1>
                <p class="mb-4">
                  Subschema is a subset or proper subset of the schema and
                  inherits the same property that a schema has. The plan (or
                  scheme) for a view is often called subschema. It gives the
                  users a window through which he or she can view only that part
                  of the database, which is of interest to him/her.
                </p>
              </div>

              <div>
                <h1 class="text-2xl font-bold mb-4">
                  What is a data administrator?
                </h1>
                <p class="mb-4">
                  A data administration (also known as a database administration
                  manager, data architect, or information center manager) is a
                  high level function responsible for the overall management of
                  data resources in an organization. In order to perform its
                  duties, the DA must know a good deal of system analysis and
                  programming.
                </p>
              </div>
            </div>
          ),
          subChapterVisualisation: null,
        },
        {
          title: "4) Database Architecture",
          subChapterContent: (
            <div>
              <h4 className="font-bold underline">Two Tier Architecture</h4>
              <br></br>
              <p>
                DBMS architecture 2 layer architecture Client-Server The client
                that runs the application and the server that handles the
                database back-end Multiple users able to access the DB
                simultaneously. Server is processing data while the client for
                business logic and presentation.
              </p>
              <h5 className="font-bold">Two parts: </h5>
              <ul className="list-disc list-inside">
                <li>Client application: User Interface</li>
                <li>Server: Database</li>
              </ul>
              <h5 className="font-bold">Advantages:</h5>
              <ul>
                <li>Easy to maintain and modification is bit easy </li>
                <li>Communication is faster</li>
              </ul>
              <h5 className="font-bold">Disadvantages: </h5>
              <p>
                Performance will be degrade upon increasing the users
                Cost-ineffective
              </p>
              <br></br>
              <h4 className="font-bold underline">Three Tier Architecture</h4>
              <br></br>
              <ul className="list-disc list-inside">
                <li>
                  These Applications run on the Traditional Client/Server Model
                  But from an Application server.{" "}
                </li>
                <li>
                  Client only Displays the GUI and data, but has no part in
                  producing results
                </li>
                <li>Database Server Serves to few Connections</li>
              </ul>
              <h5 className="font-bold">Three layers: </h5>
              <ul className="list-disc list-inside">
                <li>
                  Client: User Interface <br></br>Contains the UI part of our
                  application. This layer is used for the design purpose where
                  data is presented to the user or input is taken from the user
                </li>
                <li>
                  Application Server: Business Logic<br></br>All business logic
                  written like validation of data, calculations, data insertion
                  etc. This acts as an interface between Client layer and Data
                  Access Layer. Make communication faster between client and
                  data layer.
                </li>
                <li>
                  Database Server: Database<br></br>Actual database comes in the
                  picture. Contains methods to connect with the database and to
                  perform insert, update, delete, get data from the database
                  based on our input data.
                </li>
              </ul>
              <h5 className="font-bold">Advantages:</h5>
              <ul className="list-disc list-inside">
                <li>
                  Performance :Because the Presentation tier can cache requests,
                  network utilization is minimized, and the load is reduced on
                  the Application and Data tiers.{" "}
                </li>
                <li>Scalability: Each tier can scale horizontally </li>
                <li>Better Reuse</li>
                <li>Improve Data Integrity </li>
                <li>
                  High degree of flexibility in deployment platform and
                  configuration{" "}
                </li>
                <li>
                  Improved Security: Client has not direct access to the
                  database.{" "}
                </li>
                <li>
                  Easy to maintain and modification is bit easy, won't affect
                  other modules
                </li>
              </ul>
            </div>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={databaseArchitecture}
              title={"Database Architectures"}
              description={""}
            />
          ),
        },
        {
          title: "5) Database models",
          subChapterContent: (
            <div>
              <div>
                <h2 class="text-2xl font-bold mb-4">Hierarchical Model</h2>
                <p class="mb-2">
                  <span class="font-bold">Definition:</span> Organizes data into
                  a tree-like structure where each record has a single parent
                  and can have multiple children.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Usage:</span> Mainly used in early
                  database systems and applications that require a strict
                  hierarchical structure, such as directory structures.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Advantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Simple and efficient for specific applications.</li>
                    <li>
                      Fast data retrieval when dealing with hierarchical data.
                    </li>
                  </ul>
                </p>
                <p>
                  <span class="font-bold">Disadvantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Inflexible due to rigid structure.</li>
                    <li>
                      Difficult to manage relationships between different
                      branches.
                    </li>
                  </ul>
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-bold mb-4">Network Model</h2>
                <p class="mb-2">
                  <span class="font-bold">Definition:</span> Similar to the
                  hierarchical model but allows multiple parent records,
                  creating a graph structure.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Usage:</span> Used in applications
                  where data relationships are complex, such as
                  telecommunications and transport networks.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Advantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>More flexible than the hierarchical model.</li>
                    <li>Efficient for many-to-many relationships.</li>
                  </ul>
                </p>
                <p>
                  <span class="font-bold">Disadvantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Complex to design and manage.</li>
                    <li>Requires intricate programming knowledge.</li>
                  </ul>
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-bold mb-4">Relational Model</h2>
                <p class="mb-2">
                  <span class="font-bold">Definition:</span> Organizes data into
                  tables (relations) where each table is composed of rows and
                  columns.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Usage:</span> Most widely used model
                  in modern database systems, underpinning SQL databases like
                  MySQL, PostgreSQL, and Oracle.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Advantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Simple and intuitive design.</li>
                    <li>Flexible and powerful querying with SQL.</li>
                    <li>
                      Supports ACID (Atomicity, Consistency, Isolation,
                      Durability) properties for transaction management.
                    </li>
                  </ul>
                </p>
                <p>
                  <span class="font-bold">Disadvantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>
                      Can become complex with large and highly relational
                      datasets.
                    </li>
                    <li>
                      Performance can degrade with extremely large volumes of
                      data.
                    </li>
                  </ul>
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-bold mb-4">Object-Oriented Model</h2>
                <p class="mb-2">
                  <span class="font-bold">Definition:</span> Stores data in the
                  form of objects, similar to object-oriented programming.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Usage:</span> Useful in applications
                  requiring complex data representation, such as CAD/CAM,
                  multimedia, and engineering databases.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Advantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>
                      Seamlessly integrates with object-oriented programming
                      languages.
                    </li>
                    <li>Capable of handling complex data types.</li>
                  </ul>
                </p>
                <p>
                  <span class="font-bold">Disadvantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>
                      Can be less efficient for simpler queries compared to
                      relational databases.
                    </li>
                    <li>
                      Less mature and standardized than relational databases.
                    </li>
                  </ul>
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-bold mb-4">Document Model</h2>
                <p class="mb-2">
                  <span class="font-bold">Definition:</span> Stores data in
                  document format, often using JSON or XML.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Usage:</span> Popular in content
                  management systems, blogging platforms, and applications
                  requiring flexible data representation, such as MongoDB.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Advantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Flexible and can store varying data structures.</li>
                    <li>Scales easily horizontally.</li>
                  </ul>
                </p>
                <p>
                  <span class="font-bold">Disadvantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Complex querying can be challenging.</li>
                    <li>
                      Lacks standardization across different implementations.
                    </li>
                  </ul>
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-bold mb-4">Key-Value Model</h2>
                <p class="mb-2">
                  <span class="font-bold">Definition:</span> Stores data as a
                  collection of key-value pairs, where each key is unique.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Usage:</span> Commonly used in caching
                  systems and real-time applications, such as Redis and
                  DynamoDB.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Advantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Extremely fast for read and write operations.</li>
                    <li>Simple and easy to implement.</li>
                  </ul>
                </p>
                <p>
                  <span class="font-bold">Disadvantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Limited querying capabilities.</li>
                    <li>
                      Not suitable for complex relationships between data.
                    </li>
                  </ul>
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-bold mb-4">Column-Family Model</h2>
                <p class="mb-2">
                  <span class="font-bold">Definition:</span> Stores data in
                  columns rather than rows, which allows efficient retrieval of
                  specific columns.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Usage:</span> Suitable for data
                  warehousing and big data applications, such as Apache
                  Cassandra and HBase.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Advantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Efficient storage and retrieval of sparse data.</li>
                    <li>Highly scalable and performant for large datasets.</li>
                  </ul>
                </p>
                <p>
                  <span class="font-bold">Disadvantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>
                      More complex to design and query than traditional
                      relational databases.
                    </li>
                    <li>Schema changes can be challenging.</li>
                  </ul>
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-bold mb-4">Graph Model</h2>
                <p class="mb-2">
                  <span class="font-bold">Definition:</span> Represents data in
                  the form of nodes (entities) and edges (relationships).
                </p>
                <p class="mb-2">
                  <span class="font-bold">Usage:</span> Ideal for applications
                  involving complex relationships, such as social networks,
                  recommendation engines, and fraud detection, using databases
                  like Neo4j.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Advantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Efficiently handles many-to-many relationships.</li>
                    <li>Natural representation of connected data.</li>
                  </ul>
                </p>
                <p>
                  <span class="font-bold">Disadvantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Can be complex to design and query.</li>
                    <li>
                      Less mature and standardized compared to relational
                      databases.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={databaseModels}
              title={"Database Models"}
              description={""}
            />
          ),
        },
      ],
    },
    {
      chapterId: 2,
      title: "Database design & Relational model",
      chapterDescription: (
        <p>ER diagram and relational model transformation </p>
      ),
      subChapter: [
        {
          title: "1) Entity-Relationship Model",
          subChapterContent: (
            <div>
              <div>
                <h2 class="text-2xl font-bold mb-4">
                  Introduction to ER Models
                </h2>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">What are ER Models</h3>
                <p class="mb-4">
                  An Entity Relationship Diagram (ERD) is a visual
                  representation of different data using conventions that
                  describe how these data are related to each other.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">ER Diagram</h3>
                <p class="mb-4">
                  ER-modeling is a data modeling technique used in software
                  engineering to produce a conceptual data model of an
                  information system. Diagrams created using this ER-modeling
                  technique are called Entity-Relationship Diagrams, or ER
                  diagrams or ERDs.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Entity</h3>
                <p class="mb-4">
                  It is a collection of objects. An entity is an object that is
                  distinguishable from other objects by a set of attributes. An
                  entity may be an 'object' with a physical existence. This is
                  the basic object of the E-R Model, which is a 'thing' in the
                  real world with an independent existence.
                </p>
                <p class="mb-4">
                  For example, in a school database, students, teachers,
                  classes, and courses offered can be considered as entities.
                  All these entities have some attributes or properties that
                  give them their identity.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Types of Entity</h3>
                <ul class="list-disc pl-5 space-y-2">
                  <li>
                    <span class="font-bold">Strong Entities:</span> An entity
                    that exists independently of other entity type.
                  </li>
                  <li>
                    <span class="font-bold">Weak Entities:</span> An entity type
                    whose existence depends on some other entity type.
                  </li>
                  <li>
                    <span class="font-bold">Recursive Entities:</span> A
                    recursive entity is one in which a relation can exist
                    between occurrences of the same entity set. This occurs in a
                    unary relationship. Let us take the example of an employee
                    who is also a manager. But a manager is also an employee,
                    whose details will be held in the employee entity.
                  </li>
                  <li>
                    <span class="font-bold">Composite Entities:</span> If a Many
                    to Many relationship exists we must create a bridge entity
                    to convert it into 1 to Many. Bridge entity composed of the
                    primary keys of each of the entities to be connected. The
                    bridge entity is known as a composite entity. A composite
                    entity is represented by a diamond shape within a rectangle
                    in an ER Diagram.
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Entity Sets</h3>
                <p class="mb-4">
                  An entity set is a collection of similar types of entities. An
                  entity set may contain entities with attributes sharing
                  similar values. For example, a Students set may contain all
                  the students of a school; likewise, a Teachers set may contain
                  all the teachers of a school from all faculties. Entity sets
                  need not be disjoint.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Weak Entity</h3>
                <p class="mb-4">
                  A weak entity is an entity that depends on the existence of
                  another entity. In more technical terms it can be defined as
                  an entity that cannot be identified by its own attributes. It
                  uses a foreign key combined with its attributes to form the
                  primary key.
                </p>
                <p class="mb-4">
                  An entity like order item is a good example for this. The
                  order item will be meaningless without an order so it depends
                  on the existence of the order.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Attribute</h3>
                <p class="mb-4">
                  Entities are represented by means of their properties, called
                  attributes. All attributes have values. For example, a student
                  entity may have name, class, and age as attributes. There
                  exists a domain or range of values that can be assigned to
                  attributes. For example, a student's name cannot be a numeric
                  value. It has to be alphabetic. A student's age cannot be
                  negative, etc.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Types of Attributes</h3>
                <ul class="list-disc pl-5 space-y-2">
                  <li>
                    <span class="font-bold">Simple attributes:</span> Simple
                    attributes are atomic values, which cannot be divided
                    further. For example, a student's phone number is an atomic
                    value of 10 digits.
                  </li>
                  <li>
                    <span class="font-bold">Composite attribute:</span> If the
                    attributes are composite, they are further divided in a tree
                    like structure. Every node is then connected to its
                    attribute. That is composite attributes are represented by
                    eclipses that are connected with an eclipse. Composite
                    attributes are made of more than one simple attribute. For
                    example, a student's complete name may have first_name and
                    last_name.
                  </li>
                  <li>
                    <span class="font-bold">Derived attribute:</span> Derived
                    attributes are the attributes that do not exist in the
                    physical database, but their values are derived from other
                    attributes present in the database. For example,
                    average_salary in a department should not be saved directly
                    in the database, instead it can be derived. For another
                    example, age can be derived from date_of_birth. For example
                    for a circle the area can be derived from the radius.
                  </li>
                  <li>
                    <span class="font-bold">Multi-valued attribute:</span>{" "}
                    Multi-valued attributes may contain more than one value. For
                    example, a person can have more than one phone number,
                    email_address, etc. For example a teacher entity can have
                    multiple subject values.
                  </li>
                </ul>
              </div>
            </div>
          ),
          subChapterVisualisation: null,
        },
        {
          title: "2) Relationships",
          subChapterContent: (
            <div>
              <div>
                <h2 class="text-2xl font-bold mb-4">Relationships</h2>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">What are Relationships</h3>
                <p class="mb-4">
                  Relationships are associations between entities. For example,
                  a student entity may have a relationship with a teacher entity
                  through a relationship called "has." Relationships are
                  represented by diamond shapes in an ER Diagram.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Types of Relationships</h3>
                <ul class="list-disc pl-5 space-y-2">
                  <li>
                    <span class="font-bold">One-to-One Relationship:</span> A
                    one-to-one relationship is when a single instance of an
                    entity is associated with a single instance of another
                    entity. For example, a person can have only one passport
                    number, and a passport number is associated with only one
                    person.
                  </li>
                  <li>
                    <span class="font-bold">One-to-Many Relationship:</span> A
                    one-to-many relationship is when a single instance of an
                    entity is associated with multiple instances of another
                    entity. For example, a teacher can teach multiple students,
                    but a student can have only one teacher.
                  </li>
                  <li>
                    <span class="font-bold">Many-to-Many Relationship:</span> A
                    many-to-many relationship is when multiple instances of an
                    entity are associated with multiple instances of another
                    entity. For example, a student can enroll in multiple
                    courses, and a course can have multiple students.
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">
                  Cardinality & Participation{" "}
                </h3>
                <p class="mb-4">
                  Cardinality and participation are two important aspects of
                  relationships in an ER Diagram.
                </p>
                <p class="mb-4">
                  <span class="font-bold">Cardinality:</span> Cardinality
                  defines the number of instances of an entity that can be
                  associated with the number of instances of another entity. It
                  is represented by the symbols "1" (one) and "N" (many).
                </p>
                <p class="mb-4">
                  <span class="font-bold">Participation:</span> Participation
                  defines whether an entity is mandatory or optional in a
                  relationship. It is represented by the symbols "0" (optional)
                  and "1" (mandatory).
                </p>
                <p class="mb-4">
                  e.g. A student can enroll in multiple courses (many) and a
                  course can have multiple students (many), so the relationship
                  between student and course is many-to-many. course are
                  mandatory and student is optional in this relationship.
                  student(0..N):(1..N)course -mandatory just for explanation
                  purpose-
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Degree of Relationship</h3>
                <p class="mb-4">
                  The degree of a relationship is the number of entities
                  associated with a relationship. It is of three types: Unary,
                  Binary, and Ternary. Unary relationship involves a single
                  entity, Binary relationship involves two entities, and Ternary
                  relationship involves three entities.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">
                  Attributes of Relationships
                </h3>
                <p class="mb-4">
                  Relationships can have attributes. For example, a student
                  entity may have a relationship with a teacher entity through a
                  relationship called "has" and the relationship may have an
                  attribute called "grade."
                </p>
              </div>
            </div>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={erDiagram}
              title={"Entity Relationship Diagram"}
              description={
                "represents the relationship between student and course"
              }
            />
          ),
        },
        {
          title: "3) Relational Model",
          subChapterContent: (
            <div>
              <div>
                <h2 class="text-2xl font-bold mb-4">
                  Introduction to the Relational Model
                </h2>
              </div>
              <div>
                <ul class="list-disc pl-5 space-y-2">
                  <li>
                    The relational model was proposed by Edgar Frank Codd in
                    1970.
                  </li>
                  <li>
                    The relational model is a Logical Data Model (LDM) based on
                    set theory and predicate logic.
                  </li>
                  <li>
                    Today, the relational model is by far the most widespread in
                    the field of databases.
                  </li>
                  <li>
                    In this model, the database is represented as a set of
                    relations that can be viewed as tables.
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Relational Model</h3>
                <p class="mb-4">
                  Informally, the relational model can be defined as follows:
                </p>
                <ul class="list-disc pl-5 space-y-2">
                  <li>
                    Data is organized in the form of two-dimensional tables,
                    also called relations, whose rows are called n-tuples or
                    tuples.
                  </li>
                  <li>Data is manipulated by relational algebra operators.</li>
                  <li>
                    The coherent state of the database is defined by a set of
                    integrity constraints.
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Basic Concepts</h3>
                <ul class="list-disc pl-5 space-y-2">
                  <li>
                    <span class="font-bold">Attribute:</span> An attribute is a
                    property describing information stored in a database.
                    <InfoCard title="Example">
                      a person's age, a person's name, social security number.
                    </InfoCard>
                  </li>
                  <li>
                    <span class="font-bold">Domain:</span> The domain of an
                    attribute is the set, finite or infinite, of its possible
                    values.
                    <InfoCard title="Example">
                      <ul class="pl-5 mt-2 space-y-1">
                        <li>ID_Student: Sequential number from 1 to 9999</li>
                        <li>Name_Student: String of 15 characters</li>
                        <li>
                          City_Student: {"{'Algiers', 'Oran', 'Setif', ...}"}
                        </li>
                        <li>Age_Student: Integer between 18 and 65</li>
                      </ul>
                    </InfoCard>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Relation</h3>
                <p class="mb-4">
                  A relation is a subset of the Cartesian product of n attribute
                  domains.
                </p>
                <ul class="list-disc pl-5 space-y-2">
                  <li>
                    Let D1, D2, ..., Dn be domains, not necessarily distinct. A
                    relation R(A1: D1, A2: D2, ..., An: Dn) is defined as: R ⊆
                    D1 x D2 x ... x Dn.
                  </li>
                  <li>
                    A relation is represented as a two-dimensional table where
                    the n attributes correspond to the titles of the n columns.
                  </li>
                </ul>
                <table class="table-auto w-full mt-4">
                  <thead>
                    <tr className="bg-secondary">
                      <th class="border border-gray-200 px-4 py-2">
                        ID_Student
                      </th>
                      <th class="border border-gray-200 px-4 py-2">
                        Name_Student
                      </th>
                      <th class="border border-gray-200 px-4 py-2">
                        City_Student
                      </th>
                      <th class="border border-gray-200 px-4 py-2">
                        Age_Student
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border border-gray-200 px-4 py-2">0001</td>
                      <td class="border border-gray-200 px-4 py-2">Ahmed</td>
                      <td class="border border-gray-200 px-4 py-2">Algiers</td>
                      <td class="border border-gray-200 px-4 py-2">20</td>
                    </tr>
                    <tr>
                      <td class="border border-gray-200 px-4 py-2">0002</td>
                      <td class="border border-gray-200 px-4 py-2">Mohamed</td>
                      <td class="border border-gray-200 px-4 py-2">Oran</td>
                      <td class="border border-gray-200 px-4 py-2">19</td>
                    </tr>
                    <tr>
                      <td class="border border-gray-200 px-4 py-2">0003</td>
                      <td class="border border-gray-200 px-4 py-2">Sarra</td>
                      <td class="border border-gray-200 px-4 py-2">Setif</td>
                      <td class="border border-gray-200 px-4 py-2">21</td>
                    </tr>
                    <tr>
                      <td class="border border-gray-200 px-4 py-2">0004</td>
                      <td class="border border-gray-200 px-4 py-2">Chaima</td>
                      <td class="border border-gray-200 px-4 py-2">Illizi</td>
                      <td class="border border-gray-200 px-4 py-2">18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <ul class="list-disc pl-5 space-y-2">
                  <li>
                    <span class="font-bold">Degree:</span> The degree of a
                    relation is its number of attributes.
                  </li>
                  <li>
                    <span class="font-bold">n-tuple or tuple:</span> An n-tuple
                    or tuple is an element of the set represented by a relation.
                    In other words, an n-tuple is a row in the table
                    representing the relation.
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Relation Schema</h3>
                <p class="mb-4">
                  A relation schema specifies the name of the relation as well
                  as the list of attributes with their domains. Let R(A1: D1,
                  A2: D2, ..., An: Dn) be a relation schema such that:
                </p>
                <ul class="list-disc pl-5 space-y-2">
                  <li>R: Name of the relation.</li>
                  <li>A1, A2, ..., An: Attributes of the relation R.</li>
                  <li>
                    D1, D2, ..., Dn: Domains of the attributes A1, A2, ..., An
                    respectively.
                  </li>
                </ul>
                <InfoCard title="Example">
                  Etudiant(ID_Etudiant : Num(4), Nom_Etudiant : String(15),
                  Ville_Etudiant : String(10), Age_Etudiant : Num(2))
                </InfoCard>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Relational Schema</h3>
                <p class="mb-4">
                  A relational schema (or schema of a database) consists of the
                  set of relation schemas, all of which have unique names. If
                  R1, R2, ..., Rn form a set of relation schemas, then we can
                  write the relational database schema R as:
                </p>
                <p class="mt-4">R = {"{ R1, R2, ..., Rn} "} </p>
                <InfoCard title="Example">
                  Bibliothèque = {"{(Etudiant, Livre)}"}
                </InfoCard>
                <p class="mt-4">
                  Etudiant(ID_Etudiant, Nom_Etudiant, Ville_Etudiant,
                  Age_Etudiant)
                </p>
                <p class="mt-4">
                  Livre(ISSN, Titre, Date_Edition, #ID_Etudiant)
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Relational Database</h3>
                <p class="mb-4">
                  A relational database consists of the set of n-tuples of the
                  various relations in the relational schema.
                </p>
                <InfoCard title="Example">
                  <table class="table-auto w-full mt-4">
                    <thead>
                      <tr className="bg-secondary">
                        <th class="border border-gray-200 px-4 py-2">
                          ID_Student
                        </th>
                        <th class="border border-gray-200 px-4 py-2">
                          Name_Student
                        </th>
                        <th class="border border-gray-200 px-4 py-2">
                          City_Student
                        </th>
                        <th class="border border-gray-200 px-4 py-2">
                          Age_Student
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border border-gray-200 px-4 py-2">0001</td>
                        <td class="border border-gray-200 px-4 py-2">Ahmed</td>
                        <td class="border border-gray-200 px-4 py-2">
                          Algiers
                        </td>
                        <td class="border border-gray-200 px-4 py-2">20</td>
                      </tr>
                      <tr>
                        <td class="border border-gray-200 px-4 py-2">0002</td>
                        <td class="border border-gray-200 px-4 py-2">
                          Mohamed
                        </td>
                        <td class="border border-gray-200 px-4 py-2">Oran</td>
                        <td class="border border-gray-200 px-4 py-2">19</td>
                      </tr>
                      <tr>
                        <td class="border border-gray-200 px-4 py-2">0003</td>
                        <td class="border border-gray-200 px-4 py-2">Sarra</td>
                        <td class="border border-gray-200 px-4 py-2">Setif</td>
                        <td class="border border-gray-200 px-4 py-2">21</td>
                      </tr>
                      <tr>
                        <td class="border border-gray-200 px-4 py-2">0004</td>
                        <td class="border border-gray-200 px-4 py-2">Chaima</td>
                        <td class="border border-gray-200 px-4 py-2">Illizi</td>
                        <td class="border border-gray-200 px-4 py-2">18</td>
                      </tr>
                    </tbody>
                  </table>

                  <table class="table-auto w-full">
                    <thead>
                      <tr className="bg-secondary">
                        <th class="border border-gray-200 px-4 py-2">ISSN</th>
                        <th class="border border-gray-200 px-4 py-2">Title</th>
                        <th class="border border-gray-200 px-4 py-2">
                          Publication Date
                        </th>
                        <th class="border border-gray-200 px-4 py-2">
                          ID_Student
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border border-gray-200 px-4 py-2">INF01</td>
                        <td class="border border-gray-200 px-4 py-2">SFSD</td>
                        <td class="border border-gray-200 px-4 py-2">2000</td>
                        <td class="border border-gray-200 px-4 py-2">0003</td>
                      </tr>
                      <tr>
                        <td class="border border-gray-200 px-4 py-2">INF02</td>
                        <td class="border border-gray-200 px-4 py-2">BDD</td>
                        <td class="border border-gray-200 px-4 py-2">2020</td>
                        <td class="border border-gray-200 px-4 py-2">0001</td>
                      </tr>
                      <tr>
                        <td class="border border-gray-200 px-4 py-2">INF03</td>
                        <td class="border border-gray-200 px-4 py-2">SI</td>
                        <td class="border border-gray-200 px-4 py-2">2015</td>
                        <td class="border border-gray-200 px-4 py-2">0002</td>
                      </tr>
                      <tr>
                        <td class="border border-gray-200 px-4 py-2">INF04</td>
                        <td class="border border-gray-200 px-4 py-2">POO</td>
                        <td class="border border-gray-200 px-4 py-2">2013</td>
                        <td class="border border-gray-200 px-4 py-2">0004</td>
                      </tr>
                    </tbody>
                  </table>
                </InfoCard>
              </div>

              <div>
                <h3 class="text-xl font-bold mb-2">Intension and Extension</h3>
                <p class="mb-4">
                  The structure of the relation, with domain specifications and
                  other constraints, is part of the intension of the database,
                  while the relation with all its tuples represents an instance
                  or extension of the database.
                </p>
              </div>
            </div>
          ),
          subChapterVisualisation: null,
        },
        {
          title: "4) Transformation of ER Diagram to Relational Model",
          subChapterContent: <div></div>,
          subChapterVisualisation: null,
        },
      ],
    },
    {
      chapterId: 3,
      title: "Constraints & Normalization",
      chapterDescription: (
        <p>
          Constraints and Normalization are important concepts in database
          design. Constraints ensure data integrity, while normalization
          minimizes redundancy and dependency.
        </p>
      ),
      subChapter: [
        {
          title: "1) Integrity Constraints",
          subChapterContent: (
            <div>
              <h2 class="text-xl font-bold mb-4">Keys</h2>

              <div class="mb-6">
                <h3 class="text-lg font-semibold">Super Key</h3>
                <p>
                  An attribute or a combination of attributes that is used to
                  identify the records uniquely is known as Super Key. A table
                  can have many Super Keys.
                </p>

                <InfoCard title="Example">
                  <table class="table-auto w-full mt-4">
                    <thead>
                      <tr class="bg-secondary">
                        <th class="border border-gray-200 py-2 px-4">EmpSSN</th>
                        <th class="border border-gray-200 py-2 px-4">EmpNum</th>
                        <th class="border border-gray-200 py-2 px-4">
                          Empname
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border border-gray-200 py-2 px-4">1001</td>
                        <td class="border border-gray-200 py-2 px-4">AB05</td>
                        <td class="border border-gray-200 py-2 px-4">Shown</td>
                      </tr>
                      <tr>
                        <td class="border border-gray-200 py-2 px-4">2001</td>
                        <td class="border border-gray-200 py-2 px-4">AB06</td>
                        <td class="border border-gray-200 py-2 px-4">Roslyn</td>
                      </tr>
                      <tr>
                        <td class="border border-gray-200 py-2 px-4">3001</td>
                        <td class="border border-gray-200 py-2 px-4">AB07</td>
                        <td class="border border-gray-200 py-2 px-4">James</td>
                      </tr>
                    </tbody>
                  </table>
                </InfoCard>
              </div>

              <div class="mb-6">
                <h3 class="text-lg font-semibold">Candidate Key</h3>
                <p>
                  The candidate key is a set of one or more attributes whose set
                  of values can uniquely identify an entity instance in the
                  entity set. Any attribute in the candidate key cannot be
                  omitted without destroying the unique property of the
                  Candidate key. It is a minimal Super Key.
                </p>

                <p class="mt-2">
                  <strong>Properties of Candidate key:</strong>
                </p>
                <ul class="list-disc pl-5">
                  <li>It must contain unique values</li>
                  <li>Candidate key may have multiple attributes</li>
                  <li>Must not contain null values</li>
                  <li>It should contain minimum fields to ensure uniqueness</li>
                  <li>Uniquely identify each record in a table</li>
                </ul>

                <InfoCard title="Example">
                  <table class="table-auto w-full mt-4">
                    <thead>
                      <tr class="bg-secondary">
                        <th class="border border-gray-200 py-2 px-4">ID</th>
                        <th class="border border-gray-200 py-2 px-4">Name</th>
                        <th class="border border-gray-200 py-2 px-4">
                          Address
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border border-gray-200 py-2 px-4">101</td>
                        <td class="border border-gray-200 py-2 px-4">Robot</td>
                        <td class="border border-gray-200 py-2 px-4">Boston</td>
                      </tr>
                      <tr>
                        <td class="border border-gray-200 py-2 px-4">201</td>
                        <td class="border border-gray-200 py-2 px-4">Mark</td>
                        <td class="border border-gray-200 py-2 px-4">
                          New York
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </InfoCard>
              </div>

              <div class="mb-6">
                <h3 class="text-lg font-semibold">Composite Key</h3>
                <p>
                  If we use multiple attributes to create a Primary Key then
                  that Primary Key is called Composite Key (also called a
                  Compound Key or Concatenated Key).
                </p>

                <InfoCard title="Example">
                  If we have used “Name, Address” as a Primary Key then it will
                  be our Composite Key.
                </InfoCard>
              </div>

              <div class="mb-6">
                <h3 class="text-lg font-semibold">Alternate Key</h3>
                <p>
                  Alternate Key can be any of the Candidate Keys except for the
                  Primary Key.
                </p>

                <InfoCard title="Example">
                  “Name, Address” as it is the only other Candidate Key which is
                  not a Primary Key.
                </InfoCard>
              </div>

              <div class="mb-6">
                <h3 class="text-lg font-semibold">Primary Key</h3>
                <p>
                  A PRIMARY KEY constraint is a rule that the values in one
                  column or a combination of columns must uniquely identify each
                  row in a table. No primary-key value can appear in more than
                  one row in the table. No column that is part of the primary
                  key can contain a null. A table can have only one primary key.
                </p>

                <InfoCard title="Example">
                  CREATE TABLE Persons ( ID int NOT NULL, FirstName
                  varchar(255), Age int, PRIMARY KEY (ID) );
                </InfoCard>
              </div>

              <div class="mb-6">
                <h3 class="text-lg font-semibold">
                  FOREIGN KEY (REFERENTIAL INTEGRITY) Constraints
                </h3>
                <p>
                  FOREIGN KEY constraints are also called "referential
                  integrity" constraints. Foreign Key constraints designate a
                  column or combination of columns as a foreign key. A foreign
                  key links back to the primary key (or a unique key) in another
                  table, and this link is the basis of the relationship between
                  tables.
                </p>

                <InfoCard title="Example">
                  <table class="table-auto w-full mt-4 mb-6">
                    <thead>
                      <tr class="bg-secondary">
                        <th class="border border-gray-200 py-2 px-4">
                          DEPARTMENT_ID
                        </th>
                        <th class="border border-gray-200 py-2 px-4">
                          DEPT_NAME
                        </th>
                        <th class="border border-gray-200 py-2 px-4">
                          MANAGER_ID
                        </th>
                        <th class="border border-gray-200 py-2 px-4">
                          LOCATION_ID
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border border-gray-200 py-2 px-4">90</td>
                        <td class="border border-gray-200 py-2 px-4">
                          Executive
                        </td>
                        <td class="border border-gray-200 py-2 px-4">100</td>
                        <td class="border border-gray-200 py-2 px-4">1700</td>
                      </tr>
                      <tr>
                        <td class="border border-gray-200 py-2 px-4">110</td>
                        <td class="border border-gray-200 py-2 px-4">
                          Accounting
                        </td>
                        <td class="border border-gray-200 py-2 px-4">205</td>
                        <td class="border border-gray-200 py-2 px-4">1700</td>
                      </tr>
                      <tr>
                        <td class="border border-gray-200 py-2 px-4">190</td>
                        <td class="border border-gray-200 py-2 px-4">
                          Contracting
                        </td>
                        <td class="border border-gray-200 py-2 px-4">-</td>
                        <td class="border border-gray-200 py-2 px-4">1700</td>
                      </tr>
                    </tbody>
                  </table>

                  <table class="min-w-full">
                    <thead>
                      <tr class="bg-secondary">
                        <th class="border border-gray-200 py-2 px-4">
                          EMPLOYEE_ID
                        </th>
                        <th class="border border-gray-200 py-2 px-4">
                          FIRST_NAME
                        </th>
                        <th class="border border-gray-200 py-2 px-4">
                          LAST_NAME
                        </th>
                        <th class="border border-gray-200 py-2 px-4">
                          DEPARTMENT_ID
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border border-gray-200 py-2 px-4">100</td>
                        <td class="border border-gray-200 py-2 px-4">Steven</td>
                        <td class="border border-gray-200 py-2 px-4">King</td>
                        <td class="border border-gray-200 py-2 px-4">90</td>
                      </tr>
                      <tr>
                        <td class="border border-gray-200 py-2 px-4">101</td>
                        <td class="border border-gray-200 py-2 px-4">Neena</td>
                        <td class="border border-gray-200 py-2 px-4">
                          Kochhar
                        </td>
                        <td class="border border-gray-200 py-2 px-4">90</td>
                      </tr>
                      <tr>
                        <td class="border border-gray-200 py-2 px-4">102</td>
                        <td class="border border-gray-200 py-2 px-4">Lex</td>
                        <td class="border border-gray-200 py-2 px-4">
                          De Haan
                        </td>
                        <td class="border border-gray-200 py-2 px-4">90</td>
                      </tr>
                      <tr>
                        <td class="border border-gray-200 py-2 px-4">205</td>
                        <td class="border border-gray-200 py-2 px-4">
                          Shelley
                        </td>
                        <td class="border border-gray-200 py-2 px-4">
                          Higgins
                        </td>
                        <td class="border border-gray-200 py-2 px-4">110</td>
                      </tr>
                      <tr>
                        <td class="border border-gray-200 py-2 px-4">206</td>
                        <td class="border border-gray-200 py-2 px-4">
                          William
                        </td>
                        <td class="border border-gray-200 py-2 px-4">Gietz</td>
                        <td class="border border-gray-200 py-2 px-4">110</td>
                      </tr>
                    </tbody>
                  </table>
                </InfoCard>
              </div>

              <div class="mb-6">
                <h3 class="text-lg font-semibold">
                  Entity Integrity Constraint
                </h3>
                <p>
                  The entity integrity constraint states that primary keys can't
                  be null. There must be a proper value in the primary key
                  field. This is because the primary key value is used to
                  identify individual rows in a table. If there were null values
                  for primary keys, it would mean that we could not identify
                  those rows.
                </p>

                <p class="mt-2">
                  On the other hand, there can be null values other than primary
                  key fields. Null value means that one doesn't know the value
                  for that field. Null value is different from zero value or
                  space.
                </p>

                <InfoCard title="Example">
                  In the Car Rental database in the Car table each car must have
                  a proper and unique Reg_No. There might be a car whose rate is
                  unknown - maybe the car is broken or it is brand new - i.e.
                  the Rate field has a null value. See the picture below. The
                  entity integrity constraints ensure that a specific row in a
                  table can be identified.
                </InfoCard>
              </div>

              <div class="mb-6">
                <h3 class="text-lg font-semibold">
                  Referential Integrity Constraint
                </h3>
                <p>
                  The referential integrity constraint is specified between two
                  tables and it is used to maintain the consistency among rows
                  between the two tables.
                </p>

                <p class="mt-2">The rules are:</p>
                <ul class="list-disc pl-5">
                  <li>
                    You can't delete a record from a primary table if matching
                    records exist in a related table.
                  </li>
                  <li>
                    You can't change a primary key value in the primary table if
                    that record has related records.
                  </li>
                  <li>
                    You can't enter a value in the foreign key field of the
                    related table that doesn't exist in the primary key of the
                    primary table.
                  </li>
                  <li>
                    However, you can enter a Null value in the foreign key,
                    specifying that the records are unrelated.
                  </li>
                </ul>

                <InfoCard title="Example">
                  <ul class="list-disc pl-5">
                    <li>
                      <strong>Rule 1:</strong> You can't delete any of the rows
                      in the CarType table that are visible in the picture since
                      all the car types are in use in the Car table.
                    </li>
                    <li>
                      <strong>Rule 2:</strong> You can't change any of the
                      model_ids in the CarType table since all the car types are
                      in use in the Car table.
                    </li>
                    <li>
                      <strong>Rule 3:</strong> The values that you can enter in
                      the model_id field in the Car table must be in the
                      model_id field in the CarType table.
                    </li>
                    <li>
                      <strong>Rule 4:</strong> The model_id field in the Car
                      table can have a null value which means that the car type
                      of that car is not known.
                    </li>
                  </ul>
                </InfoCard>
              </div>
            </div>
          ),
          subChapterVisualisation: null,
        },
        {
          title: "2) Dependency function",
          subChapterContent: (
            <div>
              <h1 class="text-2xl font-bold">Decomposition</h1>
              <p>
                The decomposition approach is a successive refinement process
                that starts from a given relation and decomposes it into
                sub-relations that do not suffer from redundancy and update
                anomalies.
              </p>

              <ul class="list-disc pl-5">
                <li>
                  More formally, decomposition is a process that allows
                  replacing a relation R(A1, A2, ..., An) with a collection of
                  relations R1, R2, ... Rn obtained by projections of R on
                  subsets of attributes whose union contains all attributes of
                  R, in order to obtain a lossless decomposition.
                </li>
                <li>
                  The sub-relations R1, R2, ... Rn do not suffer from redundancy
                  and update anomalies.
                </li>
                <li>
                  Decomposition relies on the semantic links that exist between
                  attributes within the same relation, or what is called
                  functional dependency.
                </li>
              </ul>

              <h2 class="text-xl font-bold mt-6">Functional Dependency</h2>
              <p>
                Functional dependency is a property of the meaning or semantics
                of attributes in a relation. The semantics indicate how the
                attributes are related to each other.
              </p>

              <ul class="list-disc pl-5">
                <li>
                  Formally, let R(A1, A2, ..., An) be a relation schema, and X
                  and Y be subsets of {"{A1, A2, ... An}"}. We say that X → Y (X
                  determines Y, or Y is functionally dependent on X) if, given a
                  value of X, there is a unique value of Y at any given time.
                </li>
                <li>
                  In other words, when two or more tuples have the same value of
                  X, they also have the same value for Y. However, for a given
                  value of Y, there may be multiple values of X.
                </li>
                <li>
                  The left part of a functional dependency (FD) is called the
                  determinant and the right part is called the dependent.
                </li>
                <li>
                  It is essential to note that a functional dependency is an
                  assertion on all possible values and not on actual values: it
                  characterizes an intention and not an extension of the
                  relation.
                </li>
              </ul>

              <h2 class="text-xl font-bold mt-6">
                Example 1: Identifying Functional Dependencies from a Good
                Understanding of the Semantic Properties of Data
              </h2>
              <p>
                Order(ID_Order, Order_Date, ID_Product, Unit_Price, Quantity,
                Total_Amount)
              </p>
              <p>Functional Dependencies:</p>
              <ul class="list-disc pl-5">
                <li>ID_Order → Order_Date</li>
                <li>ID_Order → ID_Product</li>
                <li>ID_Order → Unit_Price</li>
                <li>ID_Order → Quantity</li>
                <li>ID_Order → Total_Amount</li>
                <li>ID_Product → Unit_Price</li>
                <li>(Unit_Price, Quantity) → Total_Amount</li>
              </ul>

              <h2 class="text-xl font-bold mt-6">
                Properties of Functional Dependencies
              </h2>

              <p>
                <strong>Armstrong's Axioms:</strong>
              </p>
              <ul class="list-disc pl-5">
                <li>Reflexivity: Y ⊆ X ⇒ X → Y</li>
                <li>Augmentation: X → Y ⇒ XZ → YZ</li>
                <li>Transitivity: X → Y and Y → Z ⇒ X → Z</li>
              </ul>
              <p>Several other rules are derived from these basic axioms:</p>
              <ul class="list-disc pl-5">
                <li>Union: X → Y and X → Z ⇒ X → YZ</li>
                <li>Pseudo-Transitivity: X → Y and WY → Z ⇒ WX → Z</li>
                <li>Decomposition: X → Y and Z ⊆ Y ⇒ X → Z</li>
              </ul>

              <h2 class="text-xl font-bold mt-6">
                Elementary Functional Dependency
              </h2>

              <p>
                An elementary functional dependency is a dependency of the form
                X → A, where A is a single attribute not belonging to X (A ∉ X),
                and there does not exist X' included in X (X' ⊂ X) such that X'
                → A.
              </p>
              <p>
                The question of the elementarity of a functional dependency
                should be raised when the left side of the functional dependency
                has multiple attributes.
              </p>
              <InfoCard title="Example">
                <p>RegNumber, Student_Name → Student_FirstName</p>
                <p>
                  This FD is not elementary because the attribute
                  Student_FirstName also functionally depends on a part of{" "}
                  {"(RegNumber, Student_Name)"}, which is RegNumber: RegNumber →
                  Student_FirstName
                </p>
              </InfoCard>

              <h2 class="text-xl font-bold mt-6">
                Direct Functional Dependency
              </h2>

              <p>
                A functional dependency X → A is a direct functional dependency
                if there is no set of attributes Y such that X → Y and Y → A.
              </p>
              <p>
                This means that the dependency between X and A cannot be
                obtained by transitivity (Direct FD ≠ Transitive FD).
              </p>
              <InfoCard title="Example">
                Order(ID_Order, Order_Date, ID_Product, Unit_Price, Quantity,
                Total_Amount)
                <ul class="list-disc pl-5">
                  <li>ID_Order → ID_Product</li>
                  <li>ID_Product → Unit_Price</li>
                  <li>ID_Order → Unit_Price (Transitive FD)</li>
                </ul>
              </InfoCard>

              <h2 class="text-xl font-bold mt-6">
                Identifying the Primary Key of a Relation
              </h2>

              <p>
                The identification of the primary key of a relation using
                functional dependencies involves the following steps:
              </p>
              <ul class="list-disc pl-5">
                <li>Identify all functional dependencies of the relation.</li>
                <li>
                  Identify the determinants of these functional dependencies.
                </li>
                <li>
                  Determine from these determinants the candidate key(s) of the
                  relation. The candidate key is the attribute that functionally
                  determines all other attributes of the relation.
                </li>
                <li>
                  If the relation has multiple candidate keys, determine which
                  one should act as the primary key of the relation.
                </li>
                <li>
                  All attributes that are not part of the primary key must
                  functionally depend on the primary key.
                </li>
              </ul>

              <h2 class="text-xl font-bold mt-6">
                Identifying the Primary Key of a Relation
              </h2>

              <p>
                Let R(A1, A2, ..., An) and X be a subset of the attributes of R.
                X is a key of R if and only if:
              </p>
              <ol class="list-decimal pl-5">
                <li>X → A1, A2, ..., An.</li>
                <li>There is no subset Y ∈ X such that Y → A1, A2, ..., An.</li>
              </ol>

              <h2 class="text-xl font-bold mt-6">
                Functional Dependency Graph
              </h2>

              <p>
                Let F be a set of functional dependencies. It is possible to
                visualize this set of FDs with a graph called a functional
                dependency graph.
              </p>
            </div>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={dependencyDiagram}
              title={"Dependency Function"}
              description={
                "Dependency function between attributes and diagram of dependency"
              }
            />
          ),
        },
        {
          title: "3) Normalization",
          subChapterContent: (
            <div>
              <h1 class="text-2xl font-bold">Normalization</h1>
              <p>
                A process of organizing the data in the database to avoid data
                redundancy, insertion anomaly, update anomaly & deletion
                anomaly.
              </p>
              <p>
                A process of organizing data into tables in such a way that the
                results of using the database are always unambiguous and as
                intended. Such normalization is intrinsic to relational database
                theory. It may have the effect of duplicating data within the
                database and often results in the creation of additional tables.
              </p>

              <h2 class="text-xl font-bold mt-6">
                Advantages of Normalization
              </h2>
              <ul class="list-disc pl-5">
                <li>
                  Elimination of data redundancy makes the database compact,
                  reducing the overall amount of space a database consumes.
                </li>
                <li>
                  Enforcement of referential integrity on data ensuring data
                  consistency across all tables.
                </li>
                <li>
                  Maintenance becomes easier and faster since the data are
                  organized logically in a normalized database in a flexible
                  way.
                </li>
                <li>
                  Searching and sorting of records is easier and faster because
                  data will appear in a separate, smaller table when a database
                  is normalized allowing us to easily find them.
                </li>
              </ul>

              <h2 class="text-xl font-bold mt-6">
                Difference between Normalization and Denormalization
              </h2>
              <p>
                Normalization and denormalization are two processes that are
                completely opposite.
              </p>
              <ul class="list-disc pl-5">
                <li>
                  Normalization is the process of dividing larger tables into
                  smaller ones reducing the redundant data, while
                  denormalization is the process of adding redundant data to
                  optimize performance.
                </li>
                <li>
                  Normalization is carried out to prevent database anomalies.
                </li>
                <li>
                  Denormalization is usually carried out to improve the read
                  performance of the database, but due to the additional
                  constraints used for denormalization, writes (i.e. insert,
                  update and delete operations) can become slower. Therefore, a
                  denormalized database can offer worse write performance than a
                  normalized database.
                </li>
              </ul>
              <p>
                It is often recommended that you should “normalize until it
                hurts, denormalize until it works”.
              </p>
              <p>
                Normalizing data means eliminating redundant information from a
                table and organizing the data so that future changes to the
                table are easier.
              </p>

              <h2 class="text-xl font-bold mt-6">Types of Normal Form</h2>
              <ul class="list-disc pl-5">
                <li>1NF</li>
                <li>2NF</li>
                <li>3NF</li>
                <li>BCNF</li>
                <li>4NF</li>
              </ul>

              <h2 class="text-xl font-bold mt-6">1st Normal Form (1NF)</h2>
              <p>
                The values in each column of a table are atomic (No multi-value
                attributes allowed). Each table has a primary key: minimal set
                of attributes which can uniquely identify a record.
              </p>
              <p>
                There are no repeating groups: two columns do not store similar
                information in the same table.
              </p>

              <InfoCard title="Example">
                <table className="table-auto w-full mt-4">
                  <tr className="bg-secondary">
                    <th className="border border-gray-200 py-2 px-4">Genres</th>
                    <th className="border border-gray-200 py-2 px-4">Name</th>
                    <th className="border border-gray-200 py-2 px-4">Movie</th>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">Marvel</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Kevin Feige
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      The Avengers, Captain America
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">DCEU</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Zack Snyder
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Batman Vs SuperMan, Suicide Squad
                    </td>
                  </tr>
                </table>
              </InfoCard>

              <p>
                This table contains attribute values which are not single. This
                is not in normalized form. To make it into 1NF we have to
                decompose the table into atomic elements.
              </p>

              <p>Table in 1NF after eliminating:</p>
              <InfoCard title="Example">
                <table className="table-auto w-full mt-4">
                  <tr className="bg-secondary">
                    <th className="border border-gray-200 py-2 px-4">Genres</th>
                    <th className="border border-gray-200 py-2 px-4">Name</th>
                    <th className="border border-gray-200 py-2 px-4">Movie</th>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">Marvel</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Kevin Feige
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      The Avengers
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">Marvel</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Kevin Feige
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Captain America
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">DCEU</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Zack Snyder
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Batman Vs Superman
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">DCEU</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Zack Snyder
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Suicide Squad
                    </td>
                  </tr>
                </table>
              </InfoCard>

              <h2 class="text-xl font-bold mt-6">Second Normal Form (2NF)</h2>
              <p>
                A table is said to be in 2NF if both the following conditions
                hold:
              </p>
              <ul class="list-disc pl-5">
                <li>Table is in 1NF (First normal form)</li>
                <li>
                  No non-prime attribute is dependent on the proper subset of
                  any candidate key of the table.
                </li>
              </ul>
              <p>
                Prime attribute: an attribute, which is a part of the prime-key,
                is known as a prime attribute.
              </p>
              <p>
                Non-prime attribute: an attribute, which is not a part of the
                prime-key, is said to be a non-prime attribute.
              </p>

              <InfoCard title="Example">
                <table className="table-auto w-full mt-4">
                  <tr className="bg-secondary">
                    <th className="border border-gray-200 py-2 px-4">Studio</th>
                    <th className="border border-gray-200 py-2 px-4">Movie</th>
                    <th className="border border-gray-200 py-2 px-4">Budget</th>
                    <th className="border border-gray-200 py-2 px-4">City</th>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">Marvel</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Avengers
                    </td>
                    <td className="border border-gray-200 py-2 px-4">100</td>
                    <td className="border border-gray-200 py-2 px-4">
                      New York
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">Marvel</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Captain America
                    </td>
                    <td className="border border-gray-200 py-2 px-4">120</td>
                    <td className="border border-gray-200 py-2 px-4">
                      New York
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">DCEU</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Batman Vs Superman
                    </td>
                    <td className="border border-gray-200 py-2 px-4">150</td>
                    <td className="border border-gray-200 py-2 px-4">Gotham</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">DCEU</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Suicide Squad
                    </td>
                    <td className="border border-gray-200 py-2 px-4">75</td>
                    <td className="border border-gray-200 py-2 px-4">Gotham</td>
                  </tr>
                </table>
              </InfoCard>

              <p>
                Here the Primary key is (studio, movie) and the city depends
                only on the studio and not on the whole key. So, this is not in
                2NF form.
              </p>

              <p>Solution of 2 NF</p>
              <p>
                Old Scheme -{">"}
                {"{Studio, Movie, Budget, City}"}
              </p>
              <p>
                New Scheme -{">"} {"{Movie, Studio, Budget}"}
              </p>
              <p>
                New Scheme -{">"}
                {"{Studio, City}"}
              </p>

              <InfoCard title="Example">
                <table className="table-auto w-full mt-4">
                  <tr className="bg-secondary">
                    <th className="border border-gray-200 py-2 px-4">Movie</th>
                    <th className="border border-gray-200 py-2 px-4">Studio</th>
                    <th className="border border-gray-200 py-2 px-4">Budget</th>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      The Avengers
                    </td>
                    <td className="border border-gray-200 py-2 px-4">Marvel</td>
                    <td className="border border-gray-200 py-2 px-4">100</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      Captain America
                    </td>
                    <td className="border border-gray-200 py-2 px-4">Marvel</td>
                    <td className="border border-gray-200 py-2 px-4">120</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      Batman Vs Superman
                    </td>
                    <td className="border border-gray-200 py-2 px-4">DCEU</td>
                    <td className="border border-gray-200 py-2 px-4">150</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      Suicide Squad
                    </td>
                    <td className="border border-gray-200 py-2 px-4">DCEU</td>
                    <td className="border border-gray-200 py-2 px-4">75</td>
                  </tr>
                </table>
              </InfoCard>

              <InfoCard title="Example">
                <table className="table-auto w-full mt-4">
                  <tr className="bg-secondary">
                    <th className="border border-gray-200 py-2 px-4">Studio</th>
                    <th className="border border-gray-200 py-2 px-4">City</th>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">Marvel</td>
                    <td className="border border-gray-200 py-2 px-4">
                      New York
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">DCEU</td>
                    <td className="border border-gray-200 py-2 px-4">Gotham</td>
                  </tr>
                </table>
              </InfoCard>

              <p>Now the 2 tables are in 2NF form.</p>

              <h2 class="text-xl font-bold mt-6">Third Normal Form (3NF)</h2>
              <p>
                This form dictates that all non-key attributes of a table must
                be functionally dependent on a candidate key i.e. there can be
                no interdependencies among non-key attributes.
              </p>
              <p>For a table to be in 3NF, there are two requirements:</p>
              <ul class="list-disc pl-5">
                <li>The table should be in second normal form</li>
                <li>
                  No attribute is transitively dependent on the primary key
                </li>
              </ul>

              <InfoCard title="Example">
                <table className="table-auto w-full mt-4">
                  <tr className="bg-secondary">
                    <th className="border border-gray-200 py-2 px-4">Studio</th>
                    <th className="border border-gray-200 py-2 px-4">
                      CityTemp
                    </th>
                    <th className="border border-gray-200 py-2 px-4">
                      Studio City
                    </th>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">Marvel</td>
                    <td className="border border-gray-200 py-2 px-4">96</td>
                    <td className="border border-gray-200 py-2 px-4">
                      New York
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">DCEU</td>
                    <td className="border border-gray-200 py-2 px-4">99</td>
                    <td className="border border-gray-200 py-2 px-4">Gotham</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">Fox</td>
                    <td className="border border-gray-200 py-2 px-4">96</td>
                    <td className="border border-gray-200 py-2 px-4">
                      New York
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      Paramount
                    </td>
                    <td className="border border-gray-200 py-2 px-4">95</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Hollywood
                    </td>
                  </tr>
                </table>
              </InfoCard>

              <p>
                Here Studio is the primary key and both studio temp and city
                depends entirely on the Studio.
              </p>
              <ol class="list-decimal pl-5">
                <li>
                  Primary Key -{">"}
                  {"{Studio}"}
                </li>
                <li>
                  {"{Studio}"} -{">"} {"{StudioCity}"}
                </li>
                <li>
                  {"{StudioCity}"} -{">"}
                  {"{CityTemp}"}
                </li>
                <li>
                  {"{Studio}"} -{">"} {"{CityTemp}"}
                </li>
              </ol>
              <p>
                CityTemp transitively depends on Studio hence violates 3NF. It
                is called transitive dependency.
              </p>

              <p>Solution of 3NF</p>
              <p>
                Old Scheme -{">"} {"{Studio, StudioCity, CityTemp}"}
              </p>
              <p>
                New Scheme-{">"} {"{Studio, StudioCity}"}
              </p>
              <p>
                New Scheme -{">"}
                {"{StudioCity, CityTemp}"}
              </p>

              <InfoCard title="Example">
                <table className="table-auto w-full mt-4">
                  <tr className="bg-secondary">
                    <th className="border border-gray-200 py-2 px-4">Studio</th>
                    <th className="border border-gray-200 py-2 px-4">
                      Studio City
                    </th>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">Marvel</td>
                    <td className="border border-gray-200 py-2 px-4">
                      New York
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">DCEU</td>
                    <td className="border border-gray-200 py-2 px-4">Gotham</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">Fox</td>
                    <td className="border border-gray-200 py-2 px-4">
                      New York
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      Paramount
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Hollywood
                    </td>
                  </tr>
                </table>
              </InfoCard>

              <InfoCard title="Example">
                <table className="table-auto w-full mt-4">
                  <tr className="bg-secondary">
                    <th className="border border-gray-200 py-2 px-4">
                      Studio City
                    </th>
                    <th className="border border-gray-200 py-2 px-4">
                      CityTemp
                    </th>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      New York
                    </td>
                    <td className="border border-gray-200 py-2 px-4">96</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">Gotham</td>
                    <td className="border border-gray-200 py-2 px-4">95</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      Hollywood
                    </td>
                    <td className="border border-gray-200 py-2 px-4">99</td>
                  </tr>
                </table>
              </InfoCard>

              <h2 class="text-xl font-bold mt-6">
                Boyce Codd Normal Form (BCNF) – 3.5NF
              </h2>
              <p>
                BCNF does not allow dependencies between attributes that belong
                to candidate keys.
              </p>
              <p>
                BCNF is a refinement of the third normal form in which it drops
                the restriction of a non-key attribute from the 3rd normal form.
              </p>
              <p>
                Third normal form and BCNF are not the same if the following
                conditions are true:
              </p>
              <ul class="list-disc pl-5">
                <li>The table has two or more candidate keys</li>
                <li>
                  At least two of the candidate keys are composed of more than
                  one attribute
                </li>
                <li>
                  The keys are not disjoint i.e. The composite candidate keys
                  share some attributes.
                </li>
              </ul>

              <InfoCard title="Example">
                <p>
                  Scheme -{">"}{" "}
                  {"{MovieTitle, MovieID, PersonName, Role, Payment }"}
                </p>
                <p>
                  Key1 -{">"} {"{MovieTitle, PersonName}"}
                </p>
                <p>
                  Key2 -{">"}
                  {"{MovieID, PersonName}"}
                </p>
                <table className="table-auto w-full mt-4">
                  <tr className="bg-secondary">
                    <th className="border border-gray-200 py-2 px-4">
                      MovieTitle
                    </th>
                    <th className="border border-gray-200 py-2 px-4">
                      MovieID
                    </th>
                    <th className="border border-gray-200 py-2 px-4">
                      PersonName
                    </th>
                    <th className="border border-gray-200 py-2 px-4">Role</th>
                    <th className="border border-gray-200 py-2 px-4">
                      Payment
                    </th>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      The Avengers
                    </td>
                    <td className="border border-gray-200 py-2 px-4">M101</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Robert Downet Jr.
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Tony Stark
                    </td>
                    <td className="border border-gray-200 py-2 px-4">200m</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      The Avengers
                    </td>
                    <td className="border border-gray-200 py-2 px-4">M101</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Chris Evans
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Chris Rogers
                    </td>
                    <td className="border border-gray-200 py-2 px-4">120m</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      Batman Vs Superman
                    </td>
                    <td className="border border-gray-200 py-2 px-4">D101</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Ben Afflek
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Bruce Wayne
                    </td>
                    <td className="border border-gray-200 py-2 px-4">180m</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      Batman Vs Superman
                    </td>
                    <td className="border border-gray-200 py-2 px-4">D101</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Henry Cavill
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Clarke Cent
                    </td>
                    <td className="border border-gray-200 py-2 px-4">125m</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      A walk to remember
                    </td>
                    <td className="border border-gray-200 py-2 px-4">P101</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Mandy Moore
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Jamie Sullivan
                    </td>
                    <td className="border border-gray-200 py-2 px-4">50m</td>
                  </tr>
                </table>
              </InfoCard>

              <p>Dependency between MovieID & MovieTitle violates BCNF.</p>
              <p>Solution of BCNF</p>
              <p>Place the two candidate primary keys in separate entities</p>
              <p>
                Place each of the remaining data items in one of the resulting
                entities according to its dependency on the primary key.
              </p>
              <p>
                New Scheme -{">"}
                {"{MovieID, PersonName, Role, Payment}"}
              </p>
              <p>
                New Scheme -{">"}
                {"{MovieID, MovieTitle}"}
              </p>

              <InfoCard title="Example">
                <table className="table-auto w-full mt-4">
                  <tr className="bg-secondary">
                    <th className="border border-gray-200 py-2 px-4">
                      MovieID
                    </th>
                    <th className="border border-gray-200 py-2 px-4">
                      PersonName
                    </th>
                    <th className="border border-gray-200 py-2 px-4">Role</th>
                    <th className="border border-gray-200 py-2 px-4">
                      Payment
                    </th>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">M101</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Robert Downey Jr.
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Tony Stark
                    </td>
                    <td className="border border-gray-200 py-2 px-4">200m</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">M101</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Chris Evans
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Chris Rogers
                    </td>
                    <td className="border border-gray-200 py-2 px-4">125m</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">D101</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Ben Afflek
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Bruce Wayne
                    </td>
                    <td className="border border-gray-200 py-2 px-4">175m</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">D101</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Henry Cavill
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Clarke Cent
                    </td>
                    <td className="border border-gray-200 py-2 px-4">120m</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">P101</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Mandy Moore
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Jamie Sullivan
                    </td>
                    <td className="border border-gray-200 py-2 px-4">50m</td>
                  </tr>
                </table>
              </InfoCard>

              <InfoCard title="Example">
                <table className="table-auto w-full mt-4">
                  <tr className="bg-secondary">
                    <th className="border border-gray-200 py-2 px-4">
                      MovieID
                    </th>
                    <th className="border border-gray-200 py-2 px-4">
                      MovieTitle
                    </th>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">M101</td>
                    <td className="border border-gray-200 py-2 px-4">
                      The Avengers
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">D101</td>
                    <td className="border border-gray-200 py-2 px-4">
                      Batman VS Superman
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">P101</td>
                    <td className="border border-gray-200 py-2 px-4">
                      A walk to remember
                    </td>
                  </tr>
                </table>
              </InfoCard>

              <h2 class="text-xl font-bold mt-6">4 NF</h2>
              <p>
                Fourth normal form (4NF) is a level of database normalization
                where there are no non-trivial multivalued dependencies other
                than a candidate key.
              </p>
              <p>
                It builds on the first three normal forms (1NF, 2NF and 3NF) and
                the Boyce-Codd Normal Form (BCNF).
              </p>
              <p>
                It states that, in addition to a database meeting the
                requirements of BCNF, it must not contain more than one
                multivalued dependency.
              </p>

              <InfoCard title="Example">
                <table className="table-auto w-full mt-4">
                  <tr className="bg-secondary">
                    <th className="border border-gray-200 py-2 px-4">
                      MovieName
                    </th>
                    <th className="border border-gray-200 py-2 px-4">
                      ScreeningCity
                    </th>
                    <th className="border border-gray-200 py-2 px-4">Genre</th>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      The Avengers
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Los Angeles
                    </td>
                    <td className="border border-gray-200 py-2 px-4">Sci-Fi</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      The Avengers
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      New York
                    </td>
                    <td className="border border-gray-200 py-2 px-4">Sci-Fi</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      Batman vs Superman
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Santa Monica
                    </td>
                    <td className="border border-gray-200 py-2 px-4">Action</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      Batman vs Superman
                    </td>
                    <td className="border border-gray-200 py-2 px-4">Venice</td>
                    <td className="border border-gray-200 py-2 px-4">Action</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      A walk to remember
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      New Jersey
                    </td>
                    <td className="border border-gray-200 py-2 px-4">Drama</td>
                  </tr>
                </table>
              </InfoCard>

              <p>MovieName -{">"} ScreeningCity</p>
              <p>MovieName -{">"} Genre</p>
              <p>
                Each row in the above table represents two facts: the genre and
                the cities in which a movie is playing. These facts are stored
                in two or more tuples. The above table has 2 independent
                multivalued dependencies.
              </p>
              <p>
                To bring the above table to 4NF, we can decompose it into two
                tables:
              </p>

              <InfoCard title="Example">
                <table className="table-auto w-full mt-4">
                  <tr className="bg-secondary">
                    <th className="border border-gray-200 py-2 px-4">
                      MovieName
                    </th>
                    <th className="border border-gray-200 py-2 px-4">
                      ScreeningCity
                    </th>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      The Avengers
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Los Angeles
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      The Avengers
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      New York
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      Batman vs Superman
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      Santa Monica
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      Batman vs Superman
                    </td>
                    <td className="border border-gray-200 py-2 px-4">Venice</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      A walk to remember
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      New Jersey
                    </td>
                  </tr>
                </table>
              </InfoCard>

              <InfoCard title="Example">
                <table className="table-auto w-full mt-4">
                  <tr className="bg-secondary">
                    <th className="border border-gray-200 py-2 px-4">
                      MovieName
                    </th>
                    <th className="border border-gray-200 py-2 px-4">Genre</th>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      The Avengers
                    </td>
                    <td className="border border-gray-200 py-2 px-4">Sci-Fi</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      Batman vs Superman
                    </td>
                    <td className="border border-gray-200 py-2 px-4">Action</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2 px-4">
                      A walk to remember
                    </td>
                    <td className="border border-gray-200 py-2 px-4">Drama</td>
                  </tr>
                </table>
              </InfoCard>
            </div>
          ),
          subChapterVisualisation: null,
        },
      ],
    },
    {
      chapterId: 4,
      title: "Relational algebra",
      chapterDescription: (
        <p>
          Relational algebra is a procedural query language, which takes
          relations as input and returns relations as output. It uses operators
          to perform queries.
        </p>
      ),
      subChapter: [
        {
          title: "Basic Operators",
          subChapterContent: (
            <div>
              <h1 class="text-2xl font-bold">Relational Algebra</h1>
              <p>
                Relational algebra is a procedural query language used to query
                the relational database model. It uses a set of operators to
                perform operations on relations and produce results in the form
                of new relations.
              </p>

              <h2 class="text-xl font-bold mt-6">Selection (σ)</h2>
              <p>
                The selection operation selects tuples from a relation that
                satisfy a given predicate. It is denoted by σ
                <sub>condition</sub>(R).
              </p>
              <ul class="list-disc pl-5">
                <li>
                  Example: Select all employees who earn more than $50,000 per
                  year from the Employee table.
                  <pre>
                    <code>
                      σ<sub>Salary {">"} 50000</sub>(Employee)
                    </code>
                  </pre>
                </li>
                <li>
                  Properties:
                  <ul class="list-disc pl-5">
                    <li>
                      Idempotent: σ<sub>p</sub>(σ<sub>q</sub>(R)) = σ
                      <sub>p</sub>(R) if p ⊆ q
                    </li>
                    <li>
                      Commutative: σ<sub>p ∧ q</sub>(R) = σ<sub>q ∧ p</sub>(R)
                    </li>
                  </ul>
                </li>
              </ul>

              <h2 class="text-xl font-bold mt-6">Projection (π)</h2>
              <p>
                The projection operation extracts only the specified columns
                from a relation. It is denoted by π<sub>attribute_list</sub>(R).
              </p>
              <ul class="list-disc pl-5">
                <li>
                  Example: Extract the names and ages of all employees from the
                  Employee table.
                  <pre>
                    <code>
                      π<sub>Name, Age</sub>(Employee)
                    </code>
                  </pre>
                </li>
                <li>
                  Properties:
                  <ul class="list-disc pl-5">
                    <li>
                      Idempotent: π<sub>a, b</sub>(π<sub>c, d</sub>(R)) = π
                      <sub>a, b</sub>(R)
                    </li>
                    <li>
                      Not commutative: π<sub>a, b</sub>(R) ≠ π<sub>b, a</sub>(R)
                    </li>
                  </ul>
                </li>
              </ul>

              <h2 class="text-xl font-bold mt-6">Union (∪)</h2>
              <p>
                The union operation combines two relations and removes any
                duplicate tuples. Both relations must have the same set of
                attributes.
              </p>
              <ul class="list-disc pl-5">
                <li>
                  Example: Combine the Employee and Manager tables to find all
                  employees and managers.
                  <pre>
                    <code>Employee ∪ Manager</code>
                  </pre>
                </li>
                <li>
                  Properties:
                  <ul class="list-disc pl-5">
                    <li>Commutative: R ∪ S = S ∪ R</li>
                    <li>Associative: (R ∪ S) ∪ T = R ∪ (S ∪ T)</li>
                  </ul>
                </li>
              </ul>

              <h2 class="text-xl font-bold mt-6">Difference (-)</h2>
              <p>
                The difference operation removes tuples from one relation that
                are also present in another relation.
              </p>
              <ul class="list-disc pl-5">
                <li>
                  Example: Find all employees who are not managers.
                  <pre>
                    <code>Employee - Manager</code>
                  </pre>
                </li>
                <li>
                  Properties:
                  <ul class="list-disc pl-5">
                    <li>Not commutative: R - S ≠ S - R</li>
                    <li>Not associative: (R - S) - T ≠ R - (S - T)</li>
                  </ul>
                </li>
              </ul>

              <h2 class="text-xl font-bold mt-6">Join (⨝)</h2>
              <p>
                The join operation combines columns from two or more relations
                based on related columns.
              </p>
              <ul class="list-disc pl-5">
                <li>
                  Example: Join the Employee and Department tables to find
                  employees and their departments.
                  <pre>
                    <code>Employee ⨝ Department</code>
                  </pre>
                </li>
                <li>
                  Properties:
                  <ul class="list-disc pl-5">
                    <li>Commutative: R ⨝ S = S ⨝ R</li>
                    <li>Associative: (R ⨝ S) ⨝ T = R ⨝ (S ⨝ T)</li>
                  </ul>
                </li>
              </ul>

              <h2 class="text-xl font-bold mt-6">Intersection (∩)</h2>
              <p>
                The intersection operation returns only the tuples that appear
                in both relations.
              </p>
              <ul class="list-disc pl-5">
                <li>
                  Example: Find all employees who are also managers.
                  <pre>
                    <code>Employee ∩ Manager</code>
                  </pre>
                </li>
                <li>
                  Properties:
                  <ul class="list-disc pl-5">
                    <li>Commutative: R ∩ S = S ∩ R</li>
                    <li>Associative: (R ∩ S) ∩ T = R ∩ (S ∩ T)</li>
                  </ul>
                </li>
              </ul>

              <h2 class="text-xl font-bold mt-6">Division (÷)</h2>
              <p>
                The division operation returns tuples that are in one relation
                but not in another related relation.
              </p>
              <ul class="list-disc pl-5">
                <li>
                  Example: Find all employees who have worked on all projects.
                  <pre>
                    <code>Employee ÷ Project</code>
                  </pre>
                </li>
                <li>
                  Properties:
                  <ul class="list-disc pl-5">
                    <li>Not commutative: R ÷ S ≠ S ÷ R</li>
                    <li>Not associative: (R ÷ S) ÷ T ≠ R ÷ (S ÷ T)</li>
                  </ul>
                </li>
              </ul>
            </div>
          ),
          subChapterVisualisation: null,
        },
      ],
    },
  ],
  //fin
  path: "/courses/bdd/learn",
  quiz: "/courses/bdd/quiz", // quiz route will redirect to the next page if finished (congrats on every finish)
  next: "/courses/thg/learn",
};
