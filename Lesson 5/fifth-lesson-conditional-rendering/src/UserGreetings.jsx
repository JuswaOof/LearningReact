import PropTypes from 'prop-types'

function UserGreetings(props){

const welcomeMessage = <h2 className='welcomeMessage'>Welcome {props.name}</h2>;

const loginPrompt = <h2 className='loginPrompt'>Please Login to continue...</h2>;

 return(props.isLoggedin ? welcomeMessage : loginPrompt);

}
UserGreetings.proptypes = {
 isLoggedin: PropTypes.bool,
 name: PropTypes.string,
}
UserGreetings.defaultProps = {
 isLoggedin: false,
 name: 'Guest',
}
export default UserGreetings