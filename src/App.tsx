import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTab, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { addCircleOutline, gridOutline, home as homeIcon, personAddSharp as personAddShapeIcon } from 'ionicons/icons'


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home'
import Add from './pages/add';
import View from './pages/view';
import Detail from './pages/Detail';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
        <Route path="/" component={Home} exact>
          </Route>
          
          <Route path="/Home" component={Home} exact>
          </Route>
          <Route path="/View" component={View} exact></Route>
          <Route path="/Detail/:id" component={Detail} exact></Route>
          <Route path="/Add" component={Add} exact></Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="homeTab" href="/Home">
            <IonIcon icon={homeIcon}></IonIcon>
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="viewTab" href="/View">
            <IonIcon icon={gridOutline}></IonIcon>
            View List</IonTabButton>
          <IonTabButton tab="addTab" href="/Add">
            <IonIcon icon={addCircleOutline}></IonIcon>
            Add</IonTabButton>
                   
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
