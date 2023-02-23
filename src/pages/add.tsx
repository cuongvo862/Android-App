import { IonButton, IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { toast } from '../toast'
import { insertCustomer } from '../database';

const Add: React.FC = () => {
    const [propertytype, setPropertytype] = useState('')
    const [bedrooms, setBedsroom] = useState('')
    const [date, setDate] = useState(new Date().toISOString())
    const [monthlyRentPrice, setMonthlyRentPrice] = useState('')
    const [furniture, setFurniture] = useState('')
    const [notes, setNotes] = useState('')
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')

    function validation() {
        if (propertytype.length == 0 || bedrooms.length == 0 || monthlyRentPrice.length ==  0) {
            toast("Do not empty!");
        }
        else if (parseInt(monthlyRentPrice) <= 0) {
            toast("Price more than $0");
        }
        else {
            const newCus = { propertytype: propertytype, bedrooms: bedrooms, date: date, monthlyRentPrice: monthlyRentPrice, furniture: furniture, notes: notes, name: name, comment: comment }
            insertCustomer(newCus).then(() =>
                toast("Submit succesfully")
            )
            window.location.href='Add'  
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle >Add Information</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            
                <IonItem lines="none">
                    <IonLabel position="floating" class="text">Property type</IonLabel>
                    <IonInput class="login-text2" onIonChange={e => setPropertytype(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel position="floating" class="text">Bedrooms</IonLabel>
                    <IonInput class="login-text2" onIonChange={e => setBedsroom(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="text" position="stacked">Date and time</IonLabel>
                    <IonDatetime class="text" value={date}
                        onIonChange={e => setDate(e.detail.value!)}></IonDatetime>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel position="floating" class="text">Monthly rent price</IonLabel>
                    <IonInput class="login-text2" onIonChange={e => setMonthlyRentPrice(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel position="floating" class="text">Furniture types</IonLabel>
                    <IonInput class="login-text2" onIonChange={e => setFurniture(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel position="floating" class="text">Notes</IonLabel>
                    <IonInput class="login-text2" onIonChange={e => setNotes(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel position="floating" class="text">Name of the reporter</IonLabel>
                    <IonInput class="login-text2" onIonChange={e => setName(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem>
                    <IonButton class="icon" shape="round" fill="outline" color="success" onClick={validation} expand="block">Submit</IonButton>
                </IonItem>

            </IonContent>
        </IonPage>
    );
};

export default Add;

