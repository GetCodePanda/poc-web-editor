import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/sql';
import 'brace/theme/monokai';

class App extends Component {

  onChange(newValue) {
    console.log(newValue);
  }

  render() {
    return (
      <AceEditor
        mode="sql"
        theme="monokai"
        onChange={this.onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{$blockScrolling: true}}
      />
    );
  }
}

export default App;
