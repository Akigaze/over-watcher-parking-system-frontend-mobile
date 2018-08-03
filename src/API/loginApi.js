import axios from "axios";

export const LoginApi = {
    tryToLogin: (name, password,form) => {
        axios
            .post("http://localhost:9090/auth/login", {
                username: name,
                password: password
            })
            .then(response => {
                console.log("登录成功的结果\n----------------------")
                console.log(response);
                window.localStorage.token = response.data.token;
                window.localStorage.roles = response.data.roles;
                window.localStorage.id = response.data.id;
                window.localStorage.username = response.data.username;
                form.props.history.push("/employees");
                return "";
            })
            .catch(function(error) {
                console.log(error);
                form.setState({msg:"wrong password"})
            });
    }
};
