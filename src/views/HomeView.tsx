import React, {useState} from "react";
import {Button, Collapse, Container, List, ListItem} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import clsx from 'clsx';
import projectLogo from '../assets/images/react.svg';
import hero8 from '../assets/images/hero-8.jpg';

import '../assets-crypto/base.scss';
import '../css/style.scss';
import '../css/style-crypto.scss';

export const HomeView: React.FC = () => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <div className="hero-wrapper bg-composed-wrapper bg-night-sky">
      <div className="hero-wrapper--content">
        <div className="bg-composed-wrapper--image bg-composed-filter-rm"
             style={{backgroundImage: 'url(' + hero8 + ')'}}/>
        <div className="bg-composed-wrapper--bg bg-second opacity-5"/>
      </div>
      <header className="header-top-section pb-2 pt-4">
        <Container>
          <div className="bg-white-10 p-2 header-nav-wrapper header-nav-wrapper-xl rounded px-4 navbar-dark">
            <div className="app-nav-logo">
              <NavLink
                to="/"
                title="Open Data Chile - Política"
                className="app-nav-logo app-nav-logo--light">
                <div className="app-nav-logo--icon shadow-second-sm bg-secondary border-0">
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
                    className="font-weight-bold rounded-sm text-white px-3">
                    Ejecutivo
                    <span className="opacity-5 dropdown-arrow">
                    <FontAwesomeIcon icon={['fas', 'angle-down']}/>
                  </span>
                  </NavLink>
                  <div className="submenu-dropdown submenu-dropdown--md">
                    <div className="shadow-sm-dark w-100 bg-primary p-4 rounded">
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
                    className="font-weight-bold rounded-sm text-white px-3">
                    Legislativo
                  </NavLink>
                </li>
                <li className="justify-content-center">
                  <NavLink
                    to="/judicial"
                    className="font-weight-bold rounded-sm text-white px-3">
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
                className="nav-collapsed-wrapper shadow-sm-dark navbar-collapse">
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
      </header>
      <div className="hero-wrapper--content">
        <div className="bg-composed-wrapper--content">
          <div className="MuiContainer-root z-over shadow-container-content-5 MuiContainer-maxWidthLg">
            <div className="MuiGrid-root py-5 MuiGrid-container MuiGrid-spacing-xs-6">
              <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-lg-6">
                <div className="pt-3 text-white pt-xl-5 pr-0 pr-xl-5"><h2
                  className="display-3 font-weight-bold">Bamburgh
                  React Crypto Application with Material-UI PRO</h2><p className="font-size-xl py-3 text-white-50">Easy
                  to
                  customize application inspired by the cryptocurrency products niche. Start working on your product
                  today
                  with this amazing, clean and feature-packed niche template.</p>
                  <div className="pt-3"><a
                    className="MuiButtonBase-root MuiButton-root MuiButton-text rounded-sm font-weight-bold shadow-second-sm btn-first MuiButton-textSizeLarge MuiButton-sizeLarge"
                    tabIndex={0} role="button" aria-disabled="false"
                    href="/bamburgh-react-crypto-application-pro-demo/Overview"><span className="MuiButton-label"><span
                    className="btn-wrapper--label">Dashboard Overview</span><span className="btn-wrapper--icon"><svg
                    aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right"
                    className="svg-inline--fa fa-arrow-right fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"><path fill="currentColor"
                                                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg></span></span><span
                    className="MuiTouchRipple-root"/></a><a
                    className="MuiButtonBase-root MuiButton-root MuiButton-text rounded-sm bg-white-10 text-white ml-3 MuiButton-textSizeLarge MuiButton-sizeLarge"
                    tabIndex={0} role="button" aria-disabled="false"
                    href="/bamburgh-react-crypto-application-pro-demo/Wallets"><span className="MuiButton-label"><span>My Wallets</span></span><span
                    className="MuiTouchRipple-root"/></a></div>
                </div>
              </div>
              <div className="MuiGrid-root d-flex align-items-center MuiGrid-item MuiGrid-grid-lg-6"><img
                src="/bamburgh-react-crypto-application-pro-demo/static/media/graduation.83de25bb.svg" alt="..."
                className="m-5 m-lg-0 img-fit-container"/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
