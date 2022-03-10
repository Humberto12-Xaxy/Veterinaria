import AppRouter from './Componentes/AppRouter';
import Login from './Componentes/loginpage/login';
import RegisterM from './Componentes/VistaMascota/AddMascotaUser';
import MenuPrincipalMA from './Componentes/VistaMascota/menuMascotaUser';
import TablaMascotaU from './Componentes/VistaMascota/tablaMascotaU';


function App() {
  return (
    <div className="App">
      <AppRouter/>
     {/* <TablaMascotaU/> */}
    </div>
  );
}

export default App;
