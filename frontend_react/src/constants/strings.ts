export const ID_HOME = "home";
export const ID_ABOUT = "about";
export const ID_WORK = "work";
export const ID_SKILLS = "skills";
export const ID_TESTIMONIALS = "testimonials";
export const ID_CONTACT = "contact";

export const PROJECTS = "Projects";
export const LINK_PROJECTS = "/work/";
export const OTHER = "Other";
export const LINK_OTHER = "";

export const CLASS_WHITE_BG = "app__whitebg";
export const CLASS_PRIMARY_BG = "app__primarybg";

export const QUERY_WORKS = '*[_type == "works"]';
export const QUERY_ABOUT = '*[_type == "abouts"]';
export const QUERY_WORK_EXPERIENCE = '*[_type == "workExperience"]';
export const QUERY_EXPERIENCES = '*[_type == "experiences"]';
export const QUERY_SKILLS = '*[_type == "skills"]';
export const QUERY_BRANDS = '*[_type == "brands"]';
export const QUERY_TESTIMONIALS = '*[_type == "testimonials"]';

export const ERROR_FORM_NAME = "Name cannot be empty";
export const ERROR_FORM_EMAIL = "Email is not valid";
export const ERROR_FORM_MESSAGE = "Message cannot be empty";

export const REGEX_EMAIL = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
