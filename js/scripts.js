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
      importance = parseInt($("#slider").val()),
      strictness = $("input:radio[name=strictness]:checked").val(),
      car = $("input:radio[name=car]:checked").val(),
      society = $("input:radio[name=society]:checked").val(),
      semicolons = $("input:radio[name=semicolons]:checked").val(),
      answers = [experience, goal, strictness, car, society, semicolons];

      //this gives double weight to the goal response if importance is 50 or higher:
      if (importance >= 50) {
        answers.push(goal);
      }
      console.log(answers)
      
      const py = pyCount(answers),
      js = jsCount(answers),
      cs = csCount(answers);
      console.log(py, js, cs)

    if (py > js && py > cs) {
      $("#py1").show();
    } else if (js > py && js > cs) {
      $("#js1").show();
    } else if (cs > py && cs > js) {
      $("#cs1").show();
    } else if (py === js && py === cs) {
      $("#py1").show();
      $(".or1").show();
      $("#js2").show();
      $("#or2").show();
      $("#cs3").show();
    } else if (py === js) {
      $("#py1").show();
      $("#or1").show();
      $("#js2").show();
    } else if (py === cs) {
      $("#py1").show();
      $("#or1").show();
      $("#cs2").show();
    } else {
      $("#js1").show();
      $("#or1").show();
      $("#cs2").show();
    }

    $("#result").slideDown("slow", function () {
      $("html, body").animate(
        {
          scrollTop: $("html, body").get(0).scrollHeight,
        },
        1000
      );
    });
  });
});
