import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/base-server', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false 
        });
        console.log('>>>Database connected')
    }
    catch{
        console.log('error dbs')
    }
}

export default connect;