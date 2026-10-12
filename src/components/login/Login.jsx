export default function Login() {
    return (
        // < !--Login Page(Only for Guest users ) -->
        <section id="login-page">

            <form id="login">
                <div className="container">
                    <h1>Login</h1>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" />

                    <label for="login-pass">Password</label>
                    <input type="password" id="login-password" name="password" placeholder="Password"/>
                        <input type="submit" className="btn submit" defaultValue="Login" />
                </div>
            </form>
        </section>
    );
}