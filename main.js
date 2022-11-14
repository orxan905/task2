
class Message{
    constructor(name,message){
        this.name = name;
        this.message = message;
    }
    
}

let arr = [];

class Messenger extends Message{
    constructor(name,message){
        super(name,message);
        
    }
    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }
    
    send(name,message){
        this.name = name;
        this.message = message;
        arr.push(this.gettime()+" "+ this.name + ": "+ this.message);
        
    }
    show_history(){
        console.log(arr)
    }
    
}

let messenger = new Messenger();
messenger.send('Adil','ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()

