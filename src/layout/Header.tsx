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
                title="Open Data Chile - Política"
                className="app-nav-logo app-nav-logo--dark">
                <div className="app-nav-logo--icon shadow-second-sm bg-deep-sky border-0">
                  <img
                    alt="Open Data Chile - Política"
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
                    to="/ejecutivo"
                    onClick={() => {
                    }}
                    className="font-weight-bold rounded-sm px-3">
                    Ejecutivo
                    <span className="opacity-5 dropdown-arrow">
                    <FontAwesomeIcon icon={['fas', 'angle-down']}/>
                  </span>
                  </NavLink>
                  <div className="submenu-dropdown submenu-dropdown--md">
                    <div className="shadow-lg w-100 bg-deep-sky p-4 rounded">
                      <div className="px-4 text-uppercase pb-2 text-white font-weight-bold font-size-sm">
                        Gobierno
                      </div>
                      <List component="div" className="nav-pills nav-transparent nav-pills-rounded flex-column">
                        <ListItem
                          button
                          className="px-4 text-white-50 d-flex align-items-center">
                          <span>Presidencia</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          button
                          onClick={() => {
                          }}
                          className="px-4 d-flex text-white-50 align-items-center">
                          <span>Ministerios</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                      </List>
                      <div className="px-4 text-uppercase pb-2 text-white font-weight-bold font-size-sm">
                        Municipalidades
                      </div>
                      <List component="div" className="nav-pills nav-transparent nav-pills-rounded flex-column">
                        <ListItem
                          button
                          className="px-4 text-white-50 d-flex align-items-center">
                          <span>Alcaldes</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          button
                          onClick={() => {
                          }}
                          className="px-4 d-flex text-white-50 align-items-center">
                          <span>Consejales</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                      </List>
                    </div>
                  </div>
                </li>
                <li className="justify-content-center">
                  <NavLink
                    to="/legislativo"
                    className="font-weight-bold rounded-sm px-3">
                    Legislativo
                  </NavLink>
                </li>
                <li className="justify-content-center">
                  <NavLink
                    to="/judicial"
                    className="font-weight-bold rounded-sm px-3">
                    Judicial
                  </NavLink>
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
