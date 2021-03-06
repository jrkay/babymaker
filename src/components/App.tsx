import React, {Component} from 'react';
import '../style.css';
import ParentGeno from './ParentGenoInput/ParentGenoInput';
import ParentPheno from './ParentPhenoInput/ParentPhenoInput';

class App extends Component {
  render() {
    return (
      <div className="body">
	    <div id="subTitle">a tool for sim foals</div>
      <div id="title">BabyMaker</div>
      &nbsp; {/*for background color */}
      <div className="contentPane">
        <div className="inputTitles">Generate foal with genotypes</div>
        <ParentGeno />
        <div className="inputTitles">Generate foal with phenotypes</div>
        <ParentPheno />
      </div>
    </div>
    )
  };
}

export default App;
