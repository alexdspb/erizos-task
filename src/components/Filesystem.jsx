import {Component} from 'react';
import PropTypes from 'prop-types';
import File from './File.jsx';
import Folder from './Folder.jsx';

class Filesystem extends Component {
    constructor(props) {
        super(props);
    }

    renderFolder(folderData) {
        const { name, items, open } = folderData;

        return (
            <Folder key={name} name={name} open={open}>
                {items.map(item => {
                    if (item.type === 'folder') {
                        return this.renderFolder(item);
                    } else {
                        return (
                            <File key={item.name} name={item.name} mimeType={item.mimeType} />
                        );
                    }
                })}
            </Folder>
        );
    }

    render() {
        let { data } = this.props;
        const style = {
            border: '1px solid gray',
            padding: '10px',
            textAlign: 'left',
        };

        return (<>
            <div style={style}>
                {this.renderFolder(data)}
            </div>
        </>);
    }
}

Filesystem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Filesystem;
