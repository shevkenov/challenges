import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux'

import { setUploadFiles } from './redux/actions';
import UploadProgress from './components/uploadProgress/UploadProgress';

function App() {
  const dispatch = useDispatch();

  const handleUploadFiles = (e) => {
    e.preventDefault();

    dispatch(setUploadFiles(e.target.files));
    
    e.target.value = ''
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="file" name="file" multiple="multiple" onChange={handleUploadFiles}/>
      </header>
      <UploadProgress />
    </div>
  );
}



export default App;
