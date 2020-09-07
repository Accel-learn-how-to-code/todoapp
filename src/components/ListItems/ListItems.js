import React, { Component } from 'react';
import logo from '../../img/undraw_add_document_0hek.svg'
import './ListItems.css';

class ListItems extends Component {

    render(){
        const {list} = this.props;
        const undone = list.filter(x => !x.isDone);
        const done = list.filter(x => x.isDone);
        if(list.length > 0){            
            return(
                    <div>
                        <h5 className="title">Upcoming</h5>
                        <ul className="listItems">
                            { 
                                undone.map(x => <li className="item undone" 
                                                    key = {x.id} 
                                                    onClick={() => this.props.finishTask(x)}>
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
        }else{
        //list doesnt exist
            return(
                <div>
                    <img className="logo" src={logo} alt="Lego"/>
                    <h5 className="title">Hãy thêm một task nào.</h5>
                </div>
            );
        }
    };
}

export default ListItems