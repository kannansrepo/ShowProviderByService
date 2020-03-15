import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getServices } from './actions';
import {List, ListItemText, ListItem, Divider }from '@material-ui/core';

class Service extends Component {
    state = {
    }
    componentWillMount() {
        this.props.fetchServices().catch(error => console.log(error))
    }
    componentWillUnmount() {

    }
    componentWillReceiveProps(nextProps) {

    }

    render() {
        const { services } = this.props;
        return (
            <>
            <h2>Controls</h2>
            <List component="nav" aria-label="contacts" >
                {this.props.services ? 
                 services.map(service =>
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
    console.log(state);
    const services = state.serviceDetails.services;
    return { services }
};
function mapDispatchToProps(dispatch) {
    return {
        fetchServices: () => dispatch(getServices()),
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Service);
