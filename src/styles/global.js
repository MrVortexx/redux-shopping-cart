import {createGlobalStyle} from 'styled-components'
import background from '../assets/background.svg'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}
body {
    background: #191920 url(${background}) center top no-repeat;
}
body, input, button{
    font: 14px sans-serif;
}
#root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px 0;
}
button{
    cursor: pointer;
}
`