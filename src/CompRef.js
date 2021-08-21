
import React, { Component } from 'react';
import {ProgressCircle} from '@adobe/react-spectrum'


class CompRef extends Component {
 
  componentDidMount(){
      this.getData();
      setInterval(this.getData,30000)
  }
 

getData=()=>{

}
render(){
    return(
        <div>
           <ProgressCircle aria-label="Loading…" value={25} />

        </div>
    )
}
}

export default CompRef