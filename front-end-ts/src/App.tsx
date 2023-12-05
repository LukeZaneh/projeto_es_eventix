import './globals.css'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './_root/RootLayout'
import Home from './_root/pages/Home'
import Eventos from './_root/pages/Eventos'
import Compras from './_root/pages/Vendas'

import CadastroEventos from './_root/pages/CadastroEventos'
import NovoEvento from './_root/pages/NovoEvento'
import { OrganizerContextProvider } from './_root/context/OrganizerContext'
import Vendedores from './_root/pages/Vendedores'
import CadastroVendedores from './_root/pages/CadastroVendedores'
import CadastrarVenda from './_root/pages/CadastrarVenda'


function App() {
  return (
    <main className='flex h-screen'>
      <OrganizerContextProvider>
        <Routes>
          {/* public routes */}
          {/* login autenthication */}

          {/* private routes */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='/eventos' element={<Eventos />} />
            <Route path='/cadastro-eventos' element={<CadastroEventos />} />
            <Route path='/vendas' element={<Compras />} />
            <Route path='/vendedores' element={<Vendedores />} />
            <Route path='/novo-evento' element={<NovoEvento />} />
            <Route path='/cadastro-vendedor' element={<CadastroVendedores/>} />
            <Route path='/cadastro-venda' element={<CadastrarVenda/>} />
          </Route>
        </Routes>
      </OrganizerContextProvider>
    </main>
  )
}

export default App
