import { Component } from 'react';
import PropTypes from 'prop-types';

class File extends Component {
    render() {
        const { name, mimeType } = this.props;
        const style = {
            marginTop: '10px',
        };

        return (
            <div style={style}>
                <span>{name}</span> - <span>{mimeType}</span>
            </div>
        );
    }
}

File.propTypes = {
    name: PropTypes.string.isRequired,
    mimeType: PropTypes.string.isRequired
};

export default File;
