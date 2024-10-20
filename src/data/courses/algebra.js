import * as Addition from "../../data/visualisation/algebra/addition1.json";
import * as Soustraction from "../../data/visualisation/algebra/substraction1.json";
import * as MultipleByK from "../../data/visualisation/algebra/multiplication_number.json";
import * as Multiplication from "../../data/visualisation/algebra/multiplication1.json";
import * as MatrixDetCalc from "../../data/visualisation/algebra/determinant_calcul1.json";
import * as AppLinear from "../../data/visualisation/algebra/linear_application_matrix.json";
import * as Matrix from "../../data/visualisation/algebra/matrix.json";
import * as MatrixDet from "../../data/visualisation/algebra/matrix determinant.json";
import { VisualisationComponent } from "../../components/global/Visualisation/index";

export const algebra = {
  id: 11,
  title: "Algebra",
  description:
    "In Algebra 3, you will dive into advanced algebraic concepts and techniques. The course covers polynomial, rational, exponential, and logarithmic functions, as well as sequences, series, and complex numbers. You will also explore advanced topics such as matrix theory, determinants, eigenvalues, and eigenvectors. This course is designed to enhance your problem-solving skills and mathematical reasoning, preparing you for higher-level mathematics and applications in various fields.",
  comingSoon: false,
  isNew: true,
  chaptersTitles: [
    "Review of Algebra 2 Concepts",
    "Matrix of a linear mapping",
    "Reduction of Endomorphisms",
  ],

  chapters: [
    {
      chapterId: 1,
      title: "Review of Algebra 2 Concepts",
      chapterDescription: "",
      subChapter: [
        {
          id: 111,
          title: "1) Review of Vector Spaces",
          subChapterContent: (
            <div>
              Let (E,+) be a group (written additively) soit (E, +) un groupe
              (noté additivement) et K un corps (K = Q , R ou C).(K, + , .)
              <br />
              (represents addition and multiplication (usually within R))
              <br />
              <strong>E is said to be a vector space over K if</strong>
              <br />
              1. (E, +) is an abelian group (+ is commutative).
              <br />
              2. il existe une loi notée . (externe)There exists a law denoted
              (external):
              <br />
              K×E → E
              <br />
              (d,x) → d⋅x, d∈K, x∈E
              <br />
              - d ⋅ (x+y) = d ⋅ x + d ⋅ y
              <br />
              - (d + β) ⋅ x = d ⋅ x + β ⋅ x
              <br />
              - ( dβ ) ⋅ x = d ⋅ ( β ⋅ x )
              <br />
              - 1 K​⋅ x = x
              <br />
              <br />
              <strong>Examples :</strong>
              <br />
              1- K = R
              <br />
              1.1 R^(n) is a vector space over R.
              <br />
              (x 1​,…,x n​)+(y1​,…,yn​)=(x 1​+y1​,…,x n​+y n​)
              <br />
              d⋅(x 1​,…,xn​)=(dx1​,…,dxn​)
              <br />
              1.2 R[x]=&#123; p (polynomial with coefficients in R) &#125;
              <br />
              1.3 Rn​[x]=&#123; p∈R[x]∣degp≤n &#125;
              <br />
              <strong>F is said to be a subspace of E if</strong>
              <br />
              a- (F , +) s/g de (E , +)
              <br />
              b- d ∈ K , x ∈ F , d.x ∈ F
              <br />
              <br />
              <strong>Remarks :</strong>
              <br />
              A- F1 and F2 are subspaces of E so F1 ∩ F2 is subspace
              <br />
              B- The union is not always a subspace.
              <br />
              C- F1 + F2 = &123; f1 + f2 / f1 ∈ F1 , f2 ∈ F2 &125; is subspace
              of E.
              <br />
              dim (f1 + f2) = dim f1 + dim f2 - dim F1 ∩ F2
              <br />
              D- If F1 + F2 = E and F1 ∩ F2 = &123; neutral element of E &125;
              =&gt; F1 is supplementary to F2 in E. ( or the inverse)
            </div>
          ),
          subChapterVisualisation: null, // no visualisation is needed for this subchapter
        },
        {
          id: 112,
          title: "2) Review linear mappings",
          subChapterContent: (
            <div>
              Let f be a function : f : E → E (E and F are two subspaces in R)
              <br />
              f is said to be linear if :
              <br />
              A- f(x + y) = f(x) + f(y)
              <br />
              B- f(d x) = d f(x)
              <br />
              <strong>OR</strong>
              <br />
              -f(ax + by) = a f(x) + b f(y)
              <br />
              <strong>
                Kerf = &123; x ∈ E / f(x) = Of (neutral element) &125; ⊆ E
              </strong>
              <br />
              <strong>Imf = &123; f(x) / x ∈ E &125; ⊆ F</strong>
              <br />
              <strong>Kerf = &123; dim kerf + dim Imf = dim E &125;</strong>
            </div>
          ),
          subChapterVisualisation: null, // no visualisation is needed for this subchapter
        },
        {
          id: 113,
          title: "3) Review Matrix",
          subChapterContent: (
            <div>
              A matrix is a mathematical structure consisting of numbers
              organized in rows and columns. Formally, a matrix is a rectangular
              grid of numerical elements. The elements of a matrix can be real
              numbers, complex numbers, or even algebraic expressions. A matrix
              is usually defined by its dimensions, i.e., the number of rows and
              the number of columns. For example, a matrix with m rows and n
              columns is called a matrix of size m×n.
            </div>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={Matrix}
              title={"What is a Matrix"}
              description={""}
            />
          ),
        },
        {
          title: "3.1.a. Addition",
          subChapterContent: (
            <div>
              To add two matrices together, they must have the same dimensions.
              Addition of matrices is performed element-wise, meaning you add
              corresponding elements from each matrix to obtain the
              corresponding element in the result.
            </div>
          ),
          // visualisation To Do Bouhamza

          subChapterVisualisation: (
            <VisualisationComponent
              animationData={Addition}
              title={"Addition of two matrices"}
              description={""}
            />
          ),
        },
        {
          title: "3.1.b. Substraction",
          subChapterContent: (
            <div>
              Subtraction of two matrices involves subtracting corresponding
              elements from each other. If you have two matrices A and B, both
              with the same dimensions m×n, then the resulting matrix C from
              subtracting B from A has the same dimensions and its elements are
              computed as follows:
            </div>
          ),
          // visualisation To Do Bouhamza

          subChapterVisualisation: (
            <VisualisationComponent
              animationData={Soustraction}
              title={"Substraction of two matrices"}
              description={""}
            />
          ),
        },
        {
          title: "3.2. Multiplication by K",
          subChapterContent: (
            <div>
              To multiply a matrix by a scalar k, you simply multiply each
              element of the matrix by k. This operation is known as scalar
              multiplication.
            </div>
          ),
          // visualisation To Do Bouhamza
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={MultipleByK}
              title={"Multiplication of matrix by number K"}
              description={""}
            />
          ),
        },
        {
          title: "3.3. Multiplication",
          subChapterContent: (
            <div>
              To multiply two matrices together, their dimensions must be
              compatible. Specifically, the number of columns in the first
              matrix must equal the number of rows in the second matrix. If A is
              an m×n matrix and B is an n×p matrix, the resulting matrix C from
              multiplying A by B will be an m×p matrix.
            </div>
          ),
          // visualisation To Do Bouhamza
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={Multiplication}
              title={"Multiplication of two matrices"}
              description={""}
            />
          ),
        },
        {
          id: 114,
          title: "4) Review Matrix Determinant",
          subChapterContent: (
            <div>
              The determinant of a square matrix is a scalar value that
              represents certain properties of the matrix in linear algebra.
              It's typically denoted as det(A), where A is the matrix.
              Determinants are defined only for square matrices (matrices with
              the same number of rows and columns m = n).
            </div>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={MatrixDet}
              title={"Present Matrix Determinant"}
              description={""}
            />
          ),
        },
        {
          title: "Remarks :",
          subChapterContent: (
            <div>
              the determinant is considered as a function denoted
              <br />
              det : Mn(k) → K
              <br />
              A → det (A) ∈ K
              <br />
              <br />
              <strong>Properties</strong>
              <br />
              A- If a column (or a row) of a determinant is zero, then the
              determinant is zero
              <br />
              B- The determinant is linear with respect to each row (to each
              column)
            </div>
          ),
        },
        {
          title: "4.1. Method of calculating determinant :",
          subChapterContent: (
            <div>
              <h4>
                <strong>4.1.1. Methode 1 :</strong>
              </h4>
              Calculating the determinant of a matrix by expanding along a row
              or column is a method that can be applied to matrices of any size.
              Here's a step-by-step explanation for this method
              <br />
              1- Write the matrix.
              <br />
              2- Choose a row or a column: For simplicity, let's choose the
              first row (you can choose any row or column).
              <br />
              3- Expand along the chosen row: The determinant of matrix A can be
              calculated by taking the sum of the products of the elements of
              the row and their corresponding cofactors.The cofactor Cij​ is
              calculated as:
              <br />
              4- Calculate the minors and cofactors for each element in the
              first row.
              <br />
              5- Calculate the determinant:
              <br />
              det(A)=aC11​+bC12​+cC13​= a(ei−fh)+b(fg−di)+c(dh−eg)
              <br />
            </div>
          ),

          // To Do Bouhamza Visualisation
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={MatrixDetCalc}
              title={"Calc Matrix Determinant"}
              description={""}
            />
          ),
        },
        {
          subChapterContent: (
            <div>
              <h4>
                <strong>
                  4.1.2. Methode of Sarrus (Only for matrices 3x3) :
                </strong>
              </h4>
              The Sarrus method is a simple technique for calculating the
              determinant of a 3x3 matrix. Here are the detailed steps to use
              this method:
              <br />
              1- Write the matrix.
              <br />
              2- Copy the first two columns to the right of the matrix.
              <br />
              3- Calculate the products of the downward diagonals (from top left
              to bottom right) and sum them.
              <br />
              <strong>aei+bfg+cdh</strong>
              <br />
              - aei: product of the elements on the main diagonal.
              <br />
              - bfg: product of the elements of the second downward diagonal.
              <br />
              - cdh: product of the elements of the third downward diagonal.
              <br />
              4- Calculate the products of the upward diagonals (from bottom
              left to top right) and sum them:
              <br />
              <stong>ceg+bdi+afh</stong>
              <br />
              - ceg: product of the elements of the main upward diagonal.
              <br />
              - bdi: product of the elements of the second upward diagonal.
              <br />
              - afh: product of the elements of the third upward diagonal.
              <br />
              5- Subtract the sum of the upward diagonal products from the sum
              of the downward diagonal products:
              <br />
              Determinant=(aei+bfg+cdh)−(ceg+bdi+afh)
              <br />
              In summary, the determinant of matrix A is given by the formula:
              <br />
              det(A)=aei+bfg+cdh−ceg−bdi−afh
              <br />
            </div>
          ),

          // To Do Bouhamza Visualisation
        },
      ],
    },
    {
      chapterId: 2,
      title: "Matrix of a linear mapping",
      chapterDescription: <p></p>,
      subChapter: [
        {
          id: 211,
          title: "",
          subChapterContent: (
            <div>
              The matrix of a linear transformation is a matrix representation
              of a linear transformation that describes how this transformation
              acts on the vectors of a vector space.
            </div>
          ),

          // To Do Bouhamza Visualisation
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={AppLinear}
              title={"Matrix of a linear mapping"}
              description={""}
            />
          ),
        },
        {
          title: "Consequences And Definitions.",
          subChapterContent: (
            <div>
              1- If one (or both) bases change, the matrix changes.
              <br />
              2- The number of columns = dim the departure space.
              <br />
              3- The number of rows = dim the arrival space.
              <br />
              4- The columns of(1,2)M(B1​,B2​) form a generator of Imf.
              <br />
              5-We call the rank of M and denote it rank(M)rank(M).
              <br />
              <strong>rank(M) = Rang(f) = dim Imf</strong>
              <br />
            </div>
          ),
        },
        {
          title: "The Matrix Representation of a Linear Transformation.",
          subChapterContent: (
            <div>
              The matrix representation of a linear transformation is a matrix
              form that describes how this application acts on the vectors of a
              vector space. This matrix representation facilitates the analysis
              and manipulation of linear transformations using algebraic tools
              and matrix operations.
            </div>
          ),
        },
      ],
    },
    {
      chapterId: 3,
      title: "Reduction of Endomorphisms",
      chapterDescription: <p></p>,
      subChapter: [
        {
          title: "COOMING SOON....",
        },
      ],
    },
  ],

  path: "/courses/algebra/learn",
  quiz: "/courses/algebra/quiz", // quiz route will redirect to the next page if finished (congrats on every finish)
  next: "/courses/bdd/learn",
};
