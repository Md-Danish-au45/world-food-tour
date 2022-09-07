

const image=document.getElementById('image_url')
window.addEventListener('load', async (event) => {


  try {
    const response = await fetch('/signup') 
    result = await response.json()

    console.log(result);
       image.src =result.image_url
  } catch (err) { //hanlde errors
    console.log(err)
    jokeDisplayEle.innerText = 'Error Occured'
  }
})