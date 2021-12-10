$(`form`).on(`submit`, (e) => {
  e.preventDefault();

  $(`.op`).fadeOut();

  $(`#nomInfo`).text(`${$("input:eq(1)").val()} ${$("input:eq(2)").val()}`);
  $(`#mailInfo`).text(`${$("input:eq(3)").val()}`);
  $(`#ageInfo`).text(`${$("input:eq(5)").val()}`);
  $(`#avatar`).attr("src", $(`input:eq(4)`).val());

  $(`.info`).fadeIn();
});

$("#succes").on(`click`, () => {
  $(`.afterForm`).html(`<div class="alert alert-success" role="alert">
  Votre inscription a bien été enregistrée
</div>`);
});

$("#danger").on(`click`, () => {
  $(`.info`).fadeOut();
  $(`form`).find("input").val("");
});
