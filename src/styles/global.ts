import { createGlobalStyle} from "styled-components"


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: #e1e1e6;

    }
`;
