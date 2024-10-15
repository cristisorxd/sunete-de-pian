import doImg from "../assets/do.png";
import cheiaSol from "../assets/cheia-sol.png";
import siImg from "../assets/si.png";
import portativSolGol from '../assets/portativ-gol-cheia-sol.png'
import portativFaGol from '../assets/portativ-gol-cheia-fa.png'
import { HINT_TYPES } from "./constants";

export default [
  {
    question: "Cum se numeste acest simbol?",
    options: ["Cheia Sol", "Cheia Fa", "Cheia Do", "Cheia Re"],
    correct_answer: "Cheia Sol",
    points: 10,
    image: cheiaSol,
  },
  {
    question: "Cati timpi are nota din imagine?",
    options: ["1 timp", "2 timpi", "3 timpi", "4 timpi"],
    correct_answer: "4 timpi",
    points: 10,
    image: doImg,
  },
  {
    question: "Cum se numeste nota prezentata in imagine?",
    options: ["Do", "Re", "Mi", "Fa", "Si"],
    correct_answer: "Do",
    points: 10,
    image: doImg,
  },
  {
    question: "Cate linii are portativul?",
    options: ["5", "4", "6", "7"],
    correct_answer: "5",
    points: 5,
    hint:{
      type: HINT_TYPES.IMAGE,
      content: portativSolGol
    }
  },
  {
    question: "Cate spatii are portativul?",
    options: ["4", "5", "3", "6"],
    correct_answer: "4",
    points: 5,
    hint:{
      type: HINT_TYPES.IMAGE,
      content: portativSolGol
    }
  },
  {
    question: "Ce nota sta pe a doua linie din cheia sol?",
    options: ["Do", "Re", "Mi", "Sol"],
    correct_answer: "Sol",
    points: 10,
    hint:{
      type: HINT_TYPES.IMAGE,
      content: portativSolGol
    }
  },
  {
    question: "Cum se numeste nota prezentata in imagine?",
    options: ["Re", "Mi bemol", "Si bemol", "Si"],
    correct_answer: "Si",
    points: 10,
    image: siImg,
  },
  {
    question: "Ce nota sta pe spatiul patru din cheia fa?",
    options: ["Do", "Sol", "La", "Si"],
    correct_answer: "Sol",
    points: 10,
    hint:{
      type: HINT_TYPES.IMAGE,
      content: portativFaGol
    }
  },
  {
    question: "Cati timpi are nota din imagine?",
    options: ["1 timp", "2 timpi", "3 timpi", "4 timpi"],
    correct_answer: "1 timp",
    points: 10,
    image: siImg,
  },
  {
    question: "Ce nota sta lipita de linia cinci din cheia fa?",
    options: ["Do", "Si", "Re", "Fa"],
    correct_answer: "Si",
    points: 5,
    hint:{
      type: HINT_TYPES.IMAGE,
      content: portativFaGol
    }
  },
  {
    question: "Ce nota sta pe linia patru din cheia fa?",
    options: ["Fa", "Do", "La", "Sol"],
    correct_answer: "Fa",
    points: 5,
    hint:{
      type: HINT_TYPES.IMAGE,
      content: portativFaGol
    }
  },
  {
    question: "Ce nota sta lipita de linia unu din cheia sol?",
    options: ["Do", "Re", "Mi", "Fa"],
    correct_answer: "Re",
    points: 5,
    hint:{
      type: HINT_TYPES.IMAGE,
      content: portativSolGol
    }
  },
  {
    question: "Ce nota sta pe primul spatiu din cheia sol?",
    options: ["Fa", "Mi", "Sol", "La"],
    correct_answer: "Fa",
    points: 5,
    hint:{
      type: HINT_TYPES.IMAGE,
      content: portativSolGol
    }
  },
];