import React, {Component} from 'react';
import './App.css';
import TodoList from './TodoList.js';
import TodoItems from './TodoItems.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            currentItem: {text: '', key: ''},
        }
    }

    handleInput = (e) => {
        let itemText = e.target.value;
        let currentItem = {text: itemText, key: Date.now()};
        this.setState({
            currentItem,
        })
    };

    addItem = (e) => {
        e.preventDefault();
        let newItem = this.state.currentItem;

        if (newItem.text !== '') {
            console.log(newItem);
            let items = [...this.state.items, newItem];
            this.setState({
                items: items,
                currentItem: {text: '', key: ''},
            })
        }
    };

    deleteItem = (key) => {
        let filteredItems = this.state.items.filter(item => {
            return item.key !== key;
        });

        this.setState({
            items: filteredItems,
        })

    };

    inputElement = React.createRef();

    render() {
        return (
            <div className="App">
                <TodoList
                    inputElement={this.inputElement} //refers to the element
                    addItem={this.addItem} // handles the click on add
                    handleInput={this.handleInput}  //handles data on input filed on change
                    currentItem={this.state.currentItem} // display the value of the state set
                />

                <TodoItems
                    entries={this.state.items}
                    deleteItem={this.deleteItem}
                />
            </div>
        );
    }
}

export default App;
