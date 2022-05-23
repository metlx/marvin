document.querySelector('button').addEventListener('click', async function(){
  try{
    let rover = document.getElementById('rover').value.toLowerCase()
    let key = 'ZSGy6GOpsivN5JgHCefi0TFbp61x18bjpR0hkTHU'
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${key}`
    let res = await fetch(url)
    let data = await res.json()
    for (let i = 0; i < data.rovers.length; i++){
      if(data.rovers[i].name == rover[0].toUpperCase() + rover.slice(1)){
	let camara = document.getElementById('camara').value
	let sol = document.getElementById('sol').value
	let page = document.getElementById('page').value
	let urll = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?camera=${camara}&sol=${sol}&page=${page}&api_key=${key}`
	let ress = await fetch(urll)
	let dataa = await ress.json()
	document.body.background = dataa.photos[Math.floor(Math.random() * dataa.photos.length)].img_src
      }
    }
  } catch(err){
    console.log(err)
  }
})
