import React from "react";
import './SortingVisualizer.css';

//add colour pallette
//add animation speed

export default class SortingVisualizer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            array : []
        };
    }


    componentDidMount() {
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for (let i=0; i<150; i++){
            array.push( Math.floor(Math.random() * 990) + 10 ); //100 bars between 10 and 1000 length
        }
        this.setState({array});
    }

    //mergesort

    //quicksort

    //bubblesort

    //heapsort


    render(){
        const {array} = this.state;

        return (
            <div className="array container">
                {array.map((value, index) => (
                    <div className="array-bar" 
                        key={index}
                        style = {{
                            height: `${value}px` 
                        }}>
                    </div>
                ))} 
                {/* add buttons here  */}
            </div>
        );
    }
}

//check if arrays are equal