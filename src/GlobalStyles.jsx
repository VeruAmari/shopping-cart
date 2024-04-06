import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  html {
    --color-1: #333745;
    --color-2: #E63462;
    --color-3: #af9164;
    --color-4: #C7EFCF;
    --color-5: #EEF5DB;

    --light-background: var(--color-5);
    --dark-background: var(--color-1);
    
    // Fonts //
    
    // General font   

    * {
      font-family: "Josefin Sans", sans-serif;
    
    }
    
    // Logo font
    --logo-font-family: font-family: "Sansita", sans-serif;
    --logo-font-style: italic;
    --logo-font-weight: 900;
  };
`;

export default GlobalStyles;
