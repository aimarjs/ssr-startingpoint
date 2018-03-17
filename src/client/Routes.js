import React from 'react';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';

export default [
	{
		...LandingPage,
		path: '/',
		exact: true
	},
	{
		...AboutPage,
		path: '/firmast'
	}
];
