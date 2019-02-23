
let a = $('input.gomb').on('click', (event) => {
  event.preventDefault();

  let post = $('input[type="text"]').val();
  $('div.posztok').append(`<p>${post}</p>`);
  let posting = $('textarea').val();
  $('div.posztok').append(`<p>${posting}<p/>`);
  let dataToSave = { post: post, posting: posting };
  console.log("hello")
  database.ref("brightyblog").push(dataToSave);
})
