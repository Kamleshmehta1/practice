// a higher order component is a component do spcific changes to it and returns the modified component to us.


function HOC(props) {
    return (
        <div style={{ color: "purple",fontSize:"3rem" }}>
            <props.component />
        </div>
    )
}

export default HOC