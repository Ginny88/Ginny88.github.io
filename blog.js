console.log("no");
let a = $('input.gomb').on('click', (event) => {
  event.preventDefault();
  console.log("asdasd");
  let post = $('input[type="text"]').val();
  $('div.posztok').append(`<p>${post}</p>`);
  let posting = $('textarea').val();
  $('div.posztok').append(`<p>${posting}<p/>`);
  
})