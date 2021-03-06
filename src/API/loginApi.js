import axios from "axios";
axios.defaults.baseURL = "https://over-back.herokuapp.com";

export const LoginApi = {
    tryToLogin: (name, password,form) => {
        axios
            .post("/auth/login", {
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
                // form.props.history.push("/employees");
                form.success()
                return "";
            })
            .catch(function(error) {
                console.log(error);
                form.setState({msg:"wrong password"})
            });
    }
};
