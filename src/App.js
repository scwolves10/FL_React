import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CryptoTracker from "./CryptoTracker";
import "./style.css";
import Dashboard from "./components/dashboard/Dashboard";
import { ChainId, DAppProvider, ChainId, DAppProvider } from '@usedapp/core'
import ReactDOM from "react-dom";
import { formatEther, formatUnits, useEthers } from '@ethersproject/units'

const queryClient = new QueryClient();

const config = {
  readOnlyChainId: ChainId.Rinkeby,
  readOnlyUrls: {
    [ChainId.Rinkeby]: 'https://rinkeby.infura.io/v3/acda238b8d434de2840394eea3ad6df3',
  },
}

const App = () => {
  return (
    <div>
      <Dashboard />

      <Connect />

    </div>
  );
}
export default App;

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)


export function Connect() {
  const { activateBrowserWallet, account } = useEthers()
  const etherBalance = useEtherBalance(account)
  return (
    <div>
      <div >
        <button onClick={() => activateBrowserWallet()}>Connect</button>
      </div>
      {account && <p>Account: {account}</p>}
      {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}
    </div>
  )
}
export default Connect;




