import { FaTooth, FaMoneyBillWave } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillExperiment, AiFillFileText } from "react-icons/ai";



export const routes = [
 { name: 'Produtos' , path: '/products', icon: FaTooth},
 { name: 'Alunos', path: '/students', icon: BsFillPeopleFill},
 { name: 'Laboratórios', path: '/laboratories', icon: AiFillExperiment},
 { name: 'Pedidos', path: '/solicitation', icon: AiFillFileText},
 { name: 'Financeiro', path: '/financial', icon: FaMoneyBillWave},
]