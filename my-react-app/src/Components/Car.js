function Car(props)
{
    const { info } = props
    // const { carBrand , color } = props
    // const {brand , color } = info ;
    const text = ` This is a ${info.brand} Car , and color is ${info.color}!` ;
    return(
    <div>
      This is Car Component
      <p>{text}</p>
    </div>
  );
}

export default Car;