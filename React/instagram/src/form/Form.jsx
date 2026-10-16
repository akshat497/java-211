import './Form.css'

export default function Form() {
    function validation(){
        alert("hello")
    }

  return (
    <>
        <div className='form'>
        Name:-<input type="text" placeholder="enter a name" id="name" onClick={validation}/> Email:-
        <input type="text" placeholder="enter a email" id="email" /> Phone:-
        <input type="text" placeholder="enter a phone number" id="phone" />
        Age:-<input type="number" placeholder="enter age" id="age" />
        <button onclick="addData()">Submit</button>
      </div>
    </>
  )
}
