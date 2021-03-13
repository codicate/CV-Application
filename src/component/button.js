import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.css';

const NewIco = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" /></svg>
);

export class Button extends Component {
  static propTypes = {
    section: PropTypes.elementType.isRequired
  };

  state = {
    sectionNum: 0
  };

  render() {
    return (
      <>
        {
          [...Array(this.state.sectionNum)].map(
            (_, i) => <this.props.section key={i} />
          )
        }
        <button className='newBtn' onClick={
          () => {
            this.setState({ sectionNum: this.state.sectionNum + 1 });
          }
        }>
          <NewIco />
          New Section
        </button>
      </>
    );
  }
}

export default Button;