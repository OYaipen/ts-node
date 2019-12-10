export default class Gate {
    constructor(user) {
        this.user = user;
    }

    isAdmin() {
        return this.user.type === 'admin';
    }

    isUser() {
        return this.user.type === 'user';
    }
    isDeveloper(){
        return this.user.type === 'developer';
    }
    isAuthorizeDeveloper(){
        if (this.user.type === 'developer') {
            return true;
        }
    }
    
    isAdminOrDeveloper() {
        if (this.user.type === 'admin' || this.user.type === 'developer') {
            return true;
        }
    }
    
    // isDeveloperOrAdmin() {
    //     if (this.user.type === 'user' || this.user.type === 'developer') {
    //         return true;
    //     }
    // }
}

