import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";
import "../styles/nav.css";

export default function Nav() {
  const useLocation = useLocation();
  const getNavPositionclass = () => {
    switch (useLocation.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    switch (useLocation.pathname) {
      case "/":
        return "ABOUT";
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROJECTS";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };

  const NavPositionclass = getNavPositionclass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => {
    return navClass === NavPositionclass;
  };

  const renderNavLink = (to, imgSrc, altText, navClass) => {};
}
