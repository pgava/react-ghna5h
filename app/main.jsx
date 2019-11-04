
import React from 'react';
import ReactDOM from 'react-dom';
import { Upload } from '@progress/kendo-react-upload';

class CustomListItemUI extends React.Component {

handleRemove = function(id){
  alert(id);
  // remove the file from db
  // remove list item from UI
}

    render() {
        const { files } = this.props;

        return (
        <ul>
            {
                files.map(file => <li key={file.name}>{file.name}<a href="#" onClick={(db_id) => this.handleRemove('<pass the db id here>')}><span style={{color: "red", paddingLeft: "10px"}}>X</span></a></li>)
            }
        </ul>);
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                sometext
                <Upload
                    batch={true}
                    multiple={true}
                    defaultFiles={[]}
                    withCredentials={false}
                    listItemUI={CustomListItemUI}
                    saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'}
                    
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);

