function Container(props){
  return (
    <div
      style={{
        width: "1200px",
        margin: "0 auto",
        textAlign: "center"
      }}
    >
      {props.children}
    </div>
  );
}
  
export default Container;