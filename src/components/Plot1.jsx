import React from 'react';
import Plotly from 'react-plotly.js';

class Plot1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        z: [["49.61936",
        "48.55022",
        "33.47752",
        "30.1086",
        "18.3516",
        "10.41339",
        "6.63927",
        "26.79797",
        "63.05717",
        "69.20554",
        "68.66396",
        "95.17499",
        "134.9879",
        "48.08919",
        "54.1941",
        "6.919659",
        "21.73871",
        "0.0",
        "0.0",
        "0.0",
        "0.0",
        "0.0",
        "0.0",
        "3.008948",
        "5.626141"          
        ], ["27.80985",
        "27.71966",
        "30.4267",
        "16.66549",
        "8.815617",
        "6.628881",
        "21.83975",
        "53.34303",
        "25.66785",
        "12.827",
        "0.0",
        "0.0",
        "0.0",
        "0.0",
        "0.0",
        "0.0",
        "0.0",
        "0.0",
        "0.0",
        "0.0",
        "0.0",
        "0.0",
        "0.0",
        "0.001229679",
        "0.0"          
        ], [
          "83.08067",
          "65.21374",
          "44.80953",
          "39.96952",
          "8.658275",
          "24.81939",
          "18.97085",
          "6.63927",
          "22.1414",
          "46.76293",
          "59.0435",
          "80.03818",
          "130.3696",
          "142.5558",
          "146.3839",
          "195.1709",
          "123.1339",
          "62.04672",
          "79.62993",
          "33.2664",
          "29.77937",
          "31.409",
          "19.58994",
          "5.909858",
          "7.676256"
        ]], type: 'surface',
        surfacecolor: { color: 'gold' }
      }], layout: {
        width: 750,
        height: 750,
        title: 'A Fancy Plot1'
      }
    };
  }

  render() {
    return (
      <Plotly
        data={this.state.data}
        layout={this.state.layout}
        frames={this.state.frames}
        config={this.state.config}
        onInitialized={(figure) => this.setState(figure)}
        onUpdate={(figure) => this.setState(figure)}
      />
    );
  }
}

export default Plot1;