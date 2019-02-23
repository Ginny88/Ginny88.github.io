
let a = $('input.gomb').on('click', (event) => {
  event.preventDefault();

  let post = $('input[type="text"]').val();
  $('div.posztok').append(`<p>${post}</p>`);
  let posting = $('textarea').val();
  $('div.posztok').append(`<p>${posting}<p/>`);
  let dataToSave = { post: post, posting: posting };
  database.ref("brightyblog").push(dataToSave);
})

database.ref("brightyblog").once('value').then(data => {
  data.forEach(element => {
    console.log(element.child("post").val())
    $('div.posztok').append(`<h1>${element.child("post").val()}</h1>`);
    $('div.posztok').append(`<p>${element.child("posting").val()}</p>`);
  })
});
