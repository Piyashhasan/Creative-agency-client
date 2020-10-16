import React from 'react';

const AdminServiceDetails = ({serviceDetail}) => {
    return (
        <div className="col-md-12">
            <table class="table">
                <thead>
                    <tr>
                        <td>{serviceDetail.name}</td>
                        <td>{serviceDetail.email}</td>
                        <td>{serviceDetail.service}</td>
                        <td>{serviceDetail.details}</td>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default AdminServiceDetails;