import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cpn.css';
import Sidebar from './Nav';
import Header from './Header';
const ViewContent = () => {

    const [contenList, setContentList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedContentList = JSON.parse(localStorage.getItem('contentList')) || [];
        setContentList(storedContentList);
    })

    const handleDelete = (index) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this content?');
        if (confirmDelete) {
            // Tạo một bản sao mới của danh sách
            const updateList = [...contenList];
            // Xóa phần tử tại index được chọn
            updateList.splice(index, 1);

            // Cập nhật state và localStorage
            setContentList(updateList);
            localStorage.setItem('contentList', JSON.stringify(updateList));
        }

    }
    const handleEdit = (index) => {
        navigate(`/update/${index}`);
    }
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
                    <h1>View Content</h1>
                    <div className="card mt-4">
                        <div className="card-body">
                            <form id="viewContent">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Brief</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="contentbody">
                                        {contenList.map((content, index) =>
                                            <tr key={index}>
                                                <td>{index + 1} </td>
                                                <td>{content.title} </td>
                                                <td>{content.brief} </td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" onClick={() => handleEdit(index)}>Edit</button>
                                                    <button type="button" className="btn btn-danger ms-2" onClick={() => handleDelete(index)}>Delete</button>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
export default ViewContent;