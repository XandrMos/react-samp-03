import ShowItemList from "../ShowItemList";

const App = function(){
    return(
        <section>
            <h1>Group list</h1>
            <hr/>
            <ul>
                <ShowItemList name = "Oleh"
                              group = "26"
                              mark = "90"/>
                <ShowItemList name = "Nina"
                              group = "25"
                              mark = "95"/>
            </ul>
        </section>    
    )
}

export default App;