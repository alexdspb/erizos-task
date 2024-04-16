import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.open || false,
        };
    }

    render() {
        const { name, children } = this.props;
        const style = {
            marginTop: '10px',
        };

        const handleClick = (e) => {
            e.stopPropagation();
            this.setState({isOpen: !this.state.isOpen});
        };

        return (
            <div style={style} onClick={handleClick}>
                <strong>{this.state.isOpen ? '-' : '+'} {name}</strong>
                <div style={{
                    display: this.state.isOpen ? 'block' : 'none',
                    marginLeft: '20px',
                }}>{children}</div>
            </div>
        );
    }
}

Folder.propTypes = {
    name: PropTypes.string.isRequired,
    open: PropTypes.bool,
    children: PropTypes.node,
};

export default Folder;
