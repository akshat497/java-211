export function Header(){

    function sayhello(){
        console.log("hello")
    }

    return(
        <div onClick={sayhello}>i am a header component</div>
    )
}