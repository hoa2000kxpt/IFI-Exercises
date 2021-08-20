import {MongoClient} from 'mongodb'

export async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://hoa4c18hanu:Hoa2000kx.@test.mmbr1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'); //Database Name?
    return client;
}
