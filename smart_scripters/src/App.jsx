<<<<<<< HEAD
import { ThemeProvider } from './context/themeContext'; // Adjust the path as necessary  
import './App.css';
import { ThemedContent } from './components/themeContent';
=======
import './App.css'
import { Hotels } from './components/Hotels'
import { LandingPage } from './components/LandingPage'
>>>>>>> dc12de07f9f5b0bac15846de1e84cea8ce8e278a

function App() {  
  return (  
    <ThemeProvider>  
      <ThemedContent />  
    </ThemeProvider>  
  );  
}  

<<<<<<< HEAD
=======
  return (
    <>
      <Hotels/>
      <LandingPage/>
    </>
  )
}
>>>>>>> dc12de07f9f5b0bac15846de1e84cea8ce8e278a


export default App;