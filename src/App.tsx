import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";
import "./App.css";
import Home from "./pages/Home";
import { ContextGlobal } from "./context/Context";

function App() {
  return (
    <div className='App'>
      <ApolloProvider client={client}>
        <ContextGlobal>
          <Home />
        </ContextGlobal>
      </ApolloProvider>
    </div>
  );
}

export default App;
