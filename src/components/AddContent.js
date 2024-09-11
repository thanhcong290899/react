import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './cpn.css';
import Header from './Header';
import Sidebar from './Nav';
const ContentForm = () => {

    const [title, setTitle] = useState('');
    const [brief, setBrief] = useState('');

    const [contenList, setContentList] = useState([]);
    //Gọi API: Tải dữ liệu từ một API khi component được tải lần đầu.
    //Cập nhật DOM: Thay đổi hoặc thao tác với DOM sau khi render.
    //Đăng ký sự kiện: Đăng ký hoặc hủy đăng ký sự kiện như lắng nghe sự kiện cuộn trang hoặc thay đổi kích thước cửa sổ.
    //Lưu trữ vào Local Storage: Lưu trữ dữ liệu vào local storage khi state hoặc props thay đổi.
    useEffect(() => {
        const storedContentList = JSON.parse(localStorage.getItem('contentList')) || [];
        setContentList(storedContentList);
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        const newContent = {
            title: title,
            brief: brief
        };


        //...contentList: Spread operator lấy tất cả các phần tử hiện có của mảng contentList và trải chúng ra.
        //[...contentList, newContent]: Tạo một mảng mới bao gồm tất cả các phần tử của contentList, sau đó thêm phần tử newContent vào cuối mảng mới.
        const newContenList = [...contenList, newContent]
        setContentList(newContent);

        localStorage.setItem('contentList', JSON.stringify(newContenList));

        // Xóa các trường nhập liệu
        setTitle('');
        setBrief('');

    };
    return (
        <>
            <div className='row line'>
                <Header />
            </div>
            <div className='row'>
                <div className='col-2 boder-line'>
                    <Sidebar />
                </div>
                <div className='col-10'>
                    <h1>Form Content</h1>
                    <div className="card mt-4">
                        <div className="card-body">
                            <form id="addContent" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        placeholder="Enter the title"
                                        value={title} // Liên kết với state
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="brief">Brief</label>
                                    <textarea
                                        className="form-control"
                                        id="brief"
                                        rows="3"
                                        value={brief}
                                        onChange={(e) => setBrief(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-success">
                                    Submit Button
                                </button>
                                <button type="reset" id="resetButton" className="btn btn-warning">
                                    Reset Button
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ContentForm;
