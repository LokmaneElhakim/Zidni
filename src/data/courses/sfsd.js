import RecordExample from "../visualisation/sfsd/RecordExample";
import * as ReturnToZero from "../visualisation/sfsd/Return To Zero.json";
import * as NoReturnToZero from "../visualisation/sfsd/No Return To Zero.json";
import * as PhaseEncoding from "../visualisation/sfsd/Phase Encoding.json";
import * as NRZNBloque from "../visualisation/sfsd/FNRZ Non-Bloqué.json";
import * as NRZBloque from "../visualisation/sfsd/FNRZ Bloqué.json";
import * as PENBloque from "../visualisation/sfsd/PE Non-Bloqué.json";
import * as PEBloque from "../visualisation/sfsd/PE Bloqué.json";
import * as FormEnrg from "../visualisation/sfsd/Format D'enregistrement Physique.json";
import * as FormEnrgFixedSizeNonBlocked from "../visualisation/sfsd/Le format des enregistrements de taille fixe non bloqués.json";
import * as FormEnrgFixedSizeBlocked from "../visualisation/sfsd/Le format des enregistrements de taille fixe bloqués.json";
import * as FormEnrgVarSizeNonBlocked from "../visualisation/sfsd/Le format des enregistrements de taille variable non bloqués.json";
import * as DiskOrganization from "../visualisation/sfsd/disk organization.json";
import * as treeCreation from "../visualisation/sfsd/treeCreation.json";
import * as nodeDeletion from "../visualisation/sfsd/nodeDeletion.json";
import TableSFSD from "../visualisation/sfsd/TableSFSD";
import * as storageUnits from "../visualisation/sfsd/storageUnits.json";
import * as creatingDanceTable from "../visualisation/sfsd/CreatingIndexTable.json";
import * as RepresentationsOfMultiValued from "../visualisation/sfsd/RepresentationsOfMultiValued.json";
import * as blockCirculation from "../visualisation/sfsd/blockCirculation.json";
import * as recordTypes from "../visualisation/sfsd/recordTypes.json";
import { VisualisationComponent } from "../../components/global/Visualisation/index";
import { Fragment } from "react";
export const sfsd = {
  id: 23,
  title: "File and data structure",
  description:
    "This course provides an in-depth exploration of file systems and data structures. You will learn about various types of data structures, including arrays, linked lists, stacks, queues, trees, and graphs. The course also covers file organization, storage methods, indexing, and hashing techniques, which are crucial for efficient data retrieval and storage management. By the end of the course, you will be adept at implementing and manipulating data structures to optimize performance and storage.",
  comingSoon: false,
  isNew: false,
  chaptersTitles: [
    "General information about files",
    "Media concepts",
    "Index structures",
    "B-Trees",
  ],
  chapterReference: ["1", "2", "3", "4"],
  chapters: [
    {
      chapterId: 1,
      title: "General information about files",
      chapterDescription:
        "Chapter 1 explains how a file is made up of a set of these physical blocks, containing uninterpreted bytes, and how data is organized inside these blocks. Files can be binary or text types, with significant differences in their representation and portability between systems. The chapter goes on to detail the abstract machine for file structures, which defines basic operations such as opening, closing, reading and writing files.",
      subChapter: [
        {
          id: 111,
          title: "1) Introduction",
          subChapterContent: (
            <div>
              A file, in computing, is a way of storing, organizing and managing
              information (or data) permanently or temporarily on a storage
              medium, such as a hard drive, a optical disk, USB stick, etc. The
              data contained in a file can be of any nature : texts, images,
              sounds, videos, programs, etc. Generally speaking, we can
              distinguish two types of files depending on their content: Files
              programs and data files.
              <br />{" "}
              <h4>
                <strong>Program files:</strong>
              </h4>{" "}
              These are files that contain the instructions necessary to the
              execution of a program. Example : <br />- Chrome.exe: is a program
              file that allows you to browse the web. <br />- Excel.exe: is a
              program file that allows you to create and manipulate
              spreadsheets.
              <br />
              <h4>
                <strong>Data files:</strong>
              </h4>{" "}
              These are files specially designed to store and organize data.
              data that a program is likely to use, as well as the results it
              can achieve. Unlike program files, data files are scalable, which
              means that it is possible to modify them, to delete information
              from them, to add information to them information, or simply to
              consult them. Example: Student.dat is a data file that may contain
              information relating to students of a school such as last name,
              first name, date of birth, grade, etc.
            </div>
          ),
          subChapterVisualisation: null, // no visualisation is needed for this subchapter
        },
        {
          id: 122,
          title: "2) Basic concepts",
          subChapterContent: (
            <div>
              The computer only understands binary language, a sequence of 0s
              and 1s. This is why all information must be converted into a
              series of bits before being processed by the computer. This
              information is organized into:
              <ul>
                <li>- Characters</li>
                <li>- Zones</li>
                <li>- Records</li>
                <li>- Files</li>
              </ul>
              <h4>
                <strong>2.1.Character:</strong>
              </h4>{" "}
              The character is a grouping of bits (7, 8, 16,...) used to
              represent a character alphanumeric (0, 1, 2, a, b, c, ...) or a
              special character (#, @, ...) in any encoding such as as: ASCII,
              UNICODE, etc. Character is the smallest unit of information that
              can be represented and processed by a computer.{" "}
              <h4>
                <strong>2.2.Zone (Variable):</strong>
              </h4>{" "}
              It designates a grouping of successive characters which represents
              information accessible by a treatment. In a program, to
              distinguish between the different zones, we associate them with
              identifiers.{" "}
              <h4>
                <strong>2.3.Record:</strong>
              </h4>{" "}
              A record is a set of zones grouping together information
              (contained in zones) of various types related to the same subject.
              The zones of a record can also be called 'fields'.{" "}
              <h4>
                <strong>2.4.File:</strong>
              </h4>{" "}
              On the other hand, a file, abstractly, is a set of information
              grouped in the form of records, which describe individuals or
              objects (concrete or abstract) possessing common characteristics.
              A file is characterized by the following elements:
              <ul>
                <li>-NAME</li>
                <li>
                  - EXTENSION: is a filename suffix made to identify its format.
                  Example: ('name'.docx): text file, ('name'.gif): image file
                </li>
                <li>
                  - SIZE (or volume): It designates the number of characters
                  contained in the file (2500 characters, 1000 characters...)
                </li>
                <li>
                  - STRUCTURE: the file structure defines how the data is
                  organized.
                </li>
              </ul>
            </div>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={storageUnits}
              title={"Information units"}
              description={"These information are organized into:"}
            />
          ),
        },
        {
          id: 133,
          title: "3) Logical file and physical file",
          subChapterContent: (
            <div>
              <h4>
                <strong>Logical file:</strong>
              </h4>{" "}
              A logical file describes the structure of the data it contains
              (the fields and records), without referring to the way in which
              this data is stored physically on the storage medium. The records
              of a logical file are called articles (or logical records).{" "}
              <h4>
                <strong>Physical file:</strong>
              </h4>{" "}
              A physical file corresponds to the entity allocated on the
              physical medium permanent (magnetic disk, optical disk, etc.) and
              physically contains the recordings defined in the logic file. In
              other words, a physical file is the result of storing the logical
              file on physical media. The records in the physical file are
              called physical records (or blocks). <br />
              <br />
              <em>Analogy:</em> The relationship between a logical file and a
              physical file is almost as close as that between a cooking recipe
              and the resulting dish, before and after its preparation. Here the
              recipe represents the logical file, and the flat represents the
              physical file.
            </div>
          ),
          subChapterVisualisation: null,
        },
        {
          id: 144,
          title: "4) Logical recording and physical recording",
          subChapterContent: (
            <div>
              <h4>
                <strong>Logical Recording:</strong>
              </h4>
              Logical recording refers to the manner in which data is structured
              and organized at the conceptual or abstract level (independently
              of the medium physical).
              <h4>
                <strong>Physical record:</strong>
              </h4>{" "}
              The physical record (or block) represents the quantity of
              information exchanged between the central memory and the storage
              unit. In other words, it is the smallest data entity that can be
              read or written in a single operation.
              <ul>
                <li>
                  - A physical record can contain only one logical record.
                </li>
                <li>
                  - A physical record can contain several logical records.
                </li>
                <li>
                  - Several physical recordings can contain a single recording
                  logic.
                </li>
              </ul>
              <br />
              The parameter that makes it possible to distinguish between these
              three cases is called 'blocking factor'.
            </div>
          ), //TODO: add LogicalRecord svg here
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={blockCirculation}
              title={"Block circulation"}
              description={`Definition of "Buffer": It is a region of memory used to temporarily hold data while it is being moved from one place to another.Buffers are generally used when there is a difference between the rate at which data is received and the rate at which it can be processed.`}
            />
          ),
        },
        {
          id: 155,
          title: "5) Blocking factor and its interest",
          subChapterContent: (
            <div>
              The blocking factor is the number of logical records contained in
              a physical record. It is calculated as follows:
              <br />
              <em>
                Blocking factor = Number of logical records / Number of physical
                records.
              </em>
              <br />
              The operations of reading and writing the file data on the storage
              medium are carried out record by record. Exchanges are made
              between the main memory (RAM) and the physical media.
              Consequently, blocking a certain number of logical records into
              physical records essentially makes it possible to optimize
              Input/Output (I/O) operations by saving response time.
              <br />
              Example : Let's say we have a file containing 100 records, and we
              use a blocking factor of 1 (FB = 1). In this configuration, we
              would need 100 Input/Output (I/O) operations to read the entire
              file. However, if we increase the blocking factor to 2, then we
              could accomplish the same task using only 50 I/O operations.
            </div>
          ),
          subChapterVisualisation: null,
        },
        {
          id: 166,
          title: "6) Types of records",
          subChapterContent: (
            <Fragment>
              <div className="flex justify-evenly item-baseline">
                <RecordExample />
                <span>Total size of this record: 42 character</span>
              </div>
              <ul>
                <li>
                  <strong>Fixed-length record:</strong> is a record where each
                  field has a fixed length (always occupies the same amount of
                  bytes). This means that all records in the same file are the
                  same size (constant size).
                </li>
                <li>
                  <strong>Variable length record:</strong> is a record where
                  each field has its own length. This means that records in the
                  same file can have different sizes.
                </li>
                <li>
                  <strong>Indefinite length record:</strong> is a record where
                  the size can be extremely variable and potentially unlimited.
                  A common example of this type of recording is the storage of
                  multimedia content (Images, audio...) in a file, where the
                  length of each element can vary considerably.
                </li>
              </ul>
            </Fragment>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              title={"Record types"}
              animationData={recordTypes}
              description={"Fixed-length and variable length records example"}
            />
          ),
        },
        {
          id: 177,
          title: "7) Static file and dynamic file",
          subChapterContent: (
            <ul>
              <li>
                <strong>Static file:</strong>a static file is generally used to
                store data that does not do not require frequent updates or data
                that does not change often. For example: an executable binary
                file (.exe on Windows).
              </li>
              <li>
                <strong>Dynamic file:</strong>a dynamic file is often used to
                store data constantly changing, such as database files or
                temporary files generated by running applications.
              </li>
            </ul>
          ),
          subChapterVisualisation: null,
        },
        {
          id: 188,
          title: "8) File activity",
          subChapterContent: (
            <div>
              The activity of a file is defined by the following
              characteristics:
              <ul>
                <li>-Consultation rate</li>
                <li>-Renewal rate</li>
                <li>-File stability</li>
              </ul>
              <strong>Consultation rate: </strong>
              <br /> the consultation rate designates the ratio between the
              number of records consulted (or modified) and the total number of
              records in the file during a certain period. <br />
              <em>
                CR = Number of records viewed (or modified) / Total number of
                records
              </em>
              <br /> Thus, we distinguish between: <br />
              <em>The basic consultation</em>
              rate: relating to a single treatment (execution of a program).
              <br />
              <em>The periodic consultation rate:</em> relating to a given
              period of time.
              <br /> Example, the annual consultation rate.
              <br />
              <strong> Renewal rate:</strong> The renewal rate represents the
              proportion of new records added to the total number of existing
              records in the file during a given period. <br />
              <em>
                Renewal rate = (Number of new records added) / (Total number of
                records at the start of the period)
              </em>
              <br /> <strong>File Stability:</strong>
              File stability is relative to a given period. A file is said to be
              stable for a period if the number of records created is
              approximately equal to the number of records deleted.
            </div>
          ),
          subChapterVisualisation: null,
        },
        {
          id: 199,
          title: "9) File typology",
          subChapterContent: (
            <div>
              We can distinguish several types of files according to:
              <ul>
                <li>-The nature of the information it contains</li>
                <li>-The type of media used for its storage</li>
                <li>-Organization of information</li>
                <li>-Lifetime</li>
              </ul>
              <h4>
                <strong>9.1.According to the nature of the information:</strong>
              </h4>
              A file can contain two types of information: data or programs, and
              depending on the case, we speak of a data file or a program file.
              <h4>
                <strong>
                  9.2.According to the type of media used for storage:
                </strong>
              </h4>
              Although the content of a file remains the same regardless of the
              medium used to store it, certain characteristics of the file are
              closely linked to the nature of this medium, and in particular the
              mode of access to the data it contains. For example, for a file
              stored on a magnetic tape, only sequential access can be
              practiced, whereas on a magnetic disk, access can be sequential,
              but also direct. This fact is mainly due to the manufacturing
              technologies used for storage units.
              <br />
              These technologies will be studied in chapter 2.
              <h4>
                <strong>
                  9.3.According to the organization of information:
                </strong>
              </h4>
              The organization adopted for a file is one of its most important
              characteristics, since it allows you to define the way of
              accessing the information it contains. We can distinguish three
              main types:
              <ul>
                <li>Sequential organization</li>
                <li>Indexed sequential organization</li>
                <li>Random (or direct) organization</li>
              </ul>
              These organizational methods will be studied in chapter 3.
              <h4>
                <strong>9.4.According to the lifetime:</strong>
              </h4>
              Files can be classified into five types:
              <ul>
                <li>
                  -<strong>Permanent files: </strong>
                  is a file whose information is of vital importance within the
                  application for which it was designed. Its content does not
                  undergo frequent modifications; it must be constantly checked,
                  given its importance. To avoid the risk of loss of
                  information, it is useful to make backup copies.
                </li>
                <li>
                  -<strong>Movement files: </strong>
                  the movement file is used to update a permanent file. He is
                  characterized by a short lifespan. At the end of treatment, it
                  is no longer useful.
                </li>
                <li>
                  -<strong>Maneuver files: </strong>
                  the maneuver file finds its reason for being when there is not
                  enough of space in central memory to contain all the data
                  necessary for a certain processing. Its lifespan is limited by
                  that of the treatment that created it.
                </li>
                <li>
                  -<strong>Intermediate files: </strong>
                  contains results of a given treatment to be used either during
                  the same treatment or by other subsequent treatments. It
                  allows the exchange of data between programs, unlike the
                  maneuver file which only communicates its data to the same
                  processing it generated. In addition, the lifespan of an
                  intermediate file is not limited by that of the processing
                  that created it, in order to allow other processing to use it.
                </li>
                <li>
                  -<strong>Archive and historical files: </strong>
                  allows you to keep track of the treatments carried out during
                  a given period. The difference between an archive file and a
                  historical file essentially lies in the periodicity. A
                  historical file is periodic (at the end of each week, each
                  month or half-year, etc).
                  <br />
                  Example: At the end of each semester, the results obtained by
                  the students are stored in a 'Result_S' file. This file is a
                  historical file since student results are recorded in this
                  file periodically (at the end of each semester). The
                  'Result_S' file will contain the students' semester results.
                  If, for the development of the 'Result_S' file, we had used
                  intermediate files: Result_S1, Result_S2, Result_S3 and we had
                  kept them, they would then be archive files.
                </li>
              </ul>
            </div>
          ),
          subChapterVisualisation: null,
        },
        {
          id: 210,
          title: "10) Basic File Operations",
          subChapterContent: (
            <div>
              The basic operations that can be performed on a file are:
              <ul>
                <li>
                  -<strong>Create a file:</strong>
                  Create its structure, that is to say, define the different
                  fields, as well as the length of your articles. Enter the
                  items from the file and store them on a physical medium
                  (magnetic tape, disk, etc.).
                </li>
                <li>
                  -<strong>Delete a file:</strong>
                  <br />
                  <span>
                    -Logical deletion involves marking the file in a way that
                    makes it transparent, in reality it still exists on the
                    media.
                  </span>
                  <br />{" "}
                  <span>
                    -Physical deletion erases the file permanently. The space
                    previously occupied by the file will be reclaimed.
                  </span>
                </li>
                <li>
                  -<strong>Update a file:</strong>
                  The update includes the following three treatments:
                  <br />
                  <span>-Addition: adding new records to the file.</span>
                  <br />
                  <span>
                    -Modification: changing the content of one or more records.
                  </span>
                  <br />
                  <span>
                    -Deletion: removing one or more records from the file.
                  </span>
                  The update is generally carried out on a permanent file, via a
                  movement file.
                </li>
                <li>
                  -<strong>File reunion:</strong>
                  Several sender files give rise to a new file.
                  <br />
                  Noticed : During the meeting, changes can be made to make the
                  new file easier to handle. A field can be split into several
                  fields, or the opposite, combine several fields to form one.
                  But, the content of the recording remains the same.
                  <br />
                  Example : Consider several sender files containing information
                  on a company's employees. Each transmitter file contains the
                  following data:
                  <br />
                  .Number
                  <br />
                  .Name
                  <br />
                  .First name
                  <br />
                  .Address (for example: Rue de Rabia, 1600 Algiers)
                  <br /> The company wants to create a new file to perform
                  geographic analyses, so it must divide the 'Address' field
                  into 'Street', 'Postal Code' and 'City' subfields as follows:
                  <br />
                  .Number
                  <br />
                  .Name
                  <br />
                  .First name
                  <br />
                  .Street: Rabia
                  <br />
                  .Postcode: 1600
                  <br />
                  .City: Algiers
                </li>
                <li>
                  <strong>The bursting :</strong>
                  This is the opposite operation of the reunion. A sender file
                  gives rise to several receiver files.
                  <br />
                  Noticed : Here, again, changes can be made to the file
                  structure but not to the content.
                </li>
                <li>
                  <strong>Sile sorting:</strong>
                  Sorting a file means sorting its records in ascending or
                  descending order by the value of one or more attributes called
                  "sort arguments".
                </li>
                <li>
                  <strong>Files fusion:</strong>
                  It consists of grouping the recordings of two or more files
                  into a single file.
                  <br />
                  Noticed : The files to be merged must have the same structure.
                  Therefore, the resulting file will have the same structure as
                  the files that gave rise to it.
                </li>
                <li>
                  <strong>Extraction :</strong>
                  This processing consists of extracting or copying recordings
                  or parts of recordings onto another medium according to a
                  given criterion.
                </li>
                <li>
                  <strong>The copy:</strong>
                  Copying a file amounts to duplicating its contents on a
                  medium. This treatment may be justified by different reason:
                  <br />
                  <span>
                    -Change the organization of the file to adapt it to
                    processing.
                  </span>
                  <br />
                  <span>-Allow faster access time.</span>
                  <br />
                  <span>
                    -Guarantee greater reliability to avoid loss of information.
                  </span>
                  <br />
                  <span>-Minimize storage cost.</span>
                </li>
              </ul>
            </div>
          ),
          subChapterVisualisation: null,
        },
        {
          id: 221,
          title: "11) Operations on records",
          subChapterContent: (
            <div>
              After creating the file, several operations can be performed on
              its records, namely:
              <ul>
                <li>
                  <strong>Creation: </strong>
                  which consists of entering a new record.
                </li>
                <li>
                  <strong>Deletion: </strong>
                  which amounts to erasing one or more records. If all records
                  are deleted, we obtain an empty file.
                </li>
                <li>
                  <strong>Modification: </strong>
                  consists of changing the values of one or more fields.
                </li>
                <li>
                  <strong>Consultation: </strong>
                  which amounts to reading the value of one or more fields of a
                  record.
                </li>
              </ul>
            </div>
          ),
        },
      ],
    },

    // TODO Oussama
    {
      chapterId: 2,
      title: "Media concepts",
      chapterDescription:
        "The central memory of the computer is a volatile memory, that is to say that its contents are erased when the power supply to the computer is interrupted. However, the programs and data stored in central memory and primarily the system code and data operating conditions need to be preserved beyond this cutoff. The commonly used solution to deal with this problem consists of storing the data on non-volatile mass media, such as such as the hard disk, the floppy disk, the CD-ROM or even the magnetic tape, in units called files.",

      subChapter: [
        {
          id: 221,
          title: "1) Introduction",
          subChapterContent: (
            <p>
              The central memory of the computer is a volatile memory, that is
              to say that its contents are erased when the power supply to the
              computer is interrupted. However, the programs and data stored in
              central memory and primarily the system code and data operating
              conditions need to be preserved beyond this cutoff. The commonly
              used solution to deal with this problem consists of storing the
              data on non-volatile mass media, such as such as the hard disk,
              the floppy disk, the CD-ROM or even the magnetic tape, in units
              called files.
              <br />{" "}
            </p>
          ),
          subChapterVisualisation: null, // no visualisation is needed for this subchapter
        },
        {
          id: 222,
          title: "2) Primary Memory vs. Secondary Memory",
          subChapterContent: (
            <p>
              <h4>
                <strong>A. Volatility:</strong>
              </h4>{" "}
              RAM: RAM has a limited capacity, usually measured in GB. The
              average RAM capacity in personal computers generally ranges from 4
              GB to 32 GB or more, depending on the needs and type of computer.
              RAM is much faster than secondary memory. It is designed for quick
              access to data currently in use.
              <br />
              <h4>
                <strong>B. Capacity:</strong>
              </h4>{" "}
              - RAM: RAM is volatile memory, which means that the data it
              contains is temporary and are erased when the computer is turned
              off or restarted. She serves primarily to store data in use by the
              processor and programs running.
              <br />
              - Secondary memory: Secondary memory is non-volatile, which means
              that the data stored there remain intact even when the computer is
              turned off. This is the place where are stored long-term data,
              such as files and programs.
              <br />
              <h4>
                <strong>C. Secondary memory:</strong>
              </h4>{" "}
              Secondary memory has a much larger capacity than RAM, ranging from
              128 GB to several TB for common hard drives. It is used to store
              large amounts of data permanently.
              <br />
              <h4>
                <strong>D. Access Speed:</strong>
              </h4>{" "}
              - RAM: RAM offers very fast access to data, measured in
              nanoseconds (ns), which allows the processor almost instantaneous
              access to data. -Secondary memory: Secondary memory is slower than
              RAM in terms of data access, with access times measured in
              milliseconds (ms) for hard drives. Data stored in secondary memory
              needs some time to be transferred to RAM before being accessible
              to the processor.
              <br />
              <h4>
                <strong>E. Cost:</strong>
              </h4>{" "}
              - RAM: RAM is more expensive per unit of storage than secondary
              memory. The cost of RAM varies depending on capacity, speed, and
              type of RAM (DDR3, DDR4, DDR5, etc.). - Secondary memory:
              Secondary memory is generally cheaper in terms of cost per GB than
              RAM, making it a more economical way to store large amounts of
              data permanently.
              <br />
            </p>
          ),
          subChapterVisualisation: null, // no visualisation is needed for this subchapter
        },
        {
          id: 223,
          title: "3) Magnetic storage media",
          subChapterContent: (
            <p>
              The recording on a magnetic medium, whether it's tape or disk,
              relies on the same principle: the magnetization of a surface
              covered with a magnetizable substance.
            </p>
          ),
          subChapterVisualisation: null, // no visualisation is needed for this subchapter
        },
        {
          // TO DO Bouhamza
          id: 224,
          title: "4) Principle of magnetic recording",
          subChapterContent: (
            <p>
              Magnetic media (Fig. 1) consist of a thin layer of magnetizable
              material, usually iron oxide, deposited on a flexible (tape) or
              rigid (disk) support. The magnetic layer is composed of magnetic
              microcells (small magnets) that can be magnetized by an electric
              current. Reading and writing operations are performed using a head
              consisting of the air gap of a magnet with an electrical coil
              wound around it. The read/write head magnetizes the surface of the
              medium in one direction or the other. The direction of
              magnetization indicates the value of the recorded bit (0/1).
            </p>
          ),
          subChapterVisualisation: null, // no visualisation is needed for this subchapter
        },
        {
          subChapterContent: (
            <div>
              <h4>
                <strong>4.1.Writing:</strong>
              </h4>
              Recording (writing) information onto the magnetic medium involves
              passing an electric current through the coil that constitutes the
              head. The passage of current through the coil generates a
              localized magnetic field, and the area (the cell) of the magnetic
              surface in front of the air gap becomes magnetized. This
              magnetization orients the particles (microcells) of the material.
              The orientation of the particles depends on the direction of the
              electric current. This is how writing is performed, with the
              orientation of the particles defining the value to be assigned to
              the magnetized
            </div>
          ),
          subChapterVisualisation: null, // no visualisation is needed for this subchapter
        },
        {
          subChapterContent: (
            <div>
              <h4>
                <strong>4.2.Reading</strong>
              </h4>
              To read the stored information, a read head is used to detect the
              magnetic changes on the medium. When this head passes over the
              magnetized areas (cells), an electric current is induced in the
              coil. The direction of the induced electric current depends on the
              type of magnetization. Thus, based on the direction of the
              electric current, it is possible to determine the value of the
              information that has just been read (0 or 1).
            </div>
          ),
          subChapterVisualisation: null, // no visualisation is needed for this subchapter
        },
        {
          id: 225,
          title: "5) Recording density",
          subChapterContent: (
            <div>
              In general, recording density represents the amount of information
              that can be stored per unit of surface area (or length) on the
              magnetic medium. In practice, it is measured in Bits Per Square
              Inch (bpi). In other words, it is equal to the number of bits
              stored per inch along a recording track.
            </div>
          ),
          subChapterVisualisation: null, // no visualisation is needed for this subchapter
        },
        {
          id: 226,
          title: "6) Recording modes",
          subChapterContent: (
            <p>
              <h4>
                <strong>6.1.RZ mode (Return to Zero) :</strong>
              </h4>{" "}
              In this mode, each data bit (1 or 0) is represented by a magnetic
              transition (a direction of magnetization). The bits are separated
              by a neutral value (non-magnetized zone). It is this absence of
              magnetization that corresponds to zero.
              <br />
            </p>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={ReturnToZero}
              title={"Return To Zero"}
              description={``}
            />
          ),
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>6.2.NRZ mode (Non Return to Zero) :</strong>
              </h4>{" "}
              Unlike the RZ mode, the NRZ (Non Return to Zero) mode does not
              require a return to zero after each bit. In NRZ mode, the magnetic
              state remains constant throughout the duration of a sequence of
              equal bits, whether they are 1s or 0s, which means there is no
              magnetic transition in the middle. Another magnetic state is
              generated only if there is a transition from 1 to 0 or from 0 to
              1.
              <br />
            </p>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={NoReturnToZero}
              title={"Non Return To Zero"}
              description={``}
            />
          ),
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>6.3.PE mode (Phase Encoding) :</strong>
              </h4>{" "}
              In this mode, each data bit is represented by two small magnets.
              In between, there is a transition. If this transition is positive,
              we have a 1, if it is negative, we have a 0.
              <br />
            </p>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={PhaseEncoding}
              title={"Phase Encoding"}
              description={``}
            />
          ),
        },
        {
          id: 227,
          title: "7) Recording Formats",
          subChapterContent: (
            <p>
              <h4>
                <strong>7.1.1.Recording format in NRZ mode:</strong>
              </h4>{" "}
              In this mode, control characters are added to the physical block.
              This integration aims to allow control mechanisms to verify the
              integrity of data, whether during writing or reading. The main
              control characters used for this purpose are the CRC (Cyclic
              Redundancy Check) and the LRC (Longitudinal Redundancy Check). The
              reading process of a block starts at the first byte identified
              after a GAP and continues until the next GAP is detected. During
              reading, only the actual data (logical records) are transferred to
              the main memory. Control characters are not transmitted.
              <h4>
                <strong>A-Unblocked recording (F=1):</strong>
              </h4>
              In this case, the number of control characters (CRC and LRC) is
              equal to the number of logical records, since each block contains
              only one logical record, resulting in a significant loss of
              storage space.
            </p>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={NRZNBloque}
              title={"Recording format in NRZ mode:"}
              description={``}
            />
          ),
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>B-Blocked recording (F &gt; 1):</strong>
              </h4>
              In this case, the number of control characters (CRC and LRC) is
              equal to the number of logical records, since each block contains
              only one logical record, resulting in a significant loss of
              storage space.
            </p>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={NRZBloque}
              title={"Recording format in NRZ mode:"}
              description={``}
            />
          ),
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>7.1.2.Recording format in PE mode:</strong>
              </h4>{" "}
              In this mode, 41 characters, called synchronization characters,
              are inserted before and after the useful data. The reading process
              of a block begins with the first record following the 41
              synchronization characters and continues until the next 41
              characters are identified.
              <h4>
                <strong>A-Unblocked recording (F=1):</strong>
              </h4>
              Each logical record begins and ends with 41 synchronization
              characters.
              <br />
            </p>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={PENBloque}
              title={"Recording format in PE mode:"}
              description={``}
            />
          ),
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>B-Blocked recording (F &gt; 1):</strong>
              </h4>
              Each physical block (containing several logical records) begins
              and ends with 41 synchronization characters.
              <br />
            </p>
          ),

          subChapterVisualisation: (
            <VisualisationComponent
              animationData={PEBloque}
              title={"Recording format in PE mode:"}
              description={``}
            />
          ),
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>7.2.Characteristics of a magnetic tape:</strong>
              </h4>{" "}
              The main characteristics of a magnetic tape are as follows:
              <br />
            </p>
          ),
          subChapterVisualisation: null, // no visualisation is needed for this subchapter
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>A.Storage capacity:</strong>
              </h4>{" "}
              <br />
              The storage capacity of a magnetic tape is generally expressed in
              terabytes (TB) or gigabytes (GB), depending on the technology and
              recording density. Modern magnetic tapes can offer capacities
              ranging from a few tens of GB to several TB per cartridge.
              <br />
            </p>
          ),
          subChapterVisualisation: null, // no visualisation is needed for this subchapter
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>B.Recording density:</strong>
              </h4>{" "}
              <br />
              Recording density indicates the number of bits recorded per unit
              length, generally expressed in bpi (bits per inch). A higher
              recording density allows more data to be stored on the same length
              of tape. The recording density of magnetic tapes is constantly
              increasing and can vary depending on the technology, format, and
              manufacturer. However, modern magnetic tapes typically offer high
              recording densities, ranging from 6,000 to 50,000 bpi.
              <br />
            </p>
          ),
          subChapterVisualisation: null, // no visualisation is needed for this subchapter
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>C.Tape width:</strong>
              </h4>{" "}
              <br />
              The tape width is the physical width of the magnetic tape. It can
              vary depending on the technology and application, ranging from a
              few millimeters to several inches.
              <br />
            </p>
          ),
          subChapterVisualisation: null, // no visualisation is needed for this subchapter
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>D.Tape width:</strong>
              </h4>{" "}
              <br />
              Tape length: The tape length determines the total storage capacity
              of a tape cartridge. Magnetic tapes can vary in length, ranging
              from a few meters to several tens of meters.
              <br />
            </p>
          ),
          subChapterVisualisation: null, // no visualisation is needed for this subchapter
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>E.Lifespan and reliability:</strong>
              </h4>{" "}
              <br />
              Magnetic tapes are generally designed to have a long lifespan and
              good reliability for long-term data preservation. A high-quality
              magnetic tape can last for several decades.
              <br />
            </p>
          ),
          subChapterVisualisation: null, // no visualisation is needed for this subchapter
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>F.Types of tapes:</strong>
              </h4>{" "}
              <br />
              There are different types of magnetic tapes, including backup
              tapes, data storage tapes, tapes for audio/video production, etc.
              <br />
            </p>
          ),
          subChapterVisualisation: null, // no visualisation is needed for this subchapter
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>E.Sequential access:</strong>
              </h4>{" "}
              <br />
              Sequential access mode is the most common for magnetic tapes. Data
              is stored linearly on the tape, and to access a specific piece of
              data, you need to traverse the magnetic tape from the beginning
              (or from a specific point) sequentially until reaching the desired
              block. This means that data access occurs in the order in which it
              was recorded. Sequential access is generally slower because it
              requires traversing the entire magnetic tape or a long distance to
              access a specific piece of data. The search speed depends on the
              speed of the tape scrolling, recording density, and the total
              length of the tape.
              <br />
            </p>
          ),
          subChapterVisualisation: null, // no visualisation is needed for this subchapter
        },
        {
          // TO DO Bouhamza
          id: 228,
          title: "8) Magnetic disks",
          subChapterContent: (
            <div>
              <h4>
                <strong>A.disk organization</strong>
              </h4>
              To store information on the disk, an adequate organization is
              necessary to facilitate writing and reading operations. This
              organization is referred to in computing terms as formatting. The
              formatting operation involves organizing the disk into tracks and
              sectors. Each side of a disk platter is divided into tracks, which
              are concentric circles numbered starting from 0 from the outside.
              Depending on the model, the number of tracks per side varies from
              10 to over 1,000. There is an inter-track space between each track
              where no information is recorded. Each track is further divided
              into equal-sized parts called sectors (ranging from 4 to 32
              sectors per track), with the sector being the smallest unit of
              reading/writing on the disk. The size of a sector typically ranges
              from 32 to 4,096 bytes, with a common value being 512 bytes.
              Sectors are also separated by inter-sector spaces. Thus, the
              smallest physically accessible unit on the disk is the sector. To
              optimize reading and writing operations, sectors are grouped into
              blocks. A block consists of several sectors and represents the
              smallest unit of exchange between the disk and the central memory.
            </div>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={DiskOrganization}
              title={"disk organization:"}
              description={``}
            />
          ),
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>B-Physical recording format (F &gt; 1):</strong>
              </h4>
              A physical record (block) consists of four zones: the address
              mark, the counting zone, the key zone, and the data zone.
              <br />
            </p>
          ),

          subChapterVisualisation: (
            <VisualisationComponent
              animationData={FormEnrg}
              title={"RecordingPhysical recording format:"}
              description={``}
            />
          ),
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>C-Recording formats :</strong>
              </h4>
              The format of data recorded on addressable media depends on the
              type of records (fixed-size, variable-size, or indefinite-size),
              as well as whether these records are blocked or unblocked. Below,
              we'll cover:
              <br />
              -The format of unblocked fixed-size records (F=1)
              <br />
              -The format of blocked fixed-size records
              <br />
              -The format of unblocked variable-size records (F=1)
              <br />
              -The format of blocked variable-size records
              <br />
            </p>
          ),
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>
                  C.1.The format of unblocked fixed-size records (F=1):
                </strong>
              </h4>
              In this case, all records in the file have a fixed length. Each
              data zone contains a single logical record, with the key zone
              reserved for the record identifier, if it has one. Typically, this
              identifier is not repeated in the data zone.
              <br />
            </p>
          ),

          subChapterVisualisation: (
            <VisualisationComponent
              animationData={FormEnrgFixedSizeNonBlocked}
              title={"The format of unblocked fixed-size records (F=1):"}
              description={``}
            />
          ),
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>C.2.The format of blocked fixed-size records</strong>
              </h4>
              In this case, all records in the file have a fixed length. Each
              block contains multiple logical records. Therefore, all blocks are
              of the same size, except for the last one, which may be shorter.If
              logical records have an identifier, there is:
              <br />
              -At the level of each block, the key zone will contain the largest
              identifier of the logical records within the block.
              <br />
              -At the level of each logical record, there is a key zone, which
              will contain the key of the logical record.
              <br />
            </p>
          ),

          subChapterVisualisation: (
            <VisualisationComponent
              animationData={FormEnrgFixedSizeBlocked}
              title={"The format of blocked fixed-size records:"}
              description={``}
            />
          ),
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>
                  C.3.The format of unblocked variable-size records (F=1)
                </strong>
              </h4>
              In this case, the length of logical records is variable, but it is
              between two known bounds. Each physical record contains a counter
              indicating the length of the logical record, including the counter
              itself. Another counter indicates the length of the block, also
              including this counter. Although this second counter has no
              utility in the case of unblocked records, it is still present.
              <br />
            </p>
          ),

          subChapterVisualisation: (
            <VisualisationComponent
              animationData={FormEnrgVarSizeNonBlocked}
              title={"The format of unblocked variable-size records (F=1)"}
              description={``}
            />
          ),
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>C.4.The format of blocked variable-size records</strong>
              </h4>
              In this case, the format of the data zone is similar to that of
              the unblocked record. In the presence of identifiers for the
              logical records, a specific zone is dedicated to the largest
              identifier among those of the records in the block.
              <br />
            </p>
          ),
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>D-Recording density on a disk</strong>
              </h4>
              Recording density on a disk represents the number of bits that can
              be stored per inch along a recording track, measured in bpi (bits
              per inch). Generally, the density is calculated according to the
              following formula:
              <br />
              <h4>
                <strong>D = Nb / L</strong>
              </h4>
              As :
              <br />
              - Nb : The number of bits.
              <br />
              - L : Length in inches.
              <br />
              The linear recording density per track is calculated as follows:
              <h4>
                <strong>Dl = Nbp / L</strong>
              </h4>
              <br />
              As :
              <br />
              - Nbp : Number of bits per track
              <br />
              - L: Length of a track in inches
              <br />
            </p>
          ),
        },
        {
          subChapterContent: (
            <p>
              <h4>
                <strong>E-Hard disk capacity</strong>
              </h4>
              The capacity of a hard disk is the amount of data it can store. It
              is expressed in bytes, kilobytes, and beyond (see the table
              below). The capacity of a disk depends on its geometry and sector
              capacity.
              <br />
              <h4>
                <strong>Cd = Cs * Nsp * Nc * Nt</strong>
              </h4>
              <br />
              - Cs: Sector capacity.
              <br />
              - Nsp: Number of sectors per track.
              <br />
              - Nc: Number of cylinders.
              <br />
              - Nt: Number of heads.
              <br />
            </p>
          ),
        },
      ],
    },

    // TODO Chakib
    {
      chapterId: 3,
      title: "Index structures",
      chapterDescription:
        "Chapter 3 addresses index structures, which are essential for accelerating the search for records in a database. It begins by defining general concepts, including the search key, which is used to retrieve specific records. The index is presented as a data structure in main memory (MM) or secondary memory (SM), offering single-key and multi-key access methods. In the context of single-key access, various types of indexes are explored, such as MM indexes, SM indexes, and multi-level indexes. The use of MM indexes for searching, inserting, and deleting records is detailed. Additionally, the process of creating, saving, and loading indexes is discussed. The chapter also covers aspects of multi-key access, where multiple attributes are used for searches. It presents techniques such as independent indexes, inverted indexes, and bitmap indexes to efficiently handle these queries. The use of MM indexes in the form of binary search trees and the exploration of large indexes are also addressed. Finally, the chapter explores the steps of a multi-key query, including the use of secondary and primary indexes to filter and retrieve relevant records. It also discusses the procedures for inserting and deleting records, emphasizing the updating of associated indexes. In summary, this chapter provides a comprehensive understanding of index structures and their effective use in database management.",
      subChapter: [
        {
          id: 111,
          title: "1) Introduction",
          subChapterContent: (
            <div>
              <p>
                Sequential file structures can become inefficient when the data
                file grows in size. Operations such as searching and inserting
                become less efficient. Indexing methods aim to enhance
                performance by managing an auxiliary structure (index table)
                that accelerates the <strong>search</strong> for records.
              </p>
              <br />
              <h4>
                <strong>1.1 Defenition of Index</strong>
              </h4>
              <p>
                An index is a data structure used to speed up the retrieval of
                records in memory or on disk. It helps find specific data
                quickly within a file or database. By organizing key-value pairs
                or pointers, indexes make it easier to access the information
                you need, improving the efficiency of data searches.
                <br />
                Often, an index is an ordered table in main memory, containing,
                among other things, pairs:
                <br />
                <strong>{"<key_value, record_address>."}</strong>
              </p>
              <br />
              <h4>
                <strong>1.2 The uses of index table :</strong>
              </h4>{" "}
              <ol>
                <li>
                  <strong>-Speeding Up Searches</strong>: An index table allows
                  for faster data retrieval by providing quick access to the
                  location of records.
                </li>
                <li>
                  <strong>-Efficient Sorting</strong>: It helps in efficiently
                  sorting data based on indexed columns, making it easier to
                  retrieve sorted results.
                </li>
                <li>
                  <strong>-Facilitating Range Queries</strong>: Index tables
                  enable efficient execution of range queries, such as finding
                  all records within a specific range of values.
                </li>

                <li>
                  <strong>-Improving Filtering</strong>: Indexes allow for
                  faster filtering of records based on specific criteria,
                  reducing the need to scan entire tables.
                </li>
                <li>
                  <strong>-Boosting Aggregate Functions</strong>: They enhance
                  the performance of aggregate functions (e.g., COUNT, SUM) by
                  quickly accessing the relevant data.
                </li>
                <li>
                  <strong>-Optimizing Query Performance</strong>: Overall, index
                  tables optimize query performance by reducing the time and
                  computational resources required for data retrieval.
                </li>
              </ol>
              <br />
              <h4>
                <strong>1.3 Search Key :</strong>
              </h4>
              The 'search key', or set of criteria used to locate records, is
              pivotal in data retrieval:
              <p>
                <strong>Example of searches :</strong>'Person.dat'
                {" < Id , Name, Age >"}
                <br />→ For the 'Id' search key with value '0005': Result:
                <br />
                '0005' , 'Mia Lee' , 21
                <br />→ For the 'Age' search key with value '049': Result:
                <br></br>
                '0007','Ava Doe','49'
                <br></br>
                '0010','Farah Ole','49'
              </p>
              <br></br>
              <br />
            </div>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={creatingDanceTable}
              height={500}
              width={500}
              title={"Example of Creating an Index table for a TOF File"}
              description={
                "We will use a concrete example to illustrate the creation of a dense index table for a file viewed as TOF (Table Ordered with Fixed-length records). Suppose we have a data file containing information about students ,The records are ordered by ID"
              }
            />
          ),
        },
        {
          id: 166,
          title: "2) Single-key access",
          subChapterContent: (
            <div>
              <p>
                The key can be either unique-valued or non-unique
                (multiple-valued).
              </p>
              <br></br>
              <h4>
                <strong>
                  2.1 Representations of multi-valued index tables:
                </strong>
              </h4>
              <ul>
                <li>-One entry per key value</li>
                <li>-Multiple entries per key value</li>
              </ul>
              (Check Visualisation bellow)
            </div>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={RepresentationsOfMultiValued}
              height={500}
              width={500}
              title={"Representations of multi-valued index tables"}
              description={""}
            />
          ),
        },
        {
          id: 177,
          title: "2.2 Dense Index (Non-Clustered Index):",
          subChapterContent: (
            <div>
              <p>
                An index is termed 'dense' if it includes all values of the key
                attribute from the data file. In such cases, maintaining the
                file's order based on this attribute is unnecessary.
              </p>
              <br></br>
              <h4>
                <strong>2.3 Non-Dense Index (Clustered Index):</strong>
              </h4>
              <p>
                Conversely, an index is labeled 'non-dense' if it doesn't
                encompass all values of the key attribute from the data file.
                For instance, only one value per block or group of blocks may be
                retained in the index. Consequently, the file must be organized
                based on the indexed attribute. One advantage of a non-dense
                index is its reduced size compared to a dense index for the same
                data file.
                <br></br>
                <strong>→Example On dense and Non-dense index :</strong>
                <br></br>
                Consider a File storing information about students, where each
                student has a unique student ID.
              </p>
              <TableSFSD />
              <p>
                If we create an index table on the student ID column, it would
                be considered dense because the file is Ordered on Id.
                <br></br>
                In this example, a dense index on the student ID does not
                conatain all the students Id,(for example it could contain the
                last/first student ID of each Block)
                <br></br>
                But if we create an index table on the department ID column, it
                would be considered non-dense, the file is not Ordered on
                department Id
                <br></br>
                In this example, a non-dense index on the department ID
                conatains all the Departements Id
              </p>
            </div>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={creatingDanceTable}
              height={500}
              width={500}
              title={"Example of Creating an Index table for a TOF File"}
              description={
                "We will use a concrete example to illustrate the creation of a dense index table for a file viewed as TOF (Table Ordered with Fixed-length records). Suppose we have a data file containing information about students ,The records are ordered by ID"
              }
            />
          ),
        },
        {},
      ],
    },
    //TODO MOULOUDJ
    {
      chapterId: 4,
      title: "Trees in Secondary Memory: B-Trees",
      chapterDescription:
        "It is one of the most efficient access methods known today for large, highly dynamic files",
      subChapter: [
        {
          id: 111,
          title: "1) Introduction",
          subChapterContent: (
            <p>
              Fully balanced search tree files
              <br></br>- Same block structures and same declarations
              <br></br>- Same search mechanisms (for a value and by range of
              values)
            </p>
          ),
          subChapterVisualisation: null,
        },
        {
          id: 112,
          title: "2) Properties",
          subChapterContent: (
            <>
              <p>
                A B-tree of order N is a m-ary search tree of order N satisfying
                the following properties:
              </p>
              <ol type="a">
                <li>
                  a.All nodes (other than the root) must be filled to at least
                  50% of their capacity (minimum degree = [N/2]){" "}
                </li>
                <li>
                  b.The root node can contain at least one single value and two
                  children
                </li>
                <li>c.All leaves are in the same level</li>
                <li>
                  d.In an internal node, all children (Child(1), Child(2),
                  ...Child(degree)) are different from -1 and in a leaf node,
                  all children (Child(1), Child(2), ...Child(degree)) are at -1
                </li>
              </ol>
            </>
          ),
        },
        {
          id: 113,
          title: "3) Insertion Mechanism",
          subChapterContent: (
            <>
              <ol type="I">
                <li>
                  I. Search for x, If v already exists, Go to IV (End)
                  Otherwise, Let P be the last node visited (it's a leaf) and Go
                  to 2.
                </li>
                <li>
                  II. If (P is not full) Insert x into P (by internal shifts)
                  and Go to IV (End)
                </li>
                <li>
                  III. // If P is full, we must split P into two nodes:
                  <br /> Allocate a new node ⇒ Q <br />
                  P: will contain the first half,
                  <br /> Q: will contain the last half <br />
                  Let m be the value of the middle separating the two halves{" "}
                  <br />{" "}
                  <strong>
                    // we must now insert m into the father of P...<br></br>
                  </strong>{" "}
                  x ←m ; P ← father(P); If (P == nil ), P← AllocateNewRoot Go to
                  II.
                </li>
                <li>IV. // End</li>
              </ol>
            </>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={treeCreation}
              height={500}
              width={600}
              title={"Insertion (and creation) Mechanism in B-Trees"}
              description={"Inserting nodes from given array"}
            />
          ),
        },
        {
          id: 114,
          title: "4) Deletion Mechanism",
          subChapterContent: (
            <>
              <ol type="I">
                <li>I. Search (c) → (i, j) with stacking of visited nodes</li>
                <li>
                  II. If i is an internal node
                  <br />
                  <strong>replace c by its inorder successor c'</strong>{" "}
                  (necessarily in a sheet) let's put (i, j) the address of this
                </li>
                <li>
                  III. Deletion of position j (and its right-hand child) by
                  internal shifts in i
                </li>
                <li>
                  IV. If i becomes 'underflow' <br></br>
                  If one of i's brothers is more than 50% loaded (contains more
                  than the minimum)<br></br> <strong>Redistribution</strong>{" "}
                  with this brother <br></br>
                  Otherwise<br></br> // the brothers are therefore loaded at a
                  minimum<br></br>
                  <strong>Merger</strong> with one of the brothers <br></br>
                  =&gt; deletion of val_milieu in the father: (<u>
                    Unstack
                  </u>{" "}
                  &lt;i, j ...&gt;; goto III)
                </li>
              </ol>
            </>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={nodeDeletion}
              height={500}
              width={600}
              title={"Deletion Mechanism in B-Trees"}
              description={
                "4 Cases of nodes deletion are treated in this annimation, x=7,x=1,x=8,x=7"
              }
            />
          ),
        },
      ],
    },
  ],

  path: "/courses/sfsd/learn",
  quiz: "/courses/sfsd/quiz", // quiz route will redirect to the next page if finished (congrats on every finish)
  next: "/courses/algebra/learn",
};
