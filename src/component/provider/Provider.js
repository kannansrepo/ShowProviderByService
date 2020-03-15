import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProviders } from './actions';
import {List, ListItemText, ListItem, Divider }from '@material-ui/core';
import './provider.css'
class Service extends Component {
    state = {

    }
    componentWillMount() {
        this.props.fetchProviders().catch(error => console.log(error))
    }
    componentWillUnmount() {

    }
    componentWillReceiveProps(nextProps) {

    }

    render() {
        const { providers } = this.props;
        return (
            <>
            <h2 className="text-center">Results</h2>
            <List component="nav" aria-label="contacts" >
                {this.props.providers  ? 
                 providers.map(service =>
                    <>
                    <ListItem button>
                    <ListItemText primary={service.id} />
                    </ListItem>
                    <Divider />
                    </>
                 ) : 'unable to fetch services'}
            </List>
            </>
        )
    };
}
function mapStateToProps(state, ownProps) {
    const {providers, providerAttributes} = state.providerDetails;
    console.log(providerAttributes);
    return { providers }
};
function mapDispatchToProps(dispatch) {
    return {
        fetchProviders: () => dispatch(getProviders()),
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Service);
