import React, { Component } from 'react';
import './ListItems.css';

class ListItems extends Component {

    render(){
        const {list} = this.props;
        const undone = list.filter(x => !x.isDone);
        const done = list.filter(x => x.isDone);
        return(
            <div>
                <h5 className="title">Upcoming</h5>
                <ul className="listItems">
                    { 
                        undone.map(x => <li className="item undone" 
                                            key = {x.id} 
                                            onClick={this.props.finishTask(x)}>
                                            {x.id}. {x.content}
                                        </li>) 
                    }
                </ul>

                <h5 className="title">Finished</h5>
                <ul className="listItems">
                    { done.map(x => <li className="item" key={x.id}>{x.id}. {x.content}</li>) }
                </ul>
            </div>
        );
    };
}

export default ListItems