import React, { Component } from 'react'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            count: 0
        }
        this.winnerLine = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
    }

    isWinner = () => {
        let i = 0;
        let line = this.winnerLine[i];

        let s = (this.state.count % 2 === 0) ? 'X' : 'O';
        for (i = 0; i < 8; i++) {
            if (this.state.squares[line[0]] === s && this.state.squares[line[1]] === s && this.state.squares[line[2]] === s) {
                alert(s + ' win')
                setTimeout(() => {
                    this.setState({
                        count: 0,
                        squares: Array(9).fill(null)
                    })
                }, 2000);
            }
        }
    }

    handleClick = (e) => {
        let data = e.target.getAttribute('data');
        console.log(data);
        let currentSquare = this.state.squares;
        if (currentSquare[data] === null) {
            currentSquare[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
            console.log(currentSquare[data]);
            this.setState({
                squares: currentSquare,
                count: this.state.count + 1
            });
        } else {
            alert('warring!');
        }
        this.isWinner();
    }

    render() {
        let list = this.state.squares.map((item, index) => {
            return <div className="blocks" data={index} onClick={this.handleClick} key={index}>{item}</div>
        })
        return (
            <div className="main">
                {list}
            </div>
        );
    }
}

export default App

























//     constructor(props) {
//         super(props);
//         this.state = {
//             squares: Array(9).fill(null),
//             count: 0
//         }
//         this.winnerLine = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6]
//         ]
//     }

//     winner = () => {
//         let s = (this.state.count % 2 === 0) ? 'X' : 'O';
//         for (let i = 0; i < 8; i++) {
//             let line = this.winnerLine[i];
//             if (this.state.squares[line[0]] === s && this.state.squares[line[1]] === s && this.state.squares[line[2]] === s) {
//                 alert(s + 'win');
//                 setTimeout(() => {
//                     this.setState({ squares: Array(9).fill(null) });
//                     this.setState({ count: 0 });
//                 }, 3000)
//             }
//         }
//     }

//     handleClick = (e) => {
//         let data = e.target.getAttribute('data');
//         console.log(data);
//         let currentSquare = this.state.squares;
//         if (currentSquare[data] === null) {
//             currentSquare[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
//             this.setState({
//                 squares: currentSquare,
//                 count: this.state.count + 1
//             });
//         }
//         else {
//             alert('менять нельзя!!!')
//         }
//         this.winner();
//     }

//     render() {
//         let square = this.state.squares.map((item, index) => {
//             return <div className="blocks" onClick={this.handleClick} key={index} data={index}>{item}</div>
//         })
//         return (
//             <div className="main">
//                 {square}
//             </div>
//         );
//     }
// }

//export default App;




































// import React, { Component } from 'react'
// import './App.css'

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             squares: Array(9).fill(null),
//             count: 0
//         }
//         this.winnerLine = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6]
//         ]
//     }

//     isWinner = () => {
//         let s = (this.state.count % 2 === 0) ? 'X' : 'O';
//         for (let i = 0; i < 8; i++) {
//             let line = this.winnerLine[i];
//             if (this.state.squares[line[0]] === s && this.state.squares[line[1]] === s && this.state.squares[line[2]] === s) {
//                 alert(s + 'win');
//                 setTimeout(() => {
//                     this.setState({ squares: Array(9).fill(null) });
//                     this.setState({ count: 0 });
//                 }, 3000)
//             }
//         }
//     }

//     handleClick = (e) => {
//         console.log(1);
//         let data = e.target.getAttribute('data');
//         let currentSquare = this.state.squares;
//         console.log(currentSquare);
//         if (currentSquare[data] === null) {
//             currentSquare[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
//             this.setState({
//                 count: this.state.count + 1
//             });
//             this.setState({
//                 squares: currentSquare
//             });
//         }
//         else {
//             alert('нельзя!');
//         }
//         this.isWinner();
//     }

//     render() {
//         return (
//             <div className="main">
//                 <div className="blocks" onClick={this.handleClick} data="0">{this.state.squares[0]}</div>
//                 <div className="blocks" onClick={this.handleClick} data="1">{this.state.squares[1]}</div>
//                 <div className="blocks" onClick={this.handleClick} data="2">{this.state.squares[2]}</div>
//                 <div className="blocks" onClick={this.handleClick} data="3">{this.state.squares[3]}</div>
//                 <div className="blocks" onClick={this.handleClick} data="4">{this.state.squares[4]}</div>
//                 <div className="blocks" onClick={this.handleClick} data="5">{this.state.squares[5]}</div>
//                 <div className="blocks" onClick={this.handleClick} data="6">{this.state.squares[6]}</div>
//                 <div className="blocks" onClick={this.handleClick} data="7">{this.state.squares[7]}</div>
//                 <div className="blocks" onClick={this.handleClick} data="8">{this.state.squares[8]}</div>
//             </div>
//         );
//     }
// }
// export default App
