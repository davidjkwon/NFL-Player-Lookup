import './App.css';
import Search from './components/search/search';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log("Search Data:", searchData);
    // Here you can handle the search data, e.g., make an API call or update state
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;
