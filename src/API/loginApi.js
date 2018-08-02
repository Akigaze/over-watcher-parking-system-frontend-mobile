import axios from "axios";

export const LoginApi = {
    tryToLogin: (name, password,form) => {
        axios
            .post("http://localhost:9090/auth/login", {
                username: name,
                password: password
            })
            .then(response => {
                console.log(response);
                window.localStorage.token = response.data.token;
                window.localStorage.roles = response.data.roles;
                window.localStorage.id = response.data.id;
                window.localStorage.username = response.data.username;
                form.props.history.push("/employees");
                return "";
            })
            .catch(function(error) {
                // this.setState({msg:"wrong password"});
                // console.log(this.state)
                // message.error('用户名或密码错误！',1);
                console.log(error);
                form.setState({msg:"wrong password"})

            });
    }
};
