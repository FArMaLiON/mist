import React, { Component } from 'react';
import Data from './Data';
import Fees from './Fees';

class ExecutionContext extends Component {
  constructor(props) {
    super(props);
  }

  formattedBalance() {
    return EthTools.formatBalance(
      web3.utils.toBN(this.props.value || 0),
      '0,0.00[0000000000000000]',
      'ether'
    );
  }

  renderExecutionSentence() {
    if (this.props.toIsContract) {
      return <div className="execution-context__sentence">Coming Soon!</div>;
    }

    return (
      <div className="execution-context__sentence">
        Transfer <span className="bold">{this.formattedBalance()} ETHER</span>
      </div>
    );
  }

  render() {
    return (
      <div className="execution-context">
        {this.renderExecutionSentence()}

        {/*
        <Data
          data={this.props.data}
          showFormattedParams={this.props.showFormattedParams}
        />

        <Fees
          estimatedGas={this.props.estimatedGas}
          gasLoading={this.props.gasLoading}
          estimatedFee={this.props.estimatedFee}
          providedGas={this.props.providedGas}
        />
        */}
      </div>
    );
  }
}

export default ExecutionContext;
