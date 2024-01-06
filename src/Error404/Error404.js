function Error404() {
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        paddingTop:"10%"
    }}>
        <img src="./imgs/error-404.png" style={{width:"30%"}}/>
        <h1 style={{fontFamily:"sans-serif"}}>
            No houses here, bucko.
        </h1>
    </div>
  );
}

export default Error404;
