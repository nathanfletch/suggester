// business logic
function pyCount(answerArray) {
  return answerArray.filter((answer) => answer === "a").length;
}
function jsCount(answerArray) {
  return answerArray.filter((answer) => answer === "b").length;
}
function csCount(answerArray) {
  return answerArray.filter((answer) => answer === "c").length;
}

//ui logic
$(document).ready(function () {
  $("#question1").on("input", function () {
    $("#question2").slideDown("slow", function () {
      $("html, body").animate(
        {
          scrollTop: $("html, body").get(0).scrollHeight,
        },
        1000
      );
    });
  });

  $("#question2").on("input", function () {
    $("#question3").slideDown("slow", function () {
      $("html, body").animate(
        {
          scrollTop: $("html, body").get(0).scrollHeight,
        },
        1000
      );
    });
  });

  $("#question3").on("input", function () {
    $("#question4").slideDown("slow", function () {
      $("html, body").animate(
        {
          scrollTop: $("html, body").get(0).scrollHeight,
        },
        1000
      );
    });
  });

  $("#question4").on("input", function () {
    $("#question5").slideDown("slow", function () {
      $("html, body").animate(
        {
          scrollTop: $("html, body").get(0).scrollHeight,
        },
        1000
      );
    });
  });

  $("#question5").on("input", function () {
    $("#question6").slideDown("slow", function () {
      $("html, body").animate(
        {
          scrollTop: $("html, body").get(0).scrollHeight,
        },
        1000
      );
    });
  });

  $("#question6").on("input", function () {
    $("#submit-button").slideDown("slow", function () {
      $("html, body").animate(
        {
          scrollTop: $("html, body").get(0).scrollHeight,
        },
        1000
      );
    });
  });

  $("#form1").submit(function (e) {
    e.preventDefault();

    const experience = $("input:radio[name=experience]:checked").val(),
      goal = $("input:radio[name=goal]:checked").val(),
      strictness = $("input:radio[name=strictness]:checked").val(),
      car = $("input:radio[name=car]:checked").val(),
      society = $("input:radio[name=society]:checked").val(),
      semicolons = $("input:radio[name=semicolons]:checked").val(),
      answers = [experience, goal, strictness, car, society, semicolons];

    const py = pyCount(answers),
      js = jsCount(answers),
      cs = csCount(answers);

    if (py > js && py > cs) {
      $("#language-result").text("Python");
    } else if (js > py && js > cs) {
      $("#language-result").text("JavaScript");
    } else if (cs > py && cs > js) {
      $("#language-result").text("C#");
    } else if (py === js && py === cs) {
      $("#language-result").text("Python, JavaScript, or C#");
    } else if (py === js) {
      $("#language-result").text("Python or JavaScript");
    } else if (py === cs) {
      $("#language-result").text("Python or C#");
    } else {
      $("#language-result").text("Javascript or C#");
    }
console.log(py, js, cs)
    $("#result").slideDown("slow", function () {
      console.log("hi")
      $("html, body").animate(
        {
          scrollTop: $("html, body").get(0).scrollHeight,
        },
        1000
      );
    });;
  });
});
