// Inline style:
// - Convenient and easy to understand
// - Prevents global style conflicts because we are not using class names
// - Great for isolated components with minimal styling
// - Less maintenable 
// - Not great for complex styling

function Button() {

 const styles = {
  backgroundColor: "rgb(255, 0, 0)",
  color: "white",
  padding: "10px 20px",
  margin: "20px",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
 }
  return <button style={styles}>Inline Style</button>
}
export default Button