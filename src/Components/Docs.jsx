import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

function Docs(props) {
    if (!props.auth.isAuth){
        return <Redirect to="/slug2/login"/>
    }
    return (
        <div>
            
        </div>
    );
}

let mapStateToProps = (state)=>{
    return {
        auth: state.auth
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        
    }
}
const DocsContainer = connect(mapStateToProps, mapDispatchToProps)(Docs);
export default DocsContainer;