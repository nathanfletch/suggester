

$(document).ready(function () {
  $('#form1').submit(function (e) {
    e.preventDefault();
    const experience = $("input:radio[name=experience]:checked").val();
    const goal = $("input:radio[name=goal]:checked").val();
    console.log(experience, goal);
  })

})