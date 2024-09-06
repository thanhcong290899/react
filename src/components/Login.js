import { useState } from "react";
import './Login.css';  // Import file CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    // Sử dụng hook useState để khai báo một state biến tên là email và một hàm setEmail để cập nhật giá trị của email. 
    //Biến email được khởi tạo với giá trị ban đầu là một chuỗi rỗng "".
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Hook để điều hướng
    const handleLogin = (e) => {
        e.preventDefault();
        // Kiểm tra giá trị của email và password
        if (email === "cong@fpt.com" && password === "123") {
            alert("Đăng nhập thành công!");
            navigate('/view'); // Điều hướng đến trang ViewContent
        } else {
            alert("Email hoặc mật khẩu không chính xác.");
        }

    };

    return (
        <div className="container">
            <div className="formContainer">
                <h2>Please Sign In</h2>
                <form onSubmit={handleLogin}>
                    <div className="inputGroup">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            //xử lý sự kiện khi người dùng nhập giá trị vào ô input 
                            //Sự kiện onChange sẽ được kích hoạt mỗi khi có thay đổi (khi người dùng gõ mỗi ký tự).
                            //Giá trị hiện tại của ô input (e.target.value) sẽ là "test@example.com".
                            //Hàm setEmail("test@example.com") được gọi và cập nhật giá trị của email thành "test@example.com".
                            onChange={(e) => setEmail(e.target.value)}
                            className="input"
                        />
                    </div>
                    <div className="inputGroup">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input"
                        />
                    </div>
                    <div className="checkboxContainer">
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe"> Remember Me</label>
                    </div>
                    <button type="submit" className="button">Login</button>
                </form>
                <a href="/register" className="registerLink">Click here to Register</a>
            </div>

        </div>

    );
}

export default Login;