 const ShowItemList = function(props){
   if (props.mark > 90) {
      return (<li>
         Name: {props.name}, 
         Group: {props.group}, 
         Mark: {props.mark}
      </li>)
   }   
 }

 export default ShowItemList;