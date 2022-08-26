import React from 'react'

export default function Device() {
    return (
        <div className="device card">
            <img className="card-img-top" src="" alt="" />
            <div className="card-body">
                <h5 className="card-title">Device Hostname</h5>
                <table className="table">
                    <thead>
                        <th>Type</th>
                        <th>Ip</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>type here</td>
                            <td>ip here</td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary">Rescan</button>
                <button className="btn btn-danger">Delete</button> 
            </div>
        </div>
            )
        }
