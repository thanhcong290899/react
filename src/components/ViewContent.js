import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cpn.css';
import Sidebar from './Nav';
import Header from './Header';

const ViewContent = () => {
    const [contentList, setContentList] = useState([]);
    //lưu trữ nội dung đã được lọc dựa trên từ khóa tìm kiếm.
    const [filteredContent, setFilteredContent] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            fetch('/data/Brief.json')
                .then(response => response.json())
                .then(data => {
                    setContentList(data);
                    setFilteredContent(data);
                    setLoading(false);
                })
                .catch(error => {

                    setLoading(false);
                });
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Lọc nội dung dựa trên từ khóa tìm kiếm
        const results = contentList.filter(content =>
            content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            content.brief.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredContent(results);
    }, [searchTerm, contentList]);

    const handleDelete = (index) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this content?');
        if (confirmDelete) {
            const updatedList = [...contentList];
            updatedList.splice(index, 1);
            setContentList(updatedList);
            setFilteredContent(updatedList);
        }
    };

    const handleEdit = (index) => {
        navigate(`/update/${index}`);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <>
            <div className='row line'>
                <Header />
            </div>
            <div className='row'>
                <div className='col-2 boder-line'>
                    <Sidebar onSearch={handleSearch} />
                </div>
                <div className='col-10'>
                    <h1>View Content</h1>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
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
                                            {filteredContent.map((content, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{content.title}</td>
                                                    <td>{content.brief}</td>
                                                    <td>
                                                        <button type="button" className="btn btn-primary" onClick={() => handleEdit(index)}>Edit</button>
                                                        <button type="button" className="btn btn-danger ms-2" onClick={() => handleDelete(index)}>Delete</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ViewContent;
