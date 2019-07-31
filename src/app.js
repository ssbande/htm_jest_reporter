<<<<<<< HEAD
import React, { Component } from 'react';
import './styles/reset.css';
import './styles/main.css';

class App extends Component {
  last_known_scroll_position = 0;

  state = {
    defaultCurveValue: 350,
    curveRate: 3,
    ticking: false,
    curveValue: ''
  }

  scrollEvent(scrollPos) {
    if(scrollPos >= 0 && scrollPos < this.state.defaultCurveValue) {
      const newCurveValue = this.state.defaultCurveValue - parseFloat(scrollPos / this.state.curveRate);
      this.setState({ curveValue: newCurveValue});
      document
        .getElementById('curve')
        .setAttribute('d', `M 800 300 Q 400 ${newCurveValue} 0 300 L 0 0 L 800 0 L 800 300 Z`);
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', e => {
      this.last_known_scroll_position = window.scrollY;

      if (!this.state.ticking) {
        window.requestAnimationFrame(() => {
          this.scrollEvent(this.last_known_scroll_position);
          this.setState({ticking: false});
        });
      }

      this.setState({ticking: true});
    })
  }

  render() {
    return <div>
      <div className="svg-container">
        <svg viewBox="0 0 800 400" className="svg">
          <path id="curve" fill="#50c6d8" d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z">
          </path>
        </svg>
      </div>
      <header>
        <h1>This is a header title</h1>
        <h3>Here you are, scroll down.</h3>
      </header>
      <main>
        <p>And the main section.</p>
      </main>
      <footer>
        <p>And, the footer.</p>
        <small>&#128378; Happy testing ...</small>
      </footer>
    </div>
=======
import React, { Component, Fragment } from 'react';
import './content/styles/reset.css';

class App extends Component {
  constructor(props) {
    super();

  }
  
  render() {
    console.log('props: ', this.props);
    return <div>Shreyas Bande</div>
>>>>>>> 9c7fda47290a8d4bc26c48d48b8b67ab4a73c90a
  }
}

export default App;