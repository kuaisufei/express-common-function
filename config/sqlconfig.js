module.exports = {  
 	mysql: {   
        host: '127.0.0.1',     
        user: 'root',   
        password: '123456',  
        database:'main', // 前面建的user表位于这个数据库中 
        port: 3306  
    },
    redis: {
    	host:'127.0.0.1', 
    	port:6379,
    	opts:{},
        pwd:{}
    }
};