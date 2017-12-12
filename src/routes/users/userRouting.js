import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Login, New, Show } from '../../components';

export const routes = [
    {
        'path':'/',
        'component': Login,
        'exact': true
    },
    {
        'path':'/user/new',
        'component': New
    },
    {
        'path':'/me',
        'component': Show
    }
    // {
    //     'path':'/protected',
    //     'component': () => (fakeAuth.isAuthenticated ? (<Protected />) : (<Redirect to={{pathname: '/login',state: { from: '/protected'}
    //     }}/>))
    // }
];