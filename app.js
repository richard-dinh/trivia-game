src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous"



$.get('https://opentdb.com/api_category.php')
.then((data) => {
    $('#catOptions').textContent = 
  console.log(data)
  console.log(data.trivia_categories)
  console.log(data.trivia_categories[0].name)

  for(i=0;i>length.trivia_categories;i++)
  let trivia_categories = [i;]
})


    
.catch(e=> console.error(e))