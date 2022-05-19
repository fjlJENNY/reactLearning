import React, {Component} from 'react';

class BoilingVerdict extends Component {
    render() {
        // celsius 摄氏度
        if(this.props.celsius >= 100){
            return (
                <p>
                    开了
                </p>
            );
        }else{
            return (
                <p>
                  没开
                </p>
            )
        }
    }
}

export default BoilingVerdict;