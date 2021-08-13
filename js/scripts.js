//business logic
// function getLanguage () {
//   let count = 0;

// }

//ui logic
$(document).ready(function () {
  $('#form1').submit(function (e) {
    //a: python, b: js, c: C#
    e.preventDefault();
    const experience = $("input:radio[name=experience]:checked").val();
    const goal = $("input:radio[name=goal]:checked").val();
    const strictness = $("input:radio[name=strictness]:checked").val();
    const car = $("input:radio[name=car]:checked").val();
    const society = $("input:radio[name=society]:checked").val();
    const semicolons = $("input:radio[name=semicolons]:checked").val();
    const answers = [experience, goal, strictness, car, society, semicolons];
    console.log(answers);

    // const language = getLanguage();

    $('#language-result').text('JavaScript');
    $('#result').show();
  })

})