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
      <div>
        <AceEditor
          mode="sql"
          theme="monokai"
          onChange={this.onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{$blockScrolling: true}}
        />
        <button>Create</button>
        <button>Alter</button>
        <button>Drop</button>
        <button>Truncate</button>
        <button>Comment</button>
        <button>Save</button>
        <button>Clear</button>
        <button>Run Query</button>
      </div>
    );
  }
}

export default App;
