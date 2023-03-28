import './App.css';
// import {useState} from "react";
import React from "react";

class App extends React.Component {

    quoteBank = [
        {
            text: "You’ve got to start with the customer experience and work back toward the technology – notthe other way around.",
            author: "Steve Jobs"
        },
        {
            text: "Any product that needs a manual to work is broken.",
            author: "Alan Musk"
        },
        {
            text: "Quality in a product or service is not what the supplier puts in. it is what the customer gets out and is willing to pay for. A product is not quality because it is hard to make and costs a lot of money, as manufacturers typically believe.",
            author: "Peter Drucker"
        },
        {
            text: "A product is something made in a factory; a brand is something that is bought by the customer. A product can be copied by a competitor; a brand is unique. A product can be quickly outdated; a successful brand is timeless.",
            author: "Stephen King"
        },
        {
            text: "Great design will not sell an inferior product, but it will enable a great product to achieve its maximum potential.",
            author: "Thomas Watson"
        }
    ]

    bgColors = ['red', 'green', 'blue', 'purple', 'grey', 'black', 'pink', 'orange'];
    randomColor = this.bgColors[Math.floor(Math.random() * this.bgColors.length)];
    body = document.querySelector('body')
    randomQuote = this.quoteBank[Math.floor(Math.random() * this.quoteBank.length)];


    constructor(props) {
        super(props);

        this.state = {
            text: this.randomQuote.text,
            author: this.randomQuote.author,
            bgColor: this.randomColor
        }

        this.body.style.color = this.randomColor
        this.body.style.backgroundColor = this.randomColor
    }

    randomizeQuote = () => {
        let randomColor = this.bgColors[Math.floor(Math.random() * this.bgColors.length)];
        let randomQuote = this.quoteBank[Math.floor(Math.random() * this.quoteBank.length)];

        this.setState(
            {
                text: randomQuote.text,
                author: randomQuote.author,
                bgColor: randomColor
            }
        )
        this.body.style.color = randomColor
        this.body.style.backgroundColor = randomColor
    }

    handleClick() {
        this.setState({
            text: "You clicked!"
        });
    }


    render() {
        return (
            <div className="App">
                <div id="wrapper">
                    {/*<QuoteBox/>*/}
                    <div id="quote-box">
                        <div className="quote-text" style={{opacity: 1}}>
                            <i className="fa fa-quote-left"></i> <span id="text">{this.state.text}</span>
                        </div>
                        <div className="quote-author" style={{opacity: 1}}>
                            <span id="author">{this.state.author}</span>
                        </div>

                        <div className="buttons">
                            <a className="button" id="tweet-quote" title="Tweet this quote!" target="_top"
                               href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + this.state.text}
                               style={{backgroundColor: this.state.bgColor}}>
                                <i className="fab fa-twitter"></i>
                            </a>
                           <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank"
                               rel="noreferrer"
                               href={{"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + this.state.text}
                               style={{backgroundColor: this.state.bgColor}}>
                                <i className="fab fa-tumblr"></i>
                            </a>
                            <button className="button" id="new-quote" style={{backgroundColor: this.state.bgColor}}
                                    onClick={this.randomizeQuote}>New quote
                            </button>
                        </div>
                    </div>
                    <div className="footer">By <a href="https://codepen.io/jedafe/">Jephthah Okpukoro</a></div>
                </div>
            </div>
        );
    }
}

export default App;

