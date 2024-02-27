 const ShowItemList = function(props){
      return (<li>
         Name: {props.name}, 
         Group: {props.group}, 
         {Number(props.mark) < 90 ? 
                 " Estimation less 90" : 
                 " Estimation: " + props.mark}
      </li>)  
 }

 export default ShowItemList;