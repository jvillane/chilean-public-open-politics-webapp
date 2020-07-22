import React, {useState} from 'react';

import clsx from 'clsx';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Button, Collapse, Container, List, ListItem} from '@material-ui/core';
import {NavLink, useHistory} from 'react-router-dom';

import projectLogo from '../img/logo.svg';

export const Header: React.FC = () => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);
  const history = useHistory();

  return (
    <header className="hero-wrapper bg-composed-wrapper bg-white">
      <div className="header-top-section pb-2">
        <Container>
          <div
            className="bg-white p-2 shadow-xxl header-nav-wrapper header-nav-wrapper-xl rounded-bottom px-4 navbar-light">
            <div className="app-nav-logo">
              <NavLink to="/" title="Open Data Chile - Legislativo" className="app-nav-logo app-nav-logo--dark">
                {false && (
                  <div className="app-nav-logo--icon shadow-second-sm border-0 bg-secondary">
                    <img alt="Open Data Chile" src={projectLogo}/>
                  </div>
                )}
                <div className="app-nav-logo--text">
                  <span>legislativo</span>
                  <b>open-data.cl</b>
                </div>
              </NavLink>
            </div>
            <div className="header-nav-menu d-none d-lg-block">
              <ul className="d-flex nav nav-neutral-first justify-content-center">
                <li className="justify-content-center">
                  <NavLink to="/diputados" className="font-weight-bold rounded-sm px-3">
                    Diputados
                    <span className="opacity-5 dropdown-arrow">
                    <FontAwesomeIcon icon={['fas', 'angle-down']}/>
                  </span>
                  </NavLink>
                  <div className="submenu-dropdown submenu-dropdown--md">
                    <div className="shadow-lg w-100 bg-deep-sky p-4 rounded">
                      <List component="div" className="nav-pills nav-transparent nav-pills-rounded flex-column">
                        <ListItem button className="px-4 text-white-50 d-flex align-items-center"
                                  onClick={() => {
                                    history.push('/diputados/integrantes')
                                  }}>
                          <span>Integrantes</span>
                          <FontAwesomeIcon icon={['fas', 'angle-right']} className="opacity-6 ml-auto"/>
                        </ListItem>
                        <ListItem button className="px-4 d-flex text-white-50 align-items-center"
                                  onClick={() => {
                                    history.push('/diputados/votaciones')
                                  }}>
                          <span>Votaciones</span>
                          <FontAwesomeIcon icon={['fas', 'angle-right']} className="opacity-6 ml-auto"/>
                        </ListItem>
                      </List>
                    </div>
                  </div>
                </li>
                <li className="justify-content-center">
                  <NavLink to="/senadores" className="font-weight-bold rounded-sm px-3">
                    Senadores
                    <span className="opacity-5 dropdown-arrow">
                      <FontAwesomeIcon icon={['fas', 'angle-down']}/>
                    </span>
                  </NavLink>
                  <div className="submenu-dropdown submenu-dropdown--md">
                    <div className="shadow-lg w-100 bg-deep-sky p-4 rounded">
                      <List component="div" className="nav-pills nav-transparent nav-pills-rounded flex-column">
                        <ListItem button className="px-4 text-white-50 d-flex align-items-center"
                                  onClick={() => {
                                    history.push('/senadores/integrantes')
                                  }}>
                          <span>Integrantes</span>
                          <FontAwesomeIcon icon={['fas', 'angle-right']} className="opacity-6 ml-auto"/>
                        </ListItem>
                        <ListItem button className="px-4 d-flex text-white-50 align-items-center"
                                  onClick={() => {
                                    history.push('/senadores/votaciones')
                                  }}>
                          <span>Votaciones</span>
                          <FontAwesomeIcon icon={['fas', 'angle-right']} className="opacity-6 ml-auto"/>
                        </ListItem>
                      </List>
                    </div>
                  </div>
                </li>
                <li className="justify-content-center">
                  <NavLink to="/fuentes"
                           className="font-weight-bold rounded-sm px-3">
                    Fuentes
                  </NavLink>
                </li>
                <li className="justify-content-center">
                  <a href="http://open-data.cl" target="_blank" rel="noopener noreferrer"
                     className="font-weight-bold rounded-sm px-3">
                    Quiénes somos
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
                      Diputados
                    </div>
                    <List component="div" className="nav-pills nav-neutral-primary nav-pills-rounded flex-column">
                      <ListItem
                        button
                        component={NavLink}
                        to="/diputados/integrantes"
                        className="px-4 d-flex align-items-center">
                        <span>Integrantes</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        button
                        component={NavLink}
                        to="/diputados/votaciones"
                        className="px-4 d-flex align-items-center">
                        <span>Votaciones</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                    </List>
                    <div className="px-4 text-uppercase py-2 text-second font-weight-bold font-size-sm">
                      Senadores
                    </div>
                    <List>
                      <ListItem
                        button
                        component={NavLink}
                        to="/senadores/integrantes"
                        className="px-4 d-flex align-items-center">
                        <span>Integrantes</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        button
                        component={NavLink}
                        to="/senadores/votaciones"
                        className="px-4 d-flex align-items-center">
                        <span>Votaciones</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                    </List>
                    <div className="px-4 text-uppercase py-2 text-second font-weight-bold font-size-sm">
                      Otros
                    </div>
                    <List>
                      <ListItem
                        button
                        component={NavLink}
                        to="/fuentes"
                        className="px-4 d-flex align-items-center">
                        <span>Fuentes</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <a href="http://open-data.cl" target="_blank" rel="noopener noreferrer">
                        <ListItem
                          button
                          className="px-4 d-flex align-items-center">
                          <span>Quienes somos</span>
                          <FontAwesomeIcon icon={['fas', 'angle-right']} className="opacity-6 ml-auto"/>
                        </ListItem>
                      </a>
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
