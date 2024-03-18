import profilePic from './assets/penguin.png'

function Card(){
 return(
 <div className="card">
  <img className='cardImg' src={profilePic} alt="profile picture" />
  <h2 className='cardTitle'>Joshua Salcedo</h2>
  <p className='cardText'>An awesome person who loves making web designs</p>
</div>
 );
}

export default Card