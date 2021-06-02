import redis from 'redis'

const client = redis.createClient();

// working with lists 
//  
/*  lpush: create a list, also push item to the top of the list 
            client.lpush(<key>, <value>)
    rpush: push value to the bottom of the list
            client.rpush(<key>, <value>)
    lrange: lists all items in the list, response received in callback
*/
// lpush: create a list, also push item to the top of the list 
// client.lpush(<key>, <value>)
client.lpush("my-goals-2021", "Become expert in Reactjs");

// rpush: push value to the bottom of the list
//             client.rpush(<key>, <value>)
client.rpush("my-goals-2021", "Do Yoga Everyday and be fit");
client.rpush("my-goals-2021", "Learn drawing and sketching ;)");
client.rpush("my-goals-2021", "By Happy! :D");

// lrange: lists all items in the list, response received in callback
client.lrange("my-goals-2021", 0, -1, (err, response) => {
    if(err) console.log(err);
    console.log(response)
})
