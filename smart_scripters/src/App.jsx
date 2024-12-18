import { ThemeProvider } from './context/themeContext'; // Adjust the path as necessary  
import './App.css';
import { ThemedContent } from './components/themeContent';

function App() {  
  return (  
    <ThemeProvider>  
      <ThemedContent />  
    </ThemeProvider>  
  );  
}  


export default App;