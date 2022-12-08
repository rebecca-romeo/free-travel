

const Form = (props) => {
  return (
    <form 
    onSubmit={props.handleSubmit}
    className="wrapper">
      <label htmlFor="userLocationChoice">Enter a country to begin</label>
      <input 
      onChange={props.userChoice} 
      type="text" 
      id="userLocationChoice" 
      value={props.input} />

    </form>
  )

} 

export default Form; 