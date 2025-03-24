// Create a new file auth.js to handle authentication
class Auth {
    constructor() {
        this.isAuthenticated = false;
        // Check if user is logged in (using localStorage for demo)
        const user = localStorage.getItem('user');
        if (user) {
            this.isAuthenticated = true;
        }
    }

    login(email, password) {
        // This is a mock login - in real app, you'd validate against a server
        localStorage.setItem('user', JSON.stringify({ email }));
        this.isAuthenticated = true;
    }

    logout() {
        localStorage.removeItem('user');
        this.isAuthenticated = false;
        window.location.href = 'login.html';
    }

    checkAuth() {
        if (!this.isAuthenticated) {
            window.location.href = 'login.html';
            return false;
        }
        return true;
    }
}

const auth = new Auth(); 