import { useEffect, useState } from 'react'
import { Web3AuthCore } from '@web3auth/core'
import { WALLET_ADAPTERS, CHAIN_NAMESPACES } from '@web3auth/base'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
import Dashboard from './Dashboard'
import './App.css'
import RPC from './web3RPC' // for using web3.js

const clientId = 'BPWk1UaQufdtH_nG78pGGKME6nvzERI7r4s9VgoXKBDznlQbfPOZB28iyv4Dc282dVxFflkZW26ZjO3Yb-W2Xmw' // get from https://dashboard.web3auth.io

function App() {
  const [web3auth, setWeb3auth] = useState(null)
  const [provider, setProvider] = useState(null)

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3AuthCore({
          clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: '0x5',
          },
          web3AuthNetwork: 'testnet',
        })
        console.log('web3auth')
        console.log(web3auth)
        const openloginAdapter = new OpenloginAdapter({
          adapterSettings: {
            uxMode: 'popup',
            loginConfig: {
              jwt: {
                verifier: 'kyd-github-verifier',
                typeOfLogin: 'github',
                clientId: '0GJzjeCXVWVhXKZsPfuJEOjPWdELdbFc',
              },
            },
          },
        })
        web3auth.configureAdapter(openloginAdapter)
        setWeb3auth(web3auth)

        await web3auth.init()
        if (web3auth.provider) {
          setProvider(web3auth.provider)
        }
      } catch (error) {
        console.error(error)
      }
    }

    init()
  }, [])

  const login = async () => {
    if (!web3auth) {
      uiConsole('web3auth not initialized yet 1')
      return
    }
    console.log('HERE')
    const web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
      loginProvider: 'jwt',
      extraLoginOptions: {
        domain: 'https://dev-jwm33vfng1aitlgn.us.auth0.com',
        verifierIdField: 'sub',
      },
    })
    setProvider(web3authProvider)
  }

  const getUserInfo = async () => {
    if (!web3auth) {
      uiConsole('web3auth not initialized yet')
      return
    }
    const user = await web3auth.getUserInfo()
    console.log('user')
    console.log(user)
    uiConsole(user)
  }

  const logout = async () => {
    if (!web3auth) {
      uiConsole('web3auth not initialized yet')
      return
    }
    await web3auth.logout()
    setProvider(null)
  }

  const signMessage = async () => {
    if (!provider) {
      uiConsole('provider not initialized yet')
      return
    }
    const rpc = new RPC(provider)
    const signedMessage = await rpc.signMessage()
    uiConsole(signedMessage)
  }

  function uiConsole(...args) {
    const el = document.querySelector('#console>p')
    if (el) {
      el.innerHTML = JSON.stringify(args || {}, null, 2)
    }
  }

  return (
    <div className="app">
      <div className="connect">
        {!provider && (
          <button onClick={login} className="card">
            Connect With Github
          </button>
        )}
        {provider && (
          <button onClick={logout} className="card">
            Disconnect
          </button>
        )}
      </div>
      <Dashboard />
    </div>
  )
}

export default App
