import "./button.css"


function Button({text, backColor, bradius}){

  return (
    <button className="Button-custom">
      {text}
    </button>
  )
}

export default Button