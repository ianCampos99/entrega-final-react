import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config"; 

export const getProducts = async () => {
    try {
        const productsCollection = collection(db, "productos");
        const querySnapshot = await getDocs(productsCollection);
        const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return products;
    } catch (error) {
        return [];
    }
};
export const getProductsByCategory = async (categoryId) => {
    try {
        const productsCollection = collection(db, "productos");
        const q = query(productsCollection, where("category", "==", categoryId));
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return products;
    } catch (error) {
        
        return [];
    }
};

export const getProductById = async (itemId) => {
    try {
        const docRef = doc(db, "productos", itemId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};
