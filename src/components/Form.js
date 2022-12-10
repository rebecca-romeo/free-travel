

const Form = (props) => {
  return (
    <form 
    onSubmit={props.handleSubmit}
    className="wrapper">
      <label htmlFor="userLocationChoice">Enter a country or city to begin</label>
      <input 
      onChange={props.userChoice} 
      type="text" 
      id="userLocationChoice" 
      value={props.input} />

      <button type="submit">Let's Explore!</button>

    </form>
  )

} 

export default Form; 