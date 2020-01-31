const renderCategories = function (){
$.get('https://opentdb.com/api_category.php')
.then((data) => {
    // console.log(data)
//   console.log(data.trivia_categories)
//   console.log(data.trivia_categories[0].name)

  let categoriesList = data.trivia_categories
//   console.log(categoriesList)
  let selector =$('#catOptions')
  for(let i=0;i<categoriesList.length;i++){
    //   console.log(`When i =${i} then the id is ${categoriesList[i].id}`)
    //   console.log(`When i =${i} then ${categoriesList[i].name}`)

     let newCat= $("<p>") //<p></p>
     newCat.attr('class','dropdown-item') //<p class = dropdown-item></p>
     newCat.attr('id', categoriesList[i].id) //<p class = drop id = whatever index i id is></p>
     newCat.text(categoriesList[i].name) //<p class id > text </p>

     selector.append(newCat)
     
  }
//  
 })
    

.catch(e=> console.error(e))
}
const getQuestions = id =>{
    $.get(`https://opentdb.com/api.php?amount=10&category=${id}&type=multiple`)
    .then(data =>{
        console.log(data)
        let questionList = data.results
        for(let i = 0; i<questionList.length; i++){
            console.log(questionList[i].question)
            console.log(questionList[i].correct_answer)
            console.log(questionList[i].incorrect_answers)
        }

    })
    .catch(e => console.error(e))
}

renderCategories()
let userSelection
$(document).click(event =>{
    let target = $(event.target)
    if(target.hasClass('dropdown-item')){
        userSelection = target.attr('id')
        getQuestions(userSelection)
    }
})


//bruh delte after html grabbed
//catergoiesList[0] = 1