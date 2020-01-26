import './style.css'

import ArmedBoard from './components/ArmedBoard'
import RawBoard from './components/RawBoard'
import { createGame } from './helpers/createGame'

const table = document.createElement('table')
const root = document.querySelector('.root')

const BOARD_SIZE = 20
const LEVEL = 0.4 // 0.4 - easy, 0.3 - normal, 0.2 - hard

const {rawBoard} = new RawBoard(BOARD_SIZE, LEVEL)
const {armedBoard} = new ArmedBoard(rawBoard)

armedBoard.forEach(createGame(table))

root.appendChild(table)