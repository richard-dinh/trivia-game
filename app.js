$.get('https://opentdb.com/api_category.php')
.then((data) => {
    $('#catOptions').textContent = 
  console.log(data)
  console.log(data.trivia_categories)
  console.log(data.trivia_categories[0].name)

//   let categoriesList = data.tr
//   for(i=0;i>length.trivia_categories;i++)
//   let trivia_categories = [i;]
 })
    
.catch(e=> console.error(e))

//bruh delte after html grabbed