import { IonButton, IonCard, IonContent, IonDatetime, IonHeader, IonLabel, IonList, IonPage, IonRefresher, IonRefresherContent, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { toast } from '../toast'
import { getAllCustomers, insertCustomer } from '../database';
import { useHistory, useParams } from 'react-router';
import {deleteCustomer, getCustomerById, updateCustomer} from '../database'
import { Customer } from '../model';
import { RefresherEventDetail } from '@ionic/core';

interface IdParam{
    id:string
}
const View: React.FC = () => {
    const [propertytype, setPropertytype] = useState('')
    const [bedrooms, setBedsroom] = useState('')
    const [date, setDate] = useState(new Date().toISOString())
    const [monthlyRentPrice, setMonthlyRentPrice] = useState('')
    const [furniture, setFurniture] = useState('')
    const [notes, setNotes] = useState('')
    const [name, setName] = useState('')
    const [allCus, setAllCus] = useState<Customer[]>([]) 
    const [search, setSearch] = useState('')

    const {id} = useParams<IdParam>()
        const history = useHistory()
      
    async function fetchData(){
        const result = await getAllCustomers() //goi ham getallCustomer
        setAllCus(result) //gan vao bien result

    }
    useEffect(()=>{fetchData()},[])

    async function performSearch(searchString: string) {
        const prods = await getAllCustomers()
        //search Property type trong bien prods
        const result = prods.filter(p => p.propertytype.toLowerCase().includes(searchString.toLowerCase()))
        setAllCus(result)
        //gan setAllCus = result
      }
    
    function doRefresh(event: CustomEvent<RefresherEventDetail>) {
        fetchData();
        setTimeout(() => {
          event.detail.complete();
        }, 1500);
      }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Apartment List</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonSearchbar onIonChange={e => performSearch(e.detail.value!)}></IonSearchbar>
            <IonContent className="ion-padding">
                <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
                    <IonRefresherContent>
                    </IonRefresherContent>
                </IonRefresher>
                <IonList>
                    {allCus.map(e=>
                        <IonCard routerLink={'/Detail/' + e.id}button key={e.id}>
                            <IonLabel>
                                {e.propertytype}
                            </IonLabel>
                        </IonCard>
                        )}
                </IonList>

            </IonContent>
        </IonPage>
  );
};

export default View;




