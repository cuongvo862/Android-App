import { IonButton, IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { toast } from '../toast'
import { getAllCustomers, insertCustomer } from '../database';
import { useHistory, useParams } from 'react-router';
import {deleteCustomer, getCustomerById, updateCustomer} from '../database'
import { Customer } from '../model';
import { trash } from 'ionicons/icons';

interface IdParam{
    id:string
}

const Detail: React.FC = () => {
    const [propertytype, setPropertytype] = useState('')
    const [bedrooms, setBedsroom] = useState('')
    const [date, setDate] = useState(new Date().toISOString())
    const [monthlyRentPrice, setMonthlyRentPrice] = useState('')
    const [furniture, setFurniture] = useState('')
    const [notes, setNotes] = useState('')
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const {id} = useParams<IdParam>()
    async function fetchData(){
        const result = await getCustomerById(Number.parseInt(id)) as Customer
        //lay toan bo du lieu trong DB, luu toan bo object vao result(la 1 mang)
        //sau do set cac object vao cac truong
        setPropertytype(result.propertytype)
        setBedsroom(result.bedrooms)
        setDate(result.date)
        setFurniture(result.furniture)
        setMonthlyRentPrice(result.monthlyRentPrice)
        setName(result.name)
        setNotes(result.notes)
        setComment(result.comment)
    }
    async function updateCus() {
        const newCus={ propertytype: propertytype, bedrooms: bedrooms, date: date, monthlyRentPrice: monthlyRentPrice, furniture: furniture, notes: notes, name: name, id:Number.parseInt(id), comment:comment} 
        await updateCustomer(newCus)
        window.location.href='View'  
    }

    async function  deleteCus() {
        //goi ham delete tu database
        await deleteCustomer(Number.parseInt(id))
        window.location.href='View' 
        
    }
    useEffect(()=>{fetchData()},[])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle >Detail Information</IonTitle>   
                </IonToolbar>
            </IonHeader>        
            <IonContent> 
            <IonItem lines="none">
                    <IonLabel position="floating" class="text">Property type</IonLabel>
                    <IonInput value={propertytype} class="login-text2" onIonChange={e => setPropertytype(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel position="floating" class="text">Bedrooms</IonLabel>
                    <IonInput value={bedrooms} class="login-text2" onIonChange={e => setBedsroom(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="text" position="stacked">Date and time</IonLabel>
                    <IonDatetime class="text" value={date}
                        onIonChange={e => setDate(e.detail.value!)}></IonDatetime>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel position="floating" class="text">Monthly rent price</IonLabel>
                    <IonInput value={monthlyRentPrice} class="login-text2" onIonChange={e => setMonthlyRentPrice(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel position="floating" class="text">Furniture types</IonLabel>
                    <IonInput value={furniture} class="login-text2" onIonChange={e => setFurniture(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel position="floating" class="text">Notes</IonLabel>
                    <IonInput value={notes} class="login-text2" onIonChange={e => setNotes(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel position="floating" class="text">Name of the reporter</IonLabel>
                    <IonInput value={name} class="login-text2" onIonChange={e => setName(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel position="floating" class="text">Comment</IonLabel>
                    <IonInput value={comment} class="login-text2" onIonChange={e => setComment(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem>
                    <IonButton onClick={updateCus} class="icon" shape="round" fill="outline" color="success" expand="block">Update</IonButton>
                    <IonButton onClick={deleteCus} class="icon" shape="round" fill="outline" color="danger" expand="block">Delete</IonButton>
                        {/* <IonIcon slot="icon-only" icon={trash}></IonIcon> */}
                </IonItem>
            </IonContent>
        </IonPage>
  );
};

export default Detail;




