// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value/>


// propTypes = a mechanism that ensures that the passed value is of the correct datatype.
//             age: PropTypes.number

// defaultProps = default value for props in case they are not passed from the parent component.
//                 name: "guest"

import Student from './Student.jsx'

function App() {
  return (
    <>
      <Student name='Camille' age={25} isStudent={false}></Student>
      <Student name='Joshua' age={26} isStudent={false}></Student>
      <Student name='Crystal' age={14} isStudent={true}></Student>
      <Student name='Yoru' age={4} isStudent={false}></Student>
      <Student></Student>
      <Student></Student>
      <Student></Student>
    </>
  )
}

export default App
