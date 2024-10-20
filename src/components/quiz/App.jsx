import { useEffect, useReducer, useState } from "react";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import { Card, CardContent } from "../ui/card";
import { quizzes } from "../../data/quiz/quizzes";
import { Info } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctAnswer
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("unhandled action type: ");
  }
}

export default function App({ name }) {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    function fetchQuestions() {
      const courseQuizzes = quizzes.find((quiz) => quiz.name === name);
      if (courseQuizzes) {
        const allQuestions = courseQuizzes.quizzes.flat(); // Flatten the array of quizzes
        dispatch({ type: "dataReceived", payload: allQuestions });
      } else {
        dispatch({ type: "dataFailed" });
      }
    }

    fetchQuestions();
  }, [name]);

  return (
    <Card className="self-center flex flex-col items-center justify-center w-fit mx-[10%] my-4 p-5">
      {status === "loading" && "Loading"}
      {status === "error" && "No quizzes found for this course."}
      {status === "ready" && (
        <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
      )}
      <CardContent>
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]} // Pass the current question correctly
              dispatch={dispatch}
              answer={answer}
            />
            <footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuestions={numQuestions}
                index={index}
                status={status}
              />
            </footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </CardContent>
      <Popover className="relative z-1000 ">
        <PopoverTrigger
          className={"relative !ml-[90%] !mr-4 sm:!mr-0 float-right sm:hidden "}
          onClick={() => setShowCard((prev) => !prev)}
        >
          <Info color="#ffbd03" />
        </PopoverTrigger>
        {showCard && (
          <PopoverContent
            className={`transition-opacity duration-500 rounded-lg pt-5 pb-3 pl-5 bg-muted/100 ${
              showCard ? "opacity-100" : "opacity-0"
            }`}
          >
            <b>Double click on options to validate.</b>
          </PopoverContent>
        )}
      </Popover>
    </Card>
  );
}
