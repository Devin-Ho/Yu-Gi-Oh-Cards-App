const activity = document.querySelector('#Cards')
const activityBTN = document.querySelector('#activity')

document.addEventListener('DOMContentLoaded', () => {
  //activityBTN.addEventListener('click', getActivity)
  getActivity();
})

function getActivity() {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php`)
      .then(res => res.json())
      .then((activityData) => {
        activity.innerHTML += `<li>${activityData.data[1000].name}</li>`
        console.log(activityData)

      })
  }

// function displayInfo(act) {
//   let info = document.createElement('div')
//   info.className = 'card'
//   activity.append(info)
//   info.innerHTML = `
//   <h2>${act.data[1].name}</h2>
//   <button class="like-btn" id="${act.id}">Like ❤️</button>
// `
// }
/* <p>Type of Activity: ${act.type}</p>
  <p>Number of  Participants: ${act.name}</p> */
  
  
  
  //activityData.forEach(act => displayInfo(act)
        //activity.innerHTML = activityData.activity
        //activityData.forEach(act => displayInfo(act)))

        // console.log(activityData)
        // return (displayInfo(activityData))

        // Object.keys([activityData]).forEach(card => {
        //   console.log(activityData)
        //   console.log(activityData[card.data])