
function Button(){
 // let count = 0;

 // const handleClick = () => {
 //  if(count<3){
 //   count++;
 //   console.log(`you clicked ${count} times`)
 //  }else{
 //   console.log('thats enough clicking please')
 //  }
 // }

 const handleClick = (e) => {
   const button = e.target;
   const rect = button.getBoundingClientRect();
   const windowWidth = window.innerWidth;
   const windowHeight = window.innerHeight;
   const randomX = Math.random() * (windowWidth - rect.width);
   const randomY = Math.random() * (windowHeight - rect.height);

   e.target.style.position = 'absolute';

   button.style.top = randomY + 'px';
   button.style.left = randomX + 'px';
 }
return(
 <>
 <button className="button"onClick={handleClick}>click me if you can! 😁</button>
 </>
)
}
export default Button