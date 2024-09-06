import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useParams to get the index
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Sidebar from './Nav';

const UpdateContent = () => {
    const { id } = useParams(); // Lấy index từ URL
    const navigate = useNavigate();
    const [content, setContent] = useState({ title: '', brief: '' });
    const [contenList, setContentList] = useState([]);

    useEffect(() => {
        // Lấy danh sách từ localStorage
        const storedContentList = JSON.parse(localStorage.getItem('contentList')) || [];
        setContentList(storedContentList);

        // Lấy nội dung cụ thể cần chỉnh sửa dựa trên index
        const contentToUpdate = storedContentList[parseInt(id)];
        if (contentToUpdate) {
            setContent(contentToUpdate);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedList = [...contenList];
        updatedList[parseInt(id)] = content; // Cập nhật nội dung tại index đã chọn

        // Cập nhật lại localStorage
        localStorage.setItem('contentList', JSON.stringify(updatedList));

        // Điều hướng quay lại trang ViewContent
        navigate('/view');
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
                    <h1>Update Content</h1>
                    <div className="card mt-4">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        value={content.title}
                                        onChange={(e) => setContent({ ...content, title: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="brief">Brief</label>
                                    <textarea
                                        className="form-control"
                                        id="brief"
                                        rows="3"
                                        value={content.brief}
                                        onChange={(e) => setContent({ ...content, brief: e.target.value })}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-success">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateContent;
