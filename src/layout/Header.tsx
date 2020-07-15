import React, {useState} from 'react';

import clsx from 'clsx';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Button, Collapse, Container, List, ListItem} from '@material-ui/core';

import projectLogo from '../assets/images/react.svg';
import {NavLink} from 'react-router-dom';

export const Header: React.FC = () => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <header className="hero-wrapper bg-composed-wrapper bg-white">
      <div className="header-top-section pb-2">
        <Container>
          <div
            className="bg-white p-2 shadow-xxl header-nav-wrapper header-nav-wrapper-xl rounded-bottom px-4 navbar-light">
            <div className="app-nav-logo">
              <NavLink
                to="/"
                title="Open Data Chile - Diputados"
                className="app-nav-logo app-nav-logo--dark">
                <div className="app-nav-logo--icon shadow-second-sm bg-deep-sky border-0">
                  <img
                    alt="Open Data Chile - Diputados"
                    src={projectLogo}
                  />
                </div>
                <div className="app-nav-logo--text">
                  <span>open-data</span>
                  <b>Política</b>
                </div>
              </NavLink>
            </div>
            <div className="header-nav-menu d-none d-lg-block">
              <ul className="d-flex nav nav-neutral-first justify-content-center">
                <li className="justify-content-center">
                  <NavLink
                    to="/integrantes"
                    className="font-weight-bold rounded-sm px-3">
                    Integrantes
                  </NavLink>
                </li>
                <li className="justify-content-center">
                  <NavLink
                    to="/votaciones"
                    className="font-weight-bold rounded-sm px-3">
                    Votaciones
                  </NavLink>
                </li>
                <li className="justify-content-center">
                  <a href="http://open-data.cl" target="_blank" rel="noopener noreferrer"
                    className="font-weight-bold rounded-sm px-3">
                    Quienes somos
                  </a>
                </li>
              </ul>
            </div>
            <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
              <span className="d-block d-lg-none">
              <button
                onClick={toggle}
                className={clsx('navbar-toggler hamburger hamburger--elastic', {
                  'is-active': collapse
                })}>
                <span className="hamburger-box">
                  <span className="hamburger-inner"/>
                </span>
              </button>
            </span>
            </div>
            <div className="d-flex d-lg-none">
              <Collapse
                in={collapse}
                className="nav-collapsed-wrapper navbar-collapse">
                <div className="nav-inner-wrapper">
                  <Button
                    onClick={toggle}
                    className="btn-danger btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'times']}/>
                  </span>
                  </Button>

                  <div className="p-3">
                    <div className="px-4 text-uppercase py-2 text-second font-weight-bold font-size-sm">
                      Menú
                    </div>
                    <List component="div" className="nav-pills nav-neutral-primary nav-pills-rounded flex-column">
                      <ListItem
                        button
                        component={NavLink}
                        to="/ejecutivo"
                        className="px-4 d-flex align-items-center">
                        <span>Ejecutivo</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        button
                        component={NavLink}
                        to="/legislativo"
                        className="px-4 d-flex align-items-center">
                        <span>Legislativo</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        button
                        component={NavLink}
                        to="/judicial"
                        className="px-4 d-flex align-items-center">
                        <span>Judicial</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                    </List>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
        </Container>
        <div className={clsx('collapse-page-trigger', {'is-active': collapse})}
             onClick={toggle}/>
      </div>
    </header>
  );
}
