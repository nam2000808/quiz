// src/components/Quiz.js
import React, { useEffect, useState } from "react";
import quiz1 from "../Data/quiz1";
import quiz2 from "../Data/quiz2";
import quiz3 from "../Data/quiz3";
import quiz4 from "../Data/quiz4";
import quiz5 from "../Data/quiz5";
import $ from "jquery";
import "../styles/quiz.css";

function Quiz() {
  const [quizStarted] = useState(false);
  const quiz = quiz1.concat(quiz2, quiz3, quiz4, quiz5);
  useEffect(() => {
    var quiztitle = "Quiz Title";
    var currentquestion = 0,
      score = 0,
      submt = true,
      picked;

    // Ẩn các phần bài kiểm tra khi trang web tải lên, chỉ hiển thị nút "Start"
    $("#startButton").on("click", function () {
      $("#startFrame").hide(); // Ẩn khung "Start"
      $("#quizFrame").show(); // Hiển thị khung câu hỏi
    });

    var quizTime;
    var startTime;
    var endTime;
    var timerInterval;
    var currentQuestion = 0;
    var quizStarted = false; // Biến để kiểm tra xem quiz đã bắt đầu chưa

    // Xử lý sự kiện khi nút "Start" được nhấn
    $("#startButton").on("click", function () {
      $(this).hide(); // Ẩn nút "Start"
      startQuiz(); // Bắt đầu bài kiểm tra
    });

    function startQuiz() {
      if (!quizStarted) {
        // Chỉ bắt đầu quiz nếu chưa bắt đầu
        quizStarted = true;
        // Bắt đầu tính thời gian
        quizTime = 60 * 60 * 1000; // 60 phút trong đơn vị milliseconds
        startTime = new Date().getTime();
        endTime = startTime + quizTime;
        timerInterval = setInterval(updateTimer, 1000);

        // Hiển thị câu hỏi đầu tiên
        showQuestion(currentQuestion);
      }
    }

    function showQuestion(questionIndex) {
      // Hiển thị các phần liên quan đến câu hỏi
      $("#question, #choice-block, #explanation, #submitbutton, #pager").show();
      $("#question-image").hide();

      // Hiển thị thông tin của câu hỏi
      $("#question").text(quiz[questionIndex]["question"]);

      // Hiển thị hình ảnh của câu hỏi nếu có
      if (
        quiz[questionIndex].hasOwnProperty("image") &&
        quiz[questionIndex]["image"] !== ""
      ) {
        $("#question-image").attr("src", quiz[questionIndex]["image"]).show();
      }

      // Thiết lập các nút và sự kiện liên quan
      setupButtons();
    }
    // Các phần mã khác ...

    // Hàm cập nhật thời gian
    function updateTimer() {
      var now = new Date().getTime();
      var timeLeft = endTime - now;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endQuiz();
      } else {
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        $("#timer").text("Time left: " + minutes + "m " + seconds + "s");
      }
    }
    function htmlEncode(value) {
      return $(document.createElement("div")).text(value).html();
      // Các phần mã khác ...
    }

    // Shuffle the quiz array
    shuffleArray(quiz);
    /**
     * This will add the individual choices for each question to the ul#choice-block
     *
     * @param {choices} array The choices from each question
     */
    function addChoices(choices) {
      if (typeof choices !== "undefined" && $.type(choices) === "array") {
        $("#choice-block").empty();
        for (var i = 0; i < choices.length; i++) {
          $(document.createElement("li"))
            .addClass("choice choice-box")
            .attr("data-index", i)
            .text(choices[i])
            .appendTo("#choice-block");
        }
      }
    }

    /**
     * Resets all of the fields to prepare for next question
     */
    function nextQuestion() {
      submt = true;
      $("#explanation").empty();
      $("#question").text(quiz[currentquestion]["question"]);
      $("#pager").text("Question " + Number(currentquestion + 1) + " of " + 60);
      if (
        quiz[currentquestion].hasOwnProperty("image") &&
        quiz[currentquestion]["image"] !== ""
      ) {
        if ($("#question-image").length === 0) {
          $(document.createElement("img"))
            .addClass("question-image")
            .attr("id", "question-image")
            .attr("src", quiz[currentquestion]["image"])
            .attr("alt", htmlEncode(quiz[currentquestion]["question"]))
            .insertAfter("#question");
        } else {
          $("#question-image")
            .attr("src", quiz[currentquestion]["image"])
            .attr("alt", htmlEncode(quiz[currentquestion]["question"]));
        }
      } else {
        $("#question-image").remove();
      }
      addChoices(quiz[currentquestion]["choices"]);
      setupButtons();
    }

    /**
     * After a selection is submitted, checks if its the right answer
     *
     * @param {choice} number The li zero-based index of the choice picked
     */
    function processQuestion(choice) {
      if (
        quiz[currentquestion]["choices"][choice] ===
        quiz[currentquestion]["correct"]
      ) {
        $(".choice").eq(choice).css({ "background-color": "#50D943" });
        $("#explanation").html(
          "<strong>Correct!</strong> " +
            htmlEncode(quiz[currentquestion]["explanation"])
        );
        score++;
      } else {
        $(".choice").eq(choice).css({ "background-color": "#D92623" });
        $("#explanation").html(
          "<strong>Incorrect.</strong> Đáp án là: " +
            quiz[currentquestion]["correct"] +
            "<br>" +
            htmlEncode(quiz[currentquestion]["explanation"])
        );
      }
      currentquestion++;
      $("#submitbutton")
        .html("NEXT QUESTION &raquo;")
        .on("click", function () {
          if (currentquestion === 60) {
            endQuiz();
          } else {
            $(this).text("Check Answer").css({ color: "#222" }).off("click");
            nextQuestion();
          }
        });
    }

    /**
     * Sets up the event listeners for each button.
     */
    function setupButtons() {
      $(".choice").on("mouseover", function () {
        $(this).css({ "background-color": "#e1e1e1" });
      });
      $(".choice").on("mouseout", function () {
        $(this).css({ "background-color": "#fff" });
      });
      $(".choice").on("click", function () {
        picked = $(this).attr("data-index");
        $(".choice").removeAttr("style").off("mouseout mouseover");
        $(this).css({
          "border-color": "#222",
          "font-weight": 700,
          "background-color": "#c1c1c1",
        });
        if (submt) {
          submt = false;
          $("#submitbutton")
            .css({ color: "#000" })
            .on("click", function () {
              $(".choice").off("click");
              $(this).off("click");
              processQuestion(picked);
            });
        }
      });
    }

    /**
     * Quiz ends, display a message.
     */
    function endQuiz() {
      clearInterval(timerInterval);

      $("#explanation").empty();
      $("#question").empty();
      $("#choice-block").empty();
      $("#submitbutton").remove();
      $("#question").text("You got " + score + " out of " + 60 + " correct.");
      $(document.createElement("h2"))
        .css({ "text-align": "center", "font-size": "4em" })
        .text(Math.round((score / 60) * 100) + "%")
        .insertAfter("#question");
    }
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    /**
     * Runs the first time and creates all of the elements for the quiz
     */
    function init() {
      //add title
      if (typeof quiztitle !== "undefined" && $.type(quiztitle) === "string") {
        $(document.createElement("h1")).text(quiztitle).appendTo("#frame");
      } else {
        $(document.createElement("h1")).text("Quiz").appendTo("#frame");
      }

      //add pager and questions
      if (typeof quiz !== "undefined" && $.type(quiz) === "array") {
        //add pager
        $(document.createElement("p"))
          .addClass("pager")
          .attr("id", "pager")
          .text("Question 1 of " + 60)
          .appendTo("#frame");
        //add first question
        const selectedQuestions = quiz.slice(0, 60);
        $(document.createElement("h2"))
          .addClass("question")
          .attr("id", "question")
          .text(selectedQuestions[0]["question"])
          .appendTo("#frame");
        //add image if present
        if (quiz[0].hasOwnProperty("image") && quiz[0]["image"] !== "") {
          $(document.createElement("img"))
            .addClass("question-image")
            .attr("id", "question-image")
            .attr("src", quiz[0]["image"])
            .attr("alt", htmlEncode(quiz[0]["question"]))
            .appendTo("#frame");
        }
        $(document.createElement("p"))
          .addClass("explanation")
          .attr("id", "explanation")
          .html("&nbsp;")
          .appendTo("#frame");

        //questions holder
        $(document.createElement("ul"))
          .attr("id", "choice-block")
          .appendTo("#frame");

        //add choices
        addChoices(quiz[0]["choices"]);

        //add submit button
        $(document.createElement("div"))
          .addClass("choice-box")
          .attr("id", "submitbutton")
          .text("Check Answer")
          .css({ "font-weight": 700, color: "#222", padding: "30px 0" })
          .appendTo("#frame");

        setupButtons();
      }
      timerInterval = setInterval(updateTimer, 1000);
    }

    init();
  }, []);

  return (
    <div>
      {!quizStarted ? (
        <div id="quizFrame" className="quizFrame">
          <div id="timer" className="timer"></div>
          <div id="frame" role="content"></div>
        </div>
      ) : (
        <div id="startFrame" className="startFrame">
          <h1>CHÀO MỪNG BÒ HÂM LÀM BÀI</h1>
          <p>cố gắng lên nha</p>
          <button id="startButton" className="startButton">
            Start Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
