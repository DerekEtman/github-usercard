/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



axios.get('https://api.github.com/users/dereketman')
.then((response) => {
  // console.log(response.data);

  let newCard = cardBuilder(response.data);
  let test = document.querySelector('.cards');
  test.appendChild(newCard);

  })
  .catch((error) => {
    console.log("Error: ", error);
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardBuilder(ele){
  // create the elements that want
  let card = document.createElement('div');
  let userImg = document.createElement('img');
  let cardInfo = document.createElement('div');
  let cardName = document.createElement('h3');
  let cardUserName = document.createElement('p');
  let cardLocation = document.createElement('p');
  let cardProfile = document.createElement('p');
  let cardProfLink = document.createElement('a');
  let cardFollowers = document.createElement('p');
  let cardFollowing = document.createElement('p');
  

  // creating the structure of the card using .append child

  card.appendChild(userImg);
  card.appendChild(cardInfo);

    cardInfo.appendChild(cardName);
    cardInfo.appendChild(cardUserName);
    cardInfo.appendChild(cardLocation);

    cardInfo.appendChild(cardProfile);
     cardProfile.appendChild(cardProfLink);

    cardInfo.appendChild(cardFollowers);
    cardInfo.appendChild(cardFollowing);

  // create class lists

  card.classList.add('cards', 'card');
  userImg.classList.add('img');
  cardName.classList.add('name');
  cardUserName.classList.add('username');

  //setting content on page
  userImg.src = ele.avatar_url;
  cardName.textContent = ele.name;
  cardUserName.textContent = ele.login;
  cardLocation.textContent = ele.location;
  cardProfLink.textContent = ele.html_url;
  cardFollowers.textContent = ele.followers;
  cardFollowing.textContent = ele.following;

  // returning the new card
  return card
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
