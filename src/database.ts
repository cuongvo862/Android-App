import {openDB} from 'idb'
import { Customer } from './model'

const dbName = "coursework"

initDB().then(()=>{
    console.log('Init Done!')
})
//chay ham init

//xoa theo id
export async function deleteCustomer(id:number) {
    const db = await openDB("coursework",1)
    await db.delete("coursework",id)
}
//xoa theo id

export async function updateCustomer(customer:Customer) {
    const db = await openDB("coursework",1)
    //goi ten document
    var productDB = await db.get("coursework",customer.id!) as Customer
    //lay gia tri theo id
    productDB.name = customer.name
    productDB.bedrooms = customer.bedrooms
    productDB.date= customer.date
    productDB.furniture = customer.furniture
    productDB.monthlyRentPrice = customer.monthlyRentPrice
    productDB.notes = customer.notes
    productDB.propertytype = customer.propertytype
    productDB.comment = customer.comment
//lay tat ca cac gia tri trong DB gan bang voi gia tri nhap vao
    await db.put("coursework",productDB);
}
//set 

export async function getCustomerById(id:number) {
    const db = await openDB("coursework",1);
    return await db.get("coursework",id)
}
//lay toan bo du lieu cua object theo id trong DB

export async function getAllCustomers() {
    const db = await openDB("coursework",1);
    return await db.transaction("coursework").objectStore("coursework").getAll();
}
//get toan bo du lieu tu DB

export async function insertCustomer(Customers: Customer) {
    const db = await openDB(dbName, 1)
    await db.put('coursework',Customers)
}
//insert cac truong vao DB
// 1 la version cua DB

async function initDB() {
    const db = await openDB(dbName, 1, {
        upgrade(db) {
            // Create a store of objects
            const store = db.createObjectStore('coursework', {
                // The 'id' property of the object will be the key.
                keyPath: 'id',
                // If it isn't explicitly set, create a value by auto incrementing.
                autoIncrement: true,
            });
        },
    });
}
//khoi tao DB