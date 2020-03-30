import styled from 'styled-components';

export const ProductList = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
column-gap: 30px;
row-gap: 30px;
 
li{
    background: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 20px;
    max-width: 300px;
    img{
    max-width: 200px;
    align-self: center;
    }
    >strong{
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 5px;

    }
    >span{
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px 0;
    }
    button{
        background: #715fc1;
        color: #fff;
        overflow: hidden;
        border-radius: 3px;
        border: none;
        margin-top: auto;      
        display: flex;
        align-items: center;
        >div{
            display: flex;
            align-items: center;
            padding: 12px;
            background-color: rgba(0,0,0,0.1);
            svg{
                margin: 0 5px 0 5px;
            }
        }
        span{
        flex: 1;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
    }
    }
}

@media(max-width: 992px){
    grid-template-columns: repeat(2, 1fr);
    li{
        margin: 0 auto;
    }
}
@media(max-width: 762px){
    grid-template-columns: 1fr ;
}  
`;
