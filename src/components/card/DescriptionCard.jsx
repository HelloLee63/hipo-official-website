
const DescriptionCard = props => {

  const {title, text} = props

  return (
    <div className='card card-description'>
      {/* <div className='card-body'> */}
        <div className='card-title text-center'>
          {title}
        </div>
        <div className='card-text text-center pt-3'>
          {text}
        </div>
      {/* </div> */}
    </div>
  )
}

export default DescriptionCard