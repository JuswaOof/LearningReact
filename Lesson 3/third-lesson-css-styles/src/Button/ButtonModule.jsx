// module styling 
 // - avoid naming conflicts because class name is generated via hashing algo
 // - required additional setup, Global styles are not applied easily, need to import from elsewhere

import styles from './Button.module.css'

function Button() {
  return <button className={styles.buttonModule}>Module Style</button>
}
export default Button
