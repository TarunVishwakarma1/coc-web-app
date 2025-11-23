class ClientError {
    
    constructor(
        private message: string,
        private type: string,
        private reason: string,
        private detail: object
    ) {
    }

    setReason(reason: string){
        this.reason = reason
    }
    setType(type: string){
        this.type = type
    }
    setMessage(message: string){
        this.message = message
    }
    setDetail(detail: object){
        this.detail = detail
    }

    getReason(){
        return this.reason
    }
    getType(){
        return this.type
    }
    getMessage(){
        return this.message
    }
    getDetail(){
        return this.detail
    }
}