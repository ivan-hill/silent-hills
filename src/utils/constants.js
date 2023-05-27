import gmir from "../images/gmir.jpg";
import evora from "../images/evora.jpg";
import graveyard from "../images/graveyard.jpg";
import flower from "../images/flower.jpg";
import custle from "../images/custle.jpeg";
import horse from "../images/horse.jpg";
import sleepangel from "../images/sleepangel.jpg";
import child from "../images/child.jpg";

export const feedbackButton = document.querySelector(".header__feedback"); //
export const burger = document.querySelector(".burger-menu");
export const navContent = document.querySelector(".topnav__content");
export const topnav = document.querySelector(".topnav");
export const menu = document.querySelector(".topnav__links");
export const topnavContacts = document.querySelector(".topnav__contacts");
export const scrollUpButton = document.queryCommandValue(".scrollup");
export const DeletedToken = "Token removed";
export const SomethingWrong = "Something went wrong.";
export const formData = {
  formSelector: ".form",
  inputSelector: ".form__input",
  checkboxSelector: ".form__checkbox",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__input-error_active",
};
export const portfolioImages = [
  {
    src: gmir,
  },
  {
    src: evora,
  },
  {
    src: graveyard,
  },
  {
    src: flower,
  },
  { src: custle },
  {
    src: horse,
  },
  {
    src: sleepangel,
  },
  {
    src: child,
  },
  { src: custle },
];
export const questionsDataList = [
  {
    question: "How can I make payments?",
    answer:
      "Payment is divided into two parts, the first - prepayment is made at the conclusion of the contract, and the second - the extra payment is made after installation work, or upon receipt of the finished product in the office.",
  },
  {
    question: "How long will the monuments last?",
    answer:
      "Granite monuments are durable, and even in our harsh weather conditions retain their properties and shape for centuries.",
  },
  {
    question: "What material to choose for the monument - granite or marble?",
    answer:
      "Granite is more practical and durable, and also requires less maintenance",
  },
  {
    question: "Can I install my own monument?",
    answer:
      "Yes, of course, but it is worth remembering that granite has a high density, hence - a lot of weight. The weight of a set of granite monuments is about 220 kg",
  },
  {
    question: "Do you give a warranty on granite monuments?",
    answer:
      "Yes, the warranty on granite monuments from our workshop is 20 years.",
  },
];
