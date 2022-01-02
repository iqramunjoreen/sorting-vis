import React from "react";
import './SortingVisualizer.css';
import {getMergeSortAnimations} from "../SortingAlgorithms/sortingAlgorithms.js";

//add colour pallette
const PRIMARY_COLOUR = '#84a8a8';
const SECONDARY_COLOUR = 'rgb(97, 32, 32)';
//add animation speed
const ANIMATION_SPEED_MS = 4;

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
        for (let i=0; i<400; i++){
            array.push( Math.floor(Math.random() * 990) + 10 ); //100 bars between 10 and 1000 length
        }
        this.setState({array});
    }

    //mergesort
    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        for (let i=0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;
            if (isColorChange){
                const [bar1Index, bar2Index] = animations[i];
                const bar1Style = arrayBars[bar1Index].style;
                const bar2Style = arrayBars[bar2Index].style;
                const colour = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;
                setTimeout(() => {
                    bar1Style.backgroundColor = colour;
                    bar2Style.backgroundColor = colour;
                }, i * ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(() => {
                    const [bar1Index, newHeight] = animations[i];
                    const bar1Style = arrayBars[bar1Index].style;
                    bar1Style.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

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
                            backgroundColor: PRIMARY_COLOUR,
                            height: `${value}px`,
                        }}>
                    </div>
                ))} 
                {/* add buttons here  */}
                <div className="buttons">
                    <button onClick={() => this.resetArray()} className="gen">Generate New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button onClick={() => this.heapsort()}>Heap Sort</button>
                    {/* maybe add insertion and selection later */}
                </div>
                
            </div>
        );
    }
}

//check if arrays are equal

function arraysAreEqual(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false;
    }
    else {
        for (let i=0; i<arr1.length; i++){
            if (arr1[i] !== arr2[i]){
                return false;
            }
        }
        return true;
    }
}