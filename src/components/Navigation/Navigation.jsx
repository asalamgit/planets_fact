/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import classes from './Navigation.module.scss';
import clsx from 'clsx'
import imgMercury from '../../assets/planet-mercury.svg';
import imgVenus from '../../assets/planet-venus.svg';
import imgEarth from '../../assets/planet-earth.svg';
import imgMars from '../../assets/planet-mars.svg';
import imgJupiter from '../../assets/planet-jupiter.svg';
import imgSaturn from '../../assets/planet-saturn.svg';
import imgUranus from '../../assets/planet-uranus.svg';
import imgNeptune from '../../assets/planet-neptune.svg';
import $ from 'jquery';
import NavigationItem from '../NavigationItem/NavigationItem.jsx';

function Navigation(props) {

	const handleShowLinks = () => {
		props.setShowLinks(!props.showLinks);
	};

	if (props.showLinks === true && window.innerWidth < 650.01) {
		$('body').css('overflow-y', 'hidden');
	} else {
		$('body').css('overflow-y', 'visible');
	}

	return (
		<>
			<div className={classes.nav}>
				<ul className={clsx(classes.Navigation, props.showLinks ? classes.showNav : classes.hideNav)}>
					<NavigationItem className={classes.navigationMercury} planet="Mercury" to="/mercury" onSomeEvent={handleShowLinks}>
						<img src={imgMercury} />
						<span>MERCURY</span>
						<p>&gt;</p>
					</NavigationItem>
					<NavigationItem className={classes.navigationVenus} planet="Venus" to="/venus" onSomeEvent={handleShowLinks}>
						<img src={imgVenus} />
						<span>VENUS</span>
						<p>&gt;</p>
					</NavigationItem>
					<NavigationItem className={classes.navigationEarth} planet="Earth" to="/earth" onSomeEvent={handleShowLinks}>
						<img src={imgEarth} />
						<span>EARTH</span>
						<p>&gt;</p>
					</NavigationItem>
					<NavigationItem className={classes.navigationMars} planet="Mars" to="/mars" onSomeEvent={handleShowLinks}>
						<img src={imgMars} />
						<span>MARS</span>
						<p>&gt;</p>
					</NavigationItem>
					<NavigationItem className={classes.navigationJupiter} planet="Jupiter" to="/jupiter" onSomeEvent={handleShowLinks}>
						<img src={imgJupiter} />
						<span>JUPITER</span>
						<p>&gt;</p>
					</NavigationItem>
					<NavigationItem className={classes.navigationSaturn} planet="Saturn" to="/saturn" onSomeEvent={handleShowLinks}>
						<img src={imgSaturn} />
						<span>SATURN</span>
						<p>&gt;</p>
					</NavigationItem>
					<NavigationItem className={classes.navigationUranus} planet="Uranus" to="/uranus" onSomeEvent={handleShowLinks}>
						<img src={imgUranus} />
						<span>URANUS</span>
						<p>&gt;</p>
					</NavigationItem>
					<NavigationItem className={classes.navigationNeptune} planet="Neptune" to="/neptune" onSomeEvent={handleShowLinks}>
						<img src={imgNeptune} />
						<span>NEPTUNE</span>
						<p>&gt;</p>
					</NavigationItem>
				</ul>
				<button className={clsx(classes.burgerMenu, props.showLinks ? classes.showNav2 : classes.hideNav2)} onClick={handleShowLinks}>
					<div className={classes.burgerMenuBar1}></div>
					<div className={classes.burgerMenuBar2}></div>
					<div className={classes.burgerMenuBar3}></div>
				</button>
			</div>
		</>
	);
}

export default Navigation;
