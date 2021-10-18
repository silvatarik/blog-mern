const config = {
    mongo:{
        options:{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            socketTimeout:30000,
            keepAlive:true,
            poolSize:50,
            autoIndex:false,
            retryWrites:false
        },
        url:`mongodb+srv://silvatarik:Saturno*@cluster0.wt8dq.mongodb.net/myFirstDatabase`
    },
    server: {
       host:'localhost',
       port: 3000
    }
};

export default config;
